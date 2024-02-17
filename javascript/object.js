//accessing of object 
// => BY dot but it is not preferable to use 
//=> use userjs[]


//symbol=>>>>>>>>
// [Sym]:"anySymbol" in an array
const mySym =Symbol("key1")


//const TinderUser=new Object()  =>>>>  singleton object
// literals object >>>
const TinderUser ={}

// console.log(TinderUser)

TinderUser.name="Parveen"
TinderUser.Id="98384h83"
TinderUser.email="parveen@g.com"

//console.log(TinderUser)

//defining object in object

const regulerUser ={
    fullname :{
        userFullName:{
            name:"Parveen",
            UserId : "888hf7",
            [mySym]:"key2",
            "full name" : "Parveen Kumar"
        }
    }
}
// console.log(regulerUser.fullname.userFullName["full name"])

Object.freeze(TinderUser)

TinderUser.email="parveen@gmail"
console.log(TinderUser)
// how to freez an object 
Object.freeze(TinderUser)


// console.log(regulerUser.fullname.userFullName)

//+++++++++++adding to object in object +++++++

const Obj1={ 1:"rectangle" , 2:"circle"}
const Obj2={3:"square" , 4: "triangle"}

// const Obj3 = { Obj1 ,Obj2}
// console.log(Obj3)

//assign(target , Source)
//assign({}, source)

// const Obj3=Object.assign({} ,Obj1 ,Obj2)
// console.log(Obj3)

// const Obj3 ={...Obj1 ,...Obj2}
// console.log(Obj3)

// console.log(Object.keys(TinderUser))
// console.log(Object.values(TinderUser))
// console.log(Object.entries(TinderUser))
