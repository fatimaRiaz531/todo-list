import inquirer from "inquirer"
let todos = [] // shopper []
let condition =true;

while(condition)
{
    let todoQuestions = await inquirer.prompt(
 [
    {
    name:"firstQuestion",
    type:"input",
    message:"What would you like to add in  you todos?",
    },
    {
    name:"secondQuestion",
    type:"confirm",
    message:"What would you like to add  more in your todos?",
    default:"true"
    }
]
);
todos.push(todoQuestions.firstQuestion);
console.log(todos);
//the loop is running on the based of this variable condition
condition = todoQuestions.secondQuestion;
}

// read , update, delete, add, 
