
import inquirer from "inquirer";
class Student {
    constructor (
        public name : string,
        public id : number,
        public courses : string[],
        public balance : number,
        public fees : number,

    ) {}
    enroll (course:string){
        this.courses.push(course)
    }
    payfees(amount:number){
        this.balance = amount
    }
}

class StudentManagementSystem {
    private students:Student[]
    constructor(){
        this.students = []
    }
    async addStudents (){
        const answer = await inquirer.prompt(
            [
                {message:"Please Enter your name.",
                type:"inut",
                name:"Student name"
                },
                {
                 message:"Please select your course.",
                 type:"list",
                 name:"courses",
                 choices:[
                    "HTML fees 10000/-",
                    "CSS fees 10000/-",
                    "javasript fees 10000/-",
                    "bootstript 10000/-",
                    "CSS fees 10000/-",
                    "SQL fees 10000/-",
                    "php fees 10000/-",

                 ]
                },
                {
                 message:"Enter your selected course fees",
                    type:"number",
                    name:"fees"
                },
                {
                 message:"Please enter your amount.",
                    type:"number",
                    name:"Amount"
                }
            ]
        )
        const id = Math.floor(Math.random()*20000+1000)
        const courses = answer.courses.split(',').map((course:string)=>course.trim())
        const fees = answer.Amount - answer.fees
        const student = new Student (answer.name,id,courses,answer.Amount,fees)
        this.students.push(student)
    }
    displayStudent (){
        console.log("List of students");
        this.students.forEach((student,index)=>{
            console.log(`student: ${index = 1})`);
            console.log(`Name: ${student.name}`);
            console.log(`Id: ${student.id}`);
            console.log(`Courses: ${student.courses.join(',')}`);
            console.log(`Balance: ${student.balance}`);
            console.log(`Remaining Balance: ${student.fees}`);
        })
    }
}
async function main(){
    const studentManagementSystem = new StudentManagementSystem()
    while (true){
        const {choice} = await inquirer.prompt(
            {
                message:"Please select an action.",
                type:"list",
                name:"choice",
                choices:["Add Student","Display Student","Exit"]
            }
        )  
    
        switch (choice) {
            case "Add Student":
            await studentManagementSystem.addStudents()
            break;
            case "Display Student":
                await studentManagementSystem.displayStudent()
                break;
                case "Exit":
                    console.log("Exiting......");
                    break;
                    default:
                    console.log(`Invalied Choice!!!!!`);
        
        }
    }
}
main()