let maybeString = "Wow, look, I am a string!";
let maybeNumber = 42;
let maybeBoolean = true;
let maybeNull = null;
let maybeUndefined = undefined;

function consoleLogWithSpace(message, variable) {
  console.log(message, variable);
  console.log(" ");
}

consoleLogWithSpace("String:", maybeString);
consoleLogWithSpace("Number:", maybeNumber);
consoleLogWithSpace("Boolean:", maybeBoolean);
consoleLogWithSpace("Null:", maybeNull);
consoleLogWithSpace("Undefined:", maybeUndefined);

//____________________________________________________________________________________________

function consoleLogWithSpaceNoVar(message) {
  console.log(message);
  console.log(" ");
}

consoleLogWithSpaceNoVar(`Well, who are these?\t`);

let whoAreYou = "Hmmmm";
let whoAreYou2 = false;
let whoAreYou3 = null;
let whoAreYou4 = undefined;
let whoAreYou5 = 42;

consoleLogWithSpaceNoVar(`${whoAreYou} is a ${typeof whoAreYou}`);
consoleLogWithSpaceNoVar(`${whoAreYou2} is a ${typeof whoAreYou2}`);
consoleLogWithSpaceNoVar(`${whoAreYou3} is an ${typeof whoAreYou3}`);
consoleLogWithSpaceNoVar(`${whoAreYou4} is an ${typeof whoAreYou4}`);
consoleLogWithSpaceNoVar(`${whoAreYou5} is a ${typeof whoAreYou5}`);
