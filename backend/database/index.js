// const { get } = require('jquery');
const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1919',
  database: 'mydb'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});



// const read = "select * from blog " ;
// const post =  "insert into comments (user,content) values (?,?) ";
// const update =  " UPDATE comments SET user=(?) content=(?) WHERE idcomments=(?) ";
// const delet =  "DELETE FROM comments WHERE id =(?)";


module.exports =  connection 
    // post,
    // read,
    // update,
    // delet,
  