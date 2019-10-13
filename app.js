const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const authRoutes =require('./routes/auth')
const analyticsRoutes =require('./routes/analytics')
const categoryRoutes =require('./routes/category')
const orderRoutes =require('./routes/order')
const positionRoutes =require('./routes/position')
const keys = require('./Config/keys')
const app = express()

    mongoose.connect(keys.mongoURI)
        .then(()=> console.log('MongoDB connected'))
        .catch(error => console.log(error))

app.use (passport.initialize())
app.use ('/uploads', express.static('uploads'))
require('./middleware/passport')(passport)
app.use(require('morgan')('dev'))
app.use(require('cors')())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)



if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/dist/client'))

    app.get('*',(req,res)=>{
        res.sendFile(
            path.resolve(
                __dirname,'client','dist','client','index.html'
            )
        )
    })
}

module.exports = app