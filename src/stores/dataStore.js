import { create } from "zustand";
import { localDB } from "../api/db";

// Fetch all data from the localDB
const fetchData = async () => {
  try {
    const docs = await localDB.allDocs({ include_docs: true });
    return docs.rows.map((row) => row.doc); // Return only the 'doc' field from each object
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// Read data with a selector
export const readData = async (params) => {
  if (!Array.isArray(params)) {
    params = [params];
  }
  try {
    const result = await localDB.find({
      selector: { $or: params },
      limit: 1000000 ,
    });
    return result.docs;
  } catch (err) {
    console.error("Error reading data:", err);
    return [];
  }
};

// Save data (insert or update)
export const saveData = async (doc) => {
  try {
    if ("_id" in doc) {
      // Update existing document
      console.log("Updating document:", doc);
      await localDB.put(doc);
    } else {
      // Insert new document
      console.log("Inserting new document:", doc);
      await localDB.post(doc);
    }
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

export const deleteData = async (data) => {
  try {
    console.log("deleteData => recebido:", data);
    
    // Se data for um objeto com _id, utilize-o diretamente (supondo que _rev também esteja presente)
    if (typeof data === "object" && data._id && typeof data._id === "string" && data._id.trim() !== "") {
      await localDB.remove(data);
      console.log("Documento deletado:", data);
      return;
    }
    
    // Se data for uma string, proceda buscando o documento
    if (!data || typeof data !== "string" || data.trim() === "") {
      throw new Error("Invalid ID: must be a non-empty string");
    }
    
    const doc = await localDB.get(data);
    await localDB.remove(doc);
    console.log("Documento deletado:", doc);
  } catch (err) {
    console.error("Error deleting data:", err);
  }
};



export const deleteDataByFruta = async (ensaioId, fruta) => {
  try {
    console.log("Buscando documento para deletar... Ensaio:", ensaioId, "Fruta:", fruta);

    // Verifica se os parâmetros são válidos
    if (!ensaioId || !fruta) {
      throw new Error("Parâmetros inválidos: ensaioId e fruta são obrigatórios.");
    }

    // Busca o documento pelo ensaioId e Fruta
    const result = await localDB.find({
      selector: { 
        ensaioId: ensaioId, 
        Fruta: fruta 
      }
    });

    if (result.docs.length === 0) {
      console.warn("Nenhum documento encontrado para os critérios.");
      return;
    }

    // Deleta os documentos encontrados
    for (const doc of result.docs) {
      await localDB.remove(doc);
      console.log("Documento deletado:", doc._id);
    }

  } catch (err) {
    console.error("Erro ao deletar o dado:", err);
  }
};


export const deleteDataFilter = async (filters) => {
  try {
    // Busca documentos que atendam aos filtros passados
    const result = await localDB.find({
      selector: filters,
    });

    if (result.docs && result.docs.length > 0) {
      // Para cada documento encontrado, marca-o para deleção
      const docsToDelete = result.docs.map((doc) => ({
        ...doc,
        _deleted: true,
      }));

      // Executa a deleção em lote
      const deletionResult = await localDB.bulkDocs(docsToDelete);
      console.log("Documents deleted:", deletionResult);
    } else {
      console.log("Nenhum documento encontrado para os filtros informados:", filters);
    }
  } catch (err) {
    console.error("Error deleting data:", err);
  }
};

// Zustand store
export const useDataStore = create((set, get) => ({
  clientId: undefined,
  setClientId: (newClientId) => set({ clientId: newClientId }),

  ensaioId: undefined,
  setEnsaioId: (newEnsaioId) => set({ ensaioId: newEnsaioId }),

  step: { section: "form", activeStep: 0 },
  setStep: (newStep) => set({ step: newStep }),
}));

// Função para buscar e editar um documento
export const editDataByParams = async (filters, updates) => {
  try {
    // Busca o documento usando os filtros
    const result = await localDB.find({
      selector: {
        $and: filters, // Combina os filtros usando $and
      },
    });
    console.log(result)

    if (result.docs.length === 0) {
      console.log("Nenhum documento encontrado para os filtros fornecidos.");
      return null;
    }

    // Edita o primeiro documento encontrado (ajuste se necessário)
    const doc = result.docs[0];

    // Atualiza os campos no documento
    const updatedDoc = { ...doc, ...updates };

    // Salva o documento atualizado
    await localDB.put(updatedDoc);

    console.log("Documento atualizado com sucesso:", updatedDoc);
    return updatedDoc;
  } catch (error) {
    console.error("Erro ao editar os dados:", error);
    return null;
  }
};


