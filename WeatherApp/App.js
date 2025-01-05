const express =  require('express');
const app = express()

app.get('/anyweather',(req,res) =>{
    res.sendFile(__dirname+"/weather.html")
})
app.listen(3000,()=>{
    console.log("Server started on port 3000!")
})