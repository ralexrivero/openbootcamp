export enum Level {
    'Informative',
    'High',
    'Dependant'
}

// sign and points to be implemented
export interface ITask {
    title: string,
    description?: string,
    completed: boolean,
    priority?: Level,
    resume: () => string
}