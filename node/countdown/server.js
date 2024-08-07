import express from "express"

const app = express()
const port = 3000

app.set("view engine","ejs")

app.use(express.static("public"))

app.get("/",(req, res) => {
    const countdown = req.query.countdown

    if(countdown){
        //countdownパラメータが渡されたとき
        res.render("index.ejs", {countdown: countdown})
    }else{
        //countdownパラメータが渡されなかったとき
        res.send("countdownパラメータを設定してください")
    }

})

app.listen(port, () => {
    console.log(`Listen at http://localhost:${port}?countdown=5`)
})