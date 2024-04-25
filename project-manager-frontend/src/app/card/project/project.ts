
export enum ProjectState {
    DONE = 'Done',
    IN_PROGRESS = 'In Progress',
    SUSPENDED = 'Suspended'
}

export interface Project {
    
    id : number ;
    name: string;
    description: string;
    startingDate: Date;
    state: ProjectState;
}
