var express = require('express')
var router = express.Router()
var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("나 여기2")
      cb(null, './board_images/') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    filename: function (req, file, cb) {
        console.log("나 여기3")
        cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
    }
  })
var upload = multer({ storage : storage });

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

router.get("/latest", function(req,res){
    connection.query(
        `select * from board order by title desc limit 2`,
        [],
        function(err,result){
            if(err){
                console.log('latest sql error')
            }else{
                res.json({
                    message:"latest result success",
                    content : result
                })
            }
        }
    )
})


router.post("/upload", upload.single('image'), function(req,res,next){
    console.log("나 여기1")
    var writer = req.body.writer
    var board_title = req.body.board_title
    upload.single('image')
    console.log(res.send(req.file),"여기 1")
    console.log(writer, board_title)
})


router.get("/get_image", function(req,res){
    var picture_name = req.query.picture_name
    const imgUrl = "http://localhost:3000/img/"
    result = imgUrl + picture_name
    res.send(result)
})


module.exports = router