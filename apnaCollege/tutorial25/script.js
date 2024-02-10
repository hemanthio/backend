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


function savetodB (data){
    let dataconnection = Math.floor(Math.random()*10)+1;
    return new Promise((resolve,reject)=>{
        if(dataconnection>4){
            resolve("connection is secured");
        }else{
            reject("failed connection")
        }
    })
}

savetodB("hello world")
.then(()=>{
    console.log("success")
})
.catch(()=>{
    console.log("failed")
})

function datab(){
new Promise((resolve,reject)=>{
if (condition) {
    resolve()
} else {
    reject()
}
})
}

datab("hii")
.then(()=>{
    console.log("hii namaste");
    return datab ("whatsup")
})
.then(()=>{
    
})