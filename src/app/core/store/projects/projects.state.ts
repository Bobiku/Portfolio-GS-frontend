import { Projet } from '../../../projets/models/projet';

export interface ProjectsState {
    projects: Projet[];
    selectedProject: Projet | null;
    loading: boolean;
    error: string | null;
    lastUpdated: number | null;
}

export const initialState: ProjectsState = {
    projects: [],
    selectedProject: null,
    loading: false,
    error: null,
    lastUpdated: null
}; 