const express = require('express')

require('./database')

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
// app.use(routes)



app.listen(() => {
    console.log(`App listening on port: ${PORT}`)
})