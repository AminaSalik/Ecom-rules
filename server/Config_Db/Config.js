const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://aminasalik:oXzYIRfphZj55PWLllm@cluster0.qssrmii.mongodb.net/')
.then(()=>{
    console.log("Connect db successful ")
})
.catch(((error)=>{
    console.log(error)
}))