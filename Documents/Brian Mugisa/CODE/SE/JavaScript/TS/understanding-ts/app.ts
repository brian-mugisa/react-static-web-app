let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

userName = userInput;

function generateError(message: string, code: number): never {
  //make clear to other devs that this fn is to NEVER return anything
  throw { message: message, errorCode: code };
  //an infinit loope would also make this never return
  //while(true);
}

const result = generateError("An error occurred!", 500);
console.log(result); //doesnt log undefined; because error is thrown, it crashes our script ALWAYS
