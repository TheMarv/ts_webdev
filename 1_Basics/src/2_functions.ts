import { Person } from './1_basics';

// Declaring the Person object, we're going to use in this file.
export const marvin: Person = {
  age: 27,
  firstName: 'Marvin',
  lastName: 'Steckel',
  isAdmin: true,
  cartItems: [],
  salutations: 'Mr',
  id: '123',
};

/**
 * When declaring a function, our arguments need to have a type.
 * If the function returns a value, we have to declare it's type
 * after the argument parantheses.
 * If the function doesn't return a value it's type is void.
 */

// getPersonAge returns the age of a person, therefore it's return type is number.
function getPersonAge(person: Person): number {
  return person.age;
}

// addToCart returns nothing, therefore it's return type is void.
function addToCart(person: Person, productId: number): void {
  person.cartItems.push(productId);
}

/**
 * A lot of times, the typing of arguments is handled via types like this:
 */

type AdditionArguments = {
  a: number;
  b: number;
};

function addition(values: AdditionArguments): number {
  return values.a + values.b;
}

/**
 * When fetching data from an API, the compiler won't know it's type, therefore
 * we have to cast the data, so we are able to work with it.
 * This function should simulate a call to a API that returns a person object.
 *
 * Disclaimer: This example uses any, which is a special type from TypeScript
 * that represents the lack of type checking. DO NOT use this in dev/prod!
 */
function fetchPersonFromApi(): any {
  return marvin;
}

/**
 * There are two ways to cast a variable:
 * after a variable/function we can add ' as Type' to cast it to the type,
 * or in front of the variable/function, we write the Type in angle brackets.
 */
const castWithAs = fetchPersonFromApi() as Person;
const castWithBrackets = <Person>fetchPersonFromApi();
