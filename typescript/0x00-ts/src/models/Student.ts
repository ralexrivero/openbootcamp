import { Course } from "./Course";

export class Student {
    // class properties
    name: string;
    lastName?: string;
    courses: Course[];

    private ID: string = '1234' // only accesible trough an specific getter or/and setter

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

    get studentID (): string {
        return this.ID
    }

    set studentIDSet (id: string){
        this.ID = id;
    }

}