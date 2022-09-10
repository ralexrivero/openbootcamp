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

    get studiedHours (): number {
        let studiedHours = 0;

        this.courses.forEach((course: Course) => {
            studiedHours += course.hours;
        })
        return studiedHours;
    }

    get coursesCount (): number {
        let coursesCount = 0;

        return coursesCount = this.courses.length;
    }

}