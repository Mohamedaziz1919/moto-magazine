// import cors from "cros"
const express = require('express');
const path = require('path');
const db =require("../backend/database/index.js");
const cors = require('cors')
const PORT = 5000;
const app = express(); 
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/home',(req,res)=>{
    res.send("welcome home")
   })


// app.get('/read',(req,res)=>{
//     db.query('SELECT * FROM comments', function(err,result){
//      if(err){
//      console.log(err)}
//      res.send(result) 
//     })
//  }
//  ) 

//  app.post('/post',(req,res)=>{
//     db.query(`INSERT INTO comments (user ,content) VALUES ("${req.body.user}","${req.body.content}")`,
//     (err,result)=>{
//       if (err){
//         res.send(err)
//       }else{
//         res.send(result)
//       }
//     })
//   })

  app.delete('/delete/:ids',(req,res)=>{
    console.log(req.params)
    db.query(`DELETE FROM blog WHERE idblog=${+req.params.ids}`,(err,result)=>{
      if (err){
        console.log(err)
      }else{
        res.send(result)
        console.log("no way you deleted me")
      }
    })
  })


  app.put('/update/:ids',(req,res)=>{
    console.log(req.params)
    db.query(`UPDATE blog SET  image ="${req.body.image} ",description="${req.body.description}" WHERE title="${req.params.ids}"`,(err,result)=>{
      if (err){
        console.log(err)
      }else{
      
        res.send('updated')
      }
    })
  })

  app.get('/read/blog',(req,res)=>{
    db.query('SELECT * FROM blog;', (err,result)=>{
     if(err){
     console.log(err)}
     res.send(result)
    })
 }
 ) 

  app.post('/post/blog',(req,res)=>{
    db.query(`INSERT INTO blog (title ,image ,description ) VALUES ("${req.body.title}","${req.body.image  }","${req.body.description}")`,
    (err,result)=>{
      if (err){ 
        res.send(err)
      }else{
        res.send(result)
      }
    })
  })

 
app.listen(PORT, () => {
  console.log(`Server listening at localhost:${5000}!`); 
});
