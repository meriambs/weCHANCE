const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
app.use(express.static(path.join(__dirname, 'uploads/')))
//connectionb db ;
const connectDB = require("./config/db");

const cors = require('cors');
connectDB();


app.use(express.static('./public'));
app.use('/uploads', express.static('uploads'));
//ici les rest des routes : 

const personRouter = require ('./routes/User')
 const authentificationRouter = require ('./routes/Auth');
 const postRouter = require ('./routes/Post');
 const profilRouter = require ('./routes/Profil')

 const videoRoutes = require('./routes/Video');
 const applicationRoutes = require('./routes/Application');
 const mediaRoutes = require('./routes/Media');

//middelwar thing to execute things while we enter an other page 
//partie image :

// app.use(express.static('./public'));
// app.use('/uploads', express.static('uploads'));
// app.use(morgan('dev'));
//import routes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
// you can create routes
app.get('/', (req,res)=>{
    res.send('heyyy test home ')
}); 
//**********/ connect
//partie image :
// app.use('/api', require('./routes/category.route'));

//*********Install and setup mongoose::
// dotenv.config({path:__dirname + '/config/.env'});
// mongoose.connect(process.env.MONGO_URI,{useFindAndModify: false,
//      useNewUrlParser: true, 
//      useUnifiedTopology: true}).then(()=>{
//     console.log('connected')
// }).catch(()=>{
//     console.log("not connected")
// })
//routes
app.use('/users', personRouter);
//ici les liens des routes :
app.use('/auth', authentificationRouter);
app.use('/profil', profilRouter);
app.use('/post', postRouter);
// app.use('/user', passport.authenticate('jwt', { session : false }), secureRoute );
 app.use('/video', videoRoutes);

 app.use('/application', applicationRoutes);
 app.use('/media', mediaRoutes);

//how to startl listen 
app.listen(3003);