"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    // constructor
    constructor(name, courses, lastName) {
        this.ID = '1234'; // only accesible trough an specific getter or/and setter
        this.name = name;
        if (lastName) {
            this.lastName = lastName;
        }
        this.courses = courses;
    }
    get studiedHours() {
        let studiedHours = 0;
        this.courses.forEach((course) => {
            studiedHours += course.hours;
        });
        return studiedHours;
    }
    get coursesCount() {
        let coursesCount = 0;
        return coursesCount = this.courses.length;
    }
    get studentID() {
        return this.ID;
    }
    set studentIDSet(id) {
        this.ID = id;
    }
}
exports.Student = Student;
