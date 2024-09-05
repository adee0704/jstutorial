
function saygiven(){
    console.log("H");
    console.log("i");
}
saygiven()
// Fn to add twonos
function add(x , y){
    console.log(x+y) 
}
add(3,4)
// loginfn
function loginusermessage(username){
    if(username=== undefined){
        console.log("please enter a user name")
        return
    }
    return (`${username} just logged in`)
}
console.log(loginusermessage())