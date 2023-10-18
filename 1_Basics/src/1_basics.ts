/**
 * Declaring variables with TypeScript:
 * const|let variable: type = value;
 */

const age: number = 27;
// const ageAsString: number = '27'; // returns error: Type 'string' is not assignable to type 'number'.
const firstName: string = 'Marvin';
const isAdmin: boolean = true;
const cartItems: number[] = [80322, 80323, 80324];
let lastName: string;

lastName = 'Steckel';
// lastName = 1237; // returns error: Type 'number' is not assignable to type 'string'.

/**
 * Important note: When not defining a type, the compiler automatically "guesses" the type.
 * This could lead to bugs down the line, therefore it is not recommended.
 */
const yearBorn = 1995;

/**
 * enums are named lists, which makes the development process easier and more readable.
 * The entries are represented by 0, 1, 2...
 * Defining enums:
 * enum Name {
 *  entry0,
 *  entry1,
 *  entry2
 * }
 */
export enum Color {
  Red,
  Green,
  Blue,
}

// Now we can assign our newly created enum as type for a variable:
const favoriteColor: Color = Color.Red;
console.log(favoriteColor); // Will return 0 because Red is the first element in the enum.

(() => {
  // How we would usually code it:
  const selectedColor = 0;
  if (selectedColor === 0) {
    console.log(`Your selected color is Red, you are passionate and full of energy.`);
  } else if (selectedColor === 1) {
    console.log(`Your chosen color is Green, you exude harmony and a zest for growth.`);
  } else if (selectedColor === 2) {
    console.log(`The color you\'ve chosen is Blue, reflecting your calm and trustworthy nature.`);
  }

  // How it looks like with enums:
  const selectedEnumColor: Color = Color.Red;
  if (selectedEnumColor === Color.Red) {
    console.log(`Your selected color is Red, you are passionate and full of energy.`);
  } else if (selectedEnumColor === Color.Green) {
    console.log(`Your chosen color is Green, you exude harmony and a zest for growth.`);
  } else if (selectedEnumColor === Color.Blue) {
    console.log(`The color you\'ve chosen is Blue, reflecting your calm and trustworthy nature.`);
  }
})();

// We can also create alias for the entries instead of using numbers:
enum ColorAsHex {
  Red = '#FF0000',
  Green = '#00FF00',
  Blue = '#0000FF',
  // Purple // If we create aliases, every entry must have an alias.
}

const favoriteColorAsHex: ColorAsHex = ColorAsHex.Red;
console.log(favoriteColorAsHex); // Will return #FF0000 because that's the alias we declared for red.

/**
 * Declaring custom types in TypeScript:
 * type TypeName = TypeDeclaration
 */
type Age = number;
const ageAsType: Age = 27;

// It is also possible to declare Objects as type:
type PersonName = {
  firstName: string;
  lastName: string;
};

const personName: PersonName = {
  firstName: 'Marvin',
  lastName: 'Steckel',
};

type PersonAge = {
  age: number;
  yearBorn: number;
};

const personAge: PersonAge = {
  age: 27,
  yearBorn: 1995,
};

// Using the & operator, we can combine PersonName and PersonAge in a single Object:
type PersonInfo = PersonName & PersonAge;

const personInfo: PersonInfo = {
  firstName: 'Marvin',
  lastName: 'Steckel',
  age: 27,
  yearBorn: 1995,
};

// With the | operator, it could hold either type/value:
export type ID = string | number;

const userIdAsString: ID = '1235';
const userIdAsNumber: ID = 1235;

// Types can even hold a single value, in this example Salutations could either be Mr or Mrs.
export type Salutations = 'Mr' | 'Mrs';

const salutations: Salutations = 'Mr';
// const invalidSalutations: Salutations = 'Test'; // Will throw an error, because TypeScript expects either Mr or Mrs.

/**
 * Declaring interfaces in TypeScript:
 * interface InterfaceName {
 *   key0: number,
 *   key1: string
 * }
 */
export interface Person {
  age: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  cartItems: number[];
  salutations: Salutations;
  id: ID;
}

/**
 * unlike types, interfaces can be extended by declaring it again.
 * here we add the the optional key favoriteColor.
 */
export interface Person {
  favoriteColor?: Color;
}
