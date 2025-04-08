const express = require("express")

const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const app = express()

app.use(function (req, res, next) {
    try {
        decodeURIComponent(req.path)
        next()
    } catch (err) {
        //change after backend
        res.redirect("https://saiteja.site")
    }
})
app.use(cors())
app.use(express.json({ limit: "30mb" }))
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        res.status(400).send({ error: true, message: "Invalid JSON" })
    } else {
        next()
    }
}
)

require("./cmr.js")(app)

app.listen(process.env.PORT, () => {
    console.log("server staretd on http://localhost:" + process.env.PORT);
})