const mongoose =require('mongoose');

const mongo_uri="mongodb+srv://abhinav:abhi2002@cluster0.7dubz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connect=()=>{
    mongoose
        .connect(`${mongo_uri}`,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        .then(()=>{
            console.log("successfully connected to database")
        })
        .catch((err)=>{
            console.log("Connection failed......")
            console.log(err)
        })

}
module.exports=connect