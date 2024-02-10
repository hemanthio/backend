let url = "https://catfact.ninja/facts"

fetch(url)
.then((res)=>{
    console.log(res);
    return res.json()
})
.then((data)=>{
    console.log(data.data)
})
.catch((err)=>{
    console.log("error caught",err)
})