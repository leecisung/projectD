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
        `select * from board`,
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

router.post("/register",function(req, res){
    var title = req.body.board_title
    var cost = req.body.cost
    var category = req.body.category
    var content = req.body.content
    var writer = req.body.writer
    var location = req.body.location

    connection.query(
        `insert into board(title, cost, category, content, writer, location) values (?, ?, ?, ?, ?, ?)`,
        [title, cost, category, content, writer, location],
        function(err, result){
            if(err){
                console.log(err)
                console.log("SQL insert board error")               
            }else{
                console.log("post register complete")
                res.json({
                    message : "insert success"
                })
            }
        }
    )
})
module.exports = router