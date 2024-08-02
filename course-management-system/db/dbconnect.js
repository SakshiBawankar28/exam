const mysql=require("mysql");

var mysqlConnection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'Sakshi@123',
    database:'practice',
    port:3306
})

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connection done")
    }
    else{
        console.log(err);
    }
})

module.exports=mysqlConnection;