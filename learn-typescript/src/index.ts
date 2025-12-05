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

//Typescript Object Type

let personDetails = {
    name:'Zoufi',
    age:25,
}
//not optimal/ TypeScript can treat objbect as function , array or other
let company:Object = {
    name:"Newton School",
    location:'Bangalore'
}

//Optimal Way -> newCompany is a Object Literal -> {}
let newCompany:{} = {
    name:"Veranda",
    location:"Bangalore"
}

//Not Optimal but Bug Free 
let car:{
    brand:string,
    model:string,
    version:number
} = {
    brand:"BMW",
    model:"A1",
    version:1
}

//Optimal and Bug Free
type CarType ={
    brand:string;
    model:string,
    year:number,
    color?:string // Option Property by ?
    readonly type:"Sedan"|"SUV"|"Truck"
}

let myCar:CarType={
    brand:'bmw',
    model:"A1",
    year:2024,
    type:"SUV"
}




