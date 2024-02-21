// function one(){
//     return 1;
// }

// function two(){
//     return one() + one()
// }

// function three(){
//    let ans = two () + one()
//    console.log(ans)
// }
// three()
 
// //js is single thread language , so the callback or setTimeout helps to tasks more than one 

// setTimeout(()=>{
//     console.log("coming from setTimeOut")
// },3000)

// console.log("without setTimeout")


// //callback hell 
//  const  h1=document.querySelector("h1");
// function colorChange(color,delay,nextColorChange){
//    setTimeout(()=>{
// h1.style.color = color;
// nextColorChange()
//    },delay)
// }

// colorChange("red",1000,()=>{
// colorChange("green",1000,()=>{
//     colorChange("yellow",1000);
// })
// })


// saveData(
//     "apnacollege",()=>{
//         console.log("connection successful")
//         saveData("hamara",()=>{
//             console.log("connection 2 is successful")
//         },()=>{
// console.log("faied 2 connection")
//         })
//     },()=>{
//         console.log("connection failed")
//     }
// )


// function savetodB (data){
//     let dataconnection = Math.floor(Math.random()*10)+1;
//     return new Promise((resolve,reject)=>{
//         if(dataconnection>4){
//             resolve("connection is secured");
//         }else{
//             reject("failed connection")
//         }
//     })
// }

// savetodB("hello world")
// .then(()=>{
//     console.log("success")
// })
// .catch(()=>{
//     console.log("failed")
// })

// function datab(){
// new Promise((resolve,reject)=>{
// if (condition) {
//     resolve()
// } else {
//     reject()
// }
// })
// }

// datab("hii")
// .then(()=>{
//     console.log("hii namaste");
//     return datab ("whatsup")
// })
// .then(()=>{

// })

h1=document.querySelector("h1")

function colorChange(color,delay){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        h1.style.color = color;
        console.log(`color changed to ${color}`)
        resolve("color changed")
    },delay)
 })
}


//promise method for color change
// colorChange("red",1000)
// .then((result)=>{
//     console.log("color changed to red");
//     console.log(result)
//     return colorChange("green",1000);
// })
// .then((result)=>{
//     console.log("color changed to green");
//     console.log(result)
//     return colorChange("yellow",1000)
// })
// .then((result)=>{
//     console.log("color changed to yellow");
//     console.log(result)
// })
// .catch((error)=>{
//     console.log("error occured")
//     console.log(error)
// })




// async function greet(){
 
//     return "hello world"
//   throw "some random error"
// }

// greet()
// .then(()=>{
//     console.log("promise resolved")
// })
// .catch(()=>{
//     console.log("promise rejected")
// })




//async method
// async function demo(){
//     try {
//         await colorChange("red",1000)
//         await colorChange("green",1000)
//         await colorChange("blue",1000)
//         await colorChange("yellow",1000)
//     } catch (error) {
//         console.log("error occured",error)
//     }

// }

// demo()