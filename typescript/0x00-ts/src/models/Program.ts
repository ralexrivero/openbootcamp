import { ITask, Level } from "./interfaces/Task.Interfaces";

export class Program implements ITask {
    title: string;
    description?: string | undefined;
    completed: boolean;
    priority?: Level | undefined;

    constructor(
        title: string,
        description: string,
        completed: boolean,
        priority: Level
    ) {
        this.title = title,
        this.description = description,
        this.completed = completed,
        this.priority = priority
    }

    resume = (): string => {
        return `Programming task: ${this.title} = completed: ${this.completed}`
    };
}