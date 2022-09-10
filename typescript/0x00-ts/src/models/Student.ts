import { Course } from "./Course";

export class Student {
    // class properties
    name: string;
    lastName?: string;
    courses: Course[];

    // constructor
    constructor (name: string, courses: Course[], lastName?: string) {
        this.name = name;
        if(lastName) {
            this.lastName = lastName;
        }
        this.courses = courses;
    }
}