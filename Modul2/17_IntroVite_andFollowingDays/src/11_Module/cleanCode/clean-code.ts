// ! Clean Code - name variables
// * instead of - use that
// a: number - ageOfMovie: number
// login: number -  totalLoginAttempts: number
// user: boolean - isUserLoggedIn: boolean
// userfirstname: string - firstName: string
// all: string[] - userEmails


// * camelCase
// * meaningfull name
// * boolean, use "is" "has" "was" etc
// * Array. name in plural "shopItemsArr"


// ! How to write
// * camelCase - functions, variables
// * kebab-case  age-of-movies  for classes in html and css
// * snake_case
// * PascalCase - HöckerSchreibWeise. types, interfaces, enums,


// ! How to Name functions
//*  camelCase
//* verb + object - validateEmail(), 
//* no abbreviations
//* singular plural - validateEmails(), validateEmail()
//*  get and set, if you get or set a value

// - examples for functionNames
// calculateSum(number1: number, number2: number): number {}
// genreateFullName(firstName: string, lastName: string): string {}
// convertTemperature(temperature: number): number {}
// deleteTaskById(id: string): void {}
// sortTasksByDueDate(tasks: string[]): string [] {}
// getFirstDate(dates: string[]): string {}



// ! Functions
// the function shouldn´t have more than 50 to 100 lines - try to split it in multiple functions
// code smell:  function has AND in the name
// should only have 1 functionality

//* rather not define types in the parameters, but create a typeObject
// - DON´T
function printUserData(superParameter: {id: string; name: string; lastName: string}) {
    // functionality etc
};

// - DO
type User = {
    id: string,
    name: string,
    lastName: string,
};

function printUserDataBetter (superParameter: User) {
    
};


//* parameter: no type definitions. not more than 5 parametes (instead use parameter-object)
// - DON´T
function createUser(name: string, id: string, email: string, status: string, address: string,) {
    // functionality etc.
};

// - DO
type UserInfo = {
    name: string,
    id: string,
    email: string,
    status: string,
    address: string,
};

function createUserBetter(UserInfo: UserInfo) {

}


// ! Comments
//* comment the WHY instead of the WHAT
// code-smell: many comments feel like complicated code


// ! PathFinder Rule
// * Always leave a place in a better condition than you found it.

// - DON´T
function calc(x: number, y: number): number {
    return x * y;
};

// - DO
function calculateArea(width: number, height: number): number {
    return width * height;
};


// ! KISS- principle
//*keep it simmple, stupid
//  avoid unnecessary complexity

// - DON´T
function getStatus(isActive: boolean): string {
    if (isActive === true) {
        return 'active';

    } else {
        return 'inactive';
    }
};

// - DO
function getStatusBetter(isActive: boolean): string {
    return isActive ? 'active' : 'inactive';
};

// ! DRY Principle
//* dont repeat yourself

// - DON´T
function getUserFullName(user: {firstName: string, lastName: string}): string {
    return user.firstName + ' ' + user.lastName;
};

function getAdminFullName(user: {firstName: string, lastName: string}): string {
    return user.firstName + ' ' + user.lastName;
}

// - DO
function getFullName(person: {firstName: string, lastName: string}): string {
    return person.firstName + ' ' + person.lastName;
};

// const userFullName = getFullName(user);
// const adminFullName = getFullName(admin);



// ! YAGNI - principle
// *you aint gonna need it
// don´t implement things you MIGHT need in the future. or that would complement the current functionality


