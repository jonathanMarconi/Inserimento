const express = require('express');
const app = express();
const {libri} = require('./libri');
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.get('/', (req, res)=>{
    res.sendFile("form.html", {root: "public"});
})
app.post('/G3T',(req,res) => {
    if(req.body) {
const{id, titolo, lunghezza} = req.body;
const aggiuntacatalogo = {
    id: id,
    titolo: titolo,
    lunghezza: lunghezza
};
console.log(aggiuntacatalogo);
libri.push(aggiuntacatalogo);
res.status(200).json({success: true, data: libri});
    }else{
        res.status(400).send("ERRORE");
    }
})
app.listen(3000);