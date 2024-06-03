const express = require('express')


const router = new express.Router()
const app = express()
const port = process.env.PORT || 3000
//process.env.TZ = 'America/Belize'

app.use(express.json())

app.get('/', async (req, res)=>{
    let url = 'https://ipinfo.io/json?token=b21d96fc30ae68'
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    res.redirect(301,'https://secure2.entertimeonline.com/ta/WRBELBRE01P.careers?CareersSearch')
    
    
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})