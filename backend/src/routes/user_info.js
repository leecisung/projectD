var express = require('express')
var router = express.Router()

var mysql = require("mysql2")
var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '1234',
    database : 'blockchain'
  })


connection.connect(function(err){
    if (err) {
    console.error('mysql connection error')
    console.error(err)
    throw err
    }
})


router.get("/", function(req,res){
    connection.query(
        `select * from user`,
        function(err, rows){
            if(err) throw err
            res.send(rows)
        }
    )
})


router.get('/content', function(req,res){
    console.log('접속')
    connection.query(
        `select * from sample_info`,
        function(err, row){
            if(err){
                res.json({
                    success : false,
                    message : "SQL failed."
                })
            }else{
                res.json({
                    success : true,
                    message : "brought something",
                    content : row
                })
            }
        }
    )
  })
module.exports = router