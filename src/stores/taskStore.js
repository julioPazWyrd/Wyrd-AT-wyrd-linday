import { create } from 'zustand';
import { mock } from '../api/mock';

export const useTaskStore = create((set, get) => ({
  projects: {},
  groupBy: null,
  setGroupBy: (groupBy) => {
    set({ groupBy });
  },
  fetchProjects: async () => {
    try {
      const projects = mock;
      // console.log(projects);
      set({ projects });
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  },
  addTask: (task) => {
    set((state) => {
      const updatedProjects = { ...state.projects };
      if (!updatedProjects[task.project]) {
        updatedProjects[task.project] = [];
      }
      updatedProjects[task.project].push(task);
      return { projects: updatedProjects };
    });
  },
  addClient: (clientName, clientData) => {
    set((state) => {
      const updatedProjects = { ...state.projects };
      // Adiciona o novo cliente apenas se não existir
      if (!updatedProjects[clientName]) {
        updatedProjects[clientName] = []; // sem ensaios inicialmente
      }
      return { projects: updatedProjects };
    });
  },
  updateStore: async () => {
    await get().fetchProjects();
  },
  updateTaskPermission: (taskId, userId, role) => {
    set((state) => {
      const updatedProjects = { ...state.projects };
      for (const projectName in updatedProjects) {
        updatedProjects[projectName] = updatedProjects[projectName].map(task => {
          if (task.id === taskId) {
            const updatedPermissions = task.userPermissions.map(perm => 
              perm.userId === userId ? { ...perm, role } : perm
            );
            if (!updatedPermissions.some(perm => perm.userId === userId)) {
              updatedPermissions.push({ userId, role, name: '', email: '' });
            }
            return { ...task, userPermissions: updatedPermissions };
          }
          return task;
        });
      }
      return { projects: updatedProjects };
    });
  },
}));
