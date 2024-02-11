const axios = require("axios")

// let url = "https://catfact.ninja/facts"

// async function getFacts(){
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact)
//     } catch (error) {
//         console.log("error occured",error)
//     }
// }



//using axios
// async function factjoke(){
//     try {
//         let res = await axios.get("https://catfact.ninja/fact");
//         console.log(res)
//     } catch (error) {
//         console.log(error);
//     }
// }
// factjoke()

let url = "http://universities.hipolabs.com/search?name=middle"

let country ="nepal"

async function getColleges(){
    try {
      let res =  await axios.get(url+country);
      console.log(res)
    } catch (error) {
        console.log(error)
    }
}