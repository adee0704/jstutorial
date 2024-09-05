// singleton
// object.create later
// object literals
const mysym = Symbol("Key1")
const js = {
    name : "Deepak",
    "full name" : "Deepak Kumar",
    [mysym] : "key1",
    age : 21,
    location : "jaipur",
    email : "dee16108295@gmail.com",
    islogged : false,
    lastlogindays :  ["Monday","Saturday"]
}
    //console.log(js.email)
    //console.log(js["email"])
    //console.log(js["full name"])
    //console.log(js["age"])
    //console.log(typeof Key1)
    //console.log(js)
    js.dee = function(){
        console.log(`Hello User ${this["full name"]} , Your age is ${this["age"]}`)
    }
    console.log(js.dee());
