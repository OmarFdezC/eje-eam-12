const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const cors = require('cors');
const puerto = process.env.PORT || 3000;

const app = express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + 'views/partials',()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

//Definir rutas: login, categorias, index y Not Found
//GET o POST
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/login',(req,res)=>{
    res.render('signin-one');
});

app.get('/categorias',(req,res)=>{
    res.render('categorias');
});

app.get('*',(req,res)=>{
    res.render('404');
});

app.listen(puerto,()=>{
    console.log('El servidor corriendo en el puerto: ',puerto);
});