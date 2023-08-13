import express from "express"
const app = express();
const port =3000;
// function day(req,res,next)
// {
  // const d = new Date();
//   const nowday = getDay();
//   next();

// }
//app.use(day)
app.get("/",(req,res)=>{
  const d = new Date();
  let day = d.getDay();
  if(day==0)
  {
    res.render("index.ejs",{today:"Hey its weekend its time to fun"});
  }
  else if(day==1)
  {
    res.render("index.ejs",{today:"Hey its week day its time to work hard"});
  }
  else if(day==2)
  {
    res.render("index.ejs",{today:"Hey its week day its time to work hard"});
  }
  else if(day==3)
  {
    res.render("index.ejs",{today:"Hey its week day its time to work hard"});
  }
  else if(day==4)
  {
    res.render("index.ejs",{today:"Hey its week day its time to work hard"});
  }
  else if(day==5)
  {
    res.render("index.ejs",{today:"Hey its week day its time to work hard"});
  }
  else{
    
    res.render("index.ejs",{today:"Hey its weekend its time to fun"});

  }
  
 

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });