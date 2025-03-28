//ESSE ARQUIVO AINDA NAO É UTILIZADO, FOI CRAIDO PARA COMPONENTIZAÇÃO FUTURA DO CODIGO


import { useState } from "react";
/**
 * Hook para gerenciar edição de célula via modal.
 */
export function useCellEditModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCell, setEditingCell] = useState({ rowIndex: null, key: null });
  const [modalValue, setModalValue] = useState("0");

  // Abrir modal e setar o valor inicial
  const openEditCell = (rowIndex, key, initialValue = "0") => {
    setEditingCell({ rowIndex, key });
    setModalValue(initialValue.toString());
    setIsModalOpen(true);
  };

  // Fechar modal
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingCell({ rowIndex: null, key: null });
    setModalValue("0");
  };

  return {
    isModalOpen,
    editingCell,
    modalValue,
    setModalValue,
    openEditCell,
    closeModal,
  };
}
