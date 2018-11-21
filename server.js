const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routs/api/users')
const profile = require('./routs/api/profile')
const posts = require('./routs/api/posts')

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;
console.log(db);

mongoose.connect(db)
.then(()=> console.log('mongodb conneted'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello!Hello') );



app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);



const port = process.env.port || 5000;


app.listen(port, ()=> console.log(`Server running on port ${port}`))