// 1. Magic Numbers

const SECONDS_IN_A_DAY = 86400;

for (let i = 0; i < SECONDS_IN_A_DAY; i += 1) {
  //
}

// 2. Deep nesting
const exampleArray = [[["value"]]];

exampleArray.forEach((array1) => {
  array1.forEach((array2) => {
    array2.forEach((el) => {
      console.log(el);
    });
  });
});

const retriveFinalValue = (element) => {
  if (Array.isArray(element)) {
    return retriveFinalValue(element[0]);
  }

  return element;
};

console.log(retriveFinalValue(exampleArray));

// 3. Stop writing commencts
// commnet 없이 self-documenting 하게 만드는 것이 좋음 - Code must speak for itself!

// 4. Avoid large functions

const addMultiplySubract = (a, b, c) => {
  // addition

  const addition = a + b + c;
  // multiplication

  const multiplication = a * b * c;
  // subraction
  const subraction = a - b - c;

  // return a string (addition, multiplication, subraction)
};

const add = (a, b, c) => a + b + c;
const multiply = (a, b, c) => a * b * c;
const subtract = (a, b, c) => a - b - c;

// 5. Code repetition

const getUserCredentials = (user) => {
  const { name, surname, password, email } = user;

  // const name = user.name;
  // const surname = user.surname;
  // const password = user.password;
  // const email = user.email;
}

// 6. VARIABLE NAMING

const camleCase = '';


// Meaningful names
getUserData;
getUserInfo;

getUserPosts;

// Favor descriptive over concise
findUser;

findUserBynameOrEmail;
setUserLoggedInTrue;

// use shorter version

getUserFromDatabase;
getuser;

// Use consistent verbs per concept

// Functions will usually create, read, update or delete something

getQuestions; // get
returnUsers;  // get
retrieveUsers; // get

// Make booleans that read well in if-then statements

let Car = {};

sedan, sold, green, airbag
isSedan, isSold, isGreen, hasAirbag

// 7. Use nouns for classNames


class Car = {
  // O
}

class MakeCar = {
  // X
}

// 8. Use PascalCase for classNames.

camelCase
PascalCase

class Task = { }

// 9. Capitalize constant values SNAKE_UPPER_CASE


// 10. Avoid one-letter variable names

const query = () => {}
const q = () => { }

const newDate = () => new Data();
const d = () => new Data();

for (let i = 0; i < 10; i++){
  // this is ok;
}
