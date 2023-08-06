import express from"express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
   res.send("<h1>hello</h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>about</h1>");
 });
 app.get("/bool",(req,res)=>{
    res.send("<h2>bool me</h2>");
 });

 app.get("/about/new",(req,res)=>{
   res.send("<h3>New Items</h3>Shirt, Tshirt");
});

app.listen(port,()=>{
    console.log(`sever starts on port ${port}`)
});