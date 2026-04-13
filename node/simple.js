const express = require('express')
const app = express()
const port = 3000
const bodyParser=require("body-parser")


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send('Hello World!')
})


app.post('/api/contact', function (req,res, next){
    console.log(req.body)
    console.log('ok')
    res.send('{}')
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})