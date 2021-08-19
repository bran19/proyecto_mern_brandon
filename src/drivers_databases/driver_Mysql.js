const mysql=require ('mysql');
const connection = mysql.createConnection ({
    host:'localhost',
    user: 'root@localhost',
    password:'',
    database:"the_life_crazy"
});
connection.connect((err)=>{
    if (err) throw err;
    console.log('I_want_end up')
});

module.exports=mysql
