//home logic 

const home = async (req,res)=>{
try {
    res.status(200).send("mern coming from router");
} catch (error) {
    console.log(error)
}
};

//register 

const register = async (req,res)=>{
   try {
    res.status(200).send("registeraton page from backend");
   } catch (error) {
    console.log(error)
   }
}


module.exports = {home,register}