import { create } from 'zustand';

export const useHeaderStore = create((set) => ({
  cliente: '',
  ensaio: '',
  tool: '',
  etapa: '',
  setCliente: (cliente) => set({ cliente }),
  setEnsaio: (ensaio) => set({ ensaio }),
  setTool: (tool) => set({ tool }),
  setEtapa: (etapa) => set({ etapa }),
}));
