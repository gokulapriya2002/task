const express = require('express');
const cors=require('cors')
const app = express();

app.use(express.urlencoded())
app.use(cors())
// Serve the HTML form
app.post('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const mysql = require('mysql');
const { Category } = require('@material-ui/icons');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'instagram',
});
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});
//signup



 app.post('/signup', (req, res) => {
  console.log(req.body)
const sql = 'INSERT INTO users(username, userpassword) VALUES(?, ?)';
  connection.query(sql, [req.body.email,req.body.psw], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.send('Signup failed!');
      return;
    }
    console.log('User registered successfully');
    res.send('Signup successful!');
  });
});




app.post('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error retrieving data from the database:', err);
      res.send('Error fetching data');
      return;
    }
    res.json( results );
  });
});

//  app.get('/users', (req, res) => {
//   let arr = []

//   connection.query("select *from users",(err,result)=>{
//  if (err)throw err;
//  result.map((val)=>{
//   let post= val.post.toString('base64')
//   let profile=val.profile.toString('base64')
//   arr.push({
//     userid:val.userid,username:val.username,send:val.send,saved:val.saved,profile:profile,post:post,about:val.about,followers:val.followers,following:val.following,description:val.description,hashtag:val.hashtag,likes:val.likes,comments:val.comments
//   })
//  })
//   return res.json(arr)
// })

//   })


 app.get('/', (req, res) => {
  let arr = []

  connection.query("select *from posts",(err,result)=>{
 if (err)throw err;
 result.map((val)=>{
  let post= val.post.toString('base64')
  let profile=val.profile.toString('base64')
  arr.push({idname:val.idname,id:val.id,description:val.description,hashtag:val.hashtag,likes:val.likes,comments:val.comments,saved:val.saved,post:post,profile:profile,catergory:val.catergory})
 })
  return res.json(arr)
})

  })
  
   
  


// app.post('/users', (req, res) => {
//   const { username, password } = req.body;

//   const users = users.find(u => u.username === username && u.password === password);
//   if (users) {
//   return res.status(401).send('Invalid username or password');
//   }
//     res.send('Login successful');
// });
     app.listen(8000,()=>{
    console.log("server is running")
})