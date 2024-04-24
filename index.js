#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Hello,Wellcome to \'CodeWithErma\' - CLI CALCULATOR\n");
let answer = await inquirer.prompt([
    { message: "Enter first value", type: "number", name: "firstvalue" },
    { message: "Enter second value", type: "number", name: "secondvalue" },
    { message: "Select operator that you want to operate",
        type: "list",
        name: "operator",
        choices: ["Add", "Subtract", "Multiply", "Divide"],
    },
]);
if (answer.operator === "Add") {
    console.log(answer.firstvalue + answer.secondvalue);
}
else if (answer.operator === "Subtract") {
    console.log(answer.firstvalue - answer.secondvalue);
}
else if (answer.operator === "Multiply") {
    console.log(answer.firstvalue * answer.secondvalue);
}
else if (answer.operator === "Divide") {
    console.log(answer.firstvalue / answer.secondvalue);
}
else {
    console.log("invalid value entered");
}
