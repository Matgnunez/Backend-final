const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const { authRouter } = require('./auth/auth.router')
const { productRouter } = require('./products/products.router')

const { conectionMongoose } = require('./config/connection.mongodb')



const PORT = process.env.PORT || 4000
const app = express()


app.use(cors())
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/products', productRouter)




app.listen(PORT, () => {
    console.log('Nuestra aplicacion se ejecuta en el puerto: ' + PORT)
})

