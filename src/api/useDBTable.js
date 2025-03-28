//ESSE ARQUIVO AINDA NAO É UTILIZADO, FOI CRAIDO PARA COMPONENTIZAÇÃO FUTURA DO CODIGO
import { useState, useEffect } from "react";
import { readData, saveData, deleteData } from "../stores/dataStore";

/**
 * Hook genérico para interagir com uma tabela do BD.
 *
 * @param {string} tableName - Nome da tabela (ex: "plano", "lab_suco", "pesagens").
 * @param {string} clientId
 * @param {string} ensaioId
 *
 * @returns {Object} { data, refresh, saveRecord, deleteRecord }
 */
export function useDbTable(tableName, clientId, ensaioId) {
  const [data, setData] = useState([]);

  // Lê do BD sempre que clientId ou ensaioId mudarem.
  const refresh = async () => {
    if (!clientId || !ensaioId) return;
    try {
      const res = await readData({ table: tableName, clientId, ensaioId });
      if (Array.isArray(res)) {
        setData(res);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Erro ao ler dados da tabela:", tableName, error);
      setData([]);
    }
  };

  // Salva e atualiza (opcionalmente pode dar refresh depois).
  const saveRecord = async (record) => {
    try {
      await saveData({
        table: tableName,
        clientId,
        ensaioId,
        ...record,
      });
      await refresh();
    } catch (error) {
      console.error("Erro ao salvar dados na tabela:", tableName, error);
    }
  };

  // Deleta e atualiza
  const deleteRecord = async (id) => {
    try {
      await deleteData({ table: tableName, clientId, ensaioId, id });
      await refresh();
    } catch (error) {
      console.error("Erro ao deletar dados na tabela:", tableName, error);
    }
  };

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientId, ensaioId]); // atualiza sempre que trocar de cliente/ensaio

  return {
    data,         // dados do BD
    refresh,      // função para forçar atualização
    saveRecord,   // função para salvar registro
    deleteRecord, // função para deletar registro
  };
}
