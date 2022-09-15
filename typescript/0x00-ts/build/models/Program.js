"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Program = void 0;
class Program {
    constructor(title, description, completed, priority) {
        this.resume = () => {
            return `Programming task: ${this.title} = completed: ${this.completed}`;
        };
        this.title = title,
            this.description = description,
            this.completed = completed,
            this.priority = priority;
    }
}
exports.Program = Program;
//# sourceMappingURL=Program.js.map