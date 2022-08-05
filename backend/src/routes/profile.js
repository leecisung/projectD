var express = require("express")
var router = express.Router()

var mysql = require("mysql2")
var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '1234',
    database : 'blockchain'
  })

router.get("/info", function(req, res){
    var id = 'abc'
    connection.query(
        `select * from profile where id = ?`,
        [id],
        function(err, result){
            if(err){
                console.log(err)
            }else{
                res.json({
                    message : "success",
                    content : result
                })
            }
        }
    )
})

module.exports = router