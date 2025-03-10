import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectsState, initialState } from './projects.state';

@Injectable({
    providedIn: 'root'
})
export class ProjectsStore {
    private state = new BehaviorSubject<ProjectsState>(initialState);

    // Sélecteurs
    projects$ = this.state.pipe(map(state => state.projects));
    selectedProject$ = this.state.pipe(map(state => state.selectedProject));
    loading$ = this.state.pipe(map(state => state.loading));
    error$ = this.state.pipe(map(state => state.error));

    constructor() {}

    selectProject(id: string) {
        const project = this.state.value.projects.find(p => p.id === id);
        this.setState({ selectedProject: project || null });
    }

    setState(newState: Partial<ProjectsState>) {
        this.state.next({
            ...this.state.value,
            ...newState
        });
    }
} 