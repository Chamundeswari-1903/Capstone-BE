const app = require('./app')

const port = 4001;

app.get('/',(req,res)=>{
    res.send("Welcome to Order Management");
}); 

app.listen(port,()=>{
    console.log(`Server Listening on port:${port}`)
});