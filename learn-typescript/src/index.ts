let message:String = "TypeScript";
console.log(message);

let age:number = 25;
let year:number = parseInt('2025');
let decimal:number = 10.01;
let hexadecimal:number = 0xa00d;
console.log(age,year,decimal,hexadecimal)

let isEven:boolean = true;
console.log(isEven);

let data:string|null;

data = "Value"
data = null

let phoneNumber :bigint|undefined; // Greater than 2^53-1

// Summery DT -> Primitive Type -> number ,string,boolean,null,undefined,symbol,bigint

//Type System -> any , unknown , union , custom
// Declaration -> Annotation -> Inference

let value :any;
value = "String Type"
value = true
value = 10
value = null
value = undefined


// Type Alias -> Create custom type name
// Syntax => type custometypeName = type

type StringType = string
let name:StringType = "Subhadeep"
console.log(name);

type data = number|string|boolean // Applicatin of Type Aliasing
let NewValue:data = true;
NewValue = 12
NewValue = "Type Check"

//Declaration, Annotation , Inference
let s; // Declaration without type or initialization
let s1:string // Declaration with type annotation
let age1 = 30; //Declarane with type Inference
let email:string="abc" // Declaration with both annotation and initialization

// Union Type -> |
type MaybeDate = Date|undefined


// Conditional Types
type CustomDate = Date;
type CustomString = string;

type TrueString = CustomString extends string ? true: false;
type DateAssigment = CustomDate extends Date? true:undefined;

// Type Hierarchy
//unknwon -> any -> Specific -> never ....

// Type Casting
let lastName = "Mark";
let castName = lastName as any;

let firstName = "Mark";
let castedName = <any>firstName;

type User = {
    name:string,
    email:string,
}

function fetchUser(){
    return {name:"Mark",email:"abc@gmail.com"} as User;
}

