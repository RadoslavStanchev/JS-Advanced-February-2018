function personAndTeacher(){
    class Person {
        constructor(name, email){
            this.name = name
            this.email = email
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject){
            super(name, email)
            this.subject = subject
        }
    }

    return {Person, Teacher}
}
let obj = personAndTeacher()
let Teacher = obj.Teacher
let t = new Teacher('Pesho', 'pesho@abv.bg', 'JavaScript')
console.log(t)

module.export = Person