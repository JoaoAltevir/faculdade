const express = require('express');
const app = express();
const port = 3000;
const turnoController = require("./controllers/turno.js")

app.use(express.json());

//GERENCIAMENTO DE TURNOS

app.post("/turno", (req,res)=>{
    const turno = req.body;
    const code = turnoController.store(turno);
    res.statys(code).json();
})

app.get("/turno", (req,res)=>{
    res.json(turnoController.index());
})

app.get("/turno/:id", (req,res)=>{
    const turno = turnoController.show(id);
    res.json(turno)
})

app.put("/turno/:id", (req, res)=>{
    const turno = req.body;
    const code = turnoController.update(turno, req.params.id);
    res.status(code).json();
})

app.delete("/turno/:id", (req, res)=>{
    const turno = req.body;
    const code = turnoController.destroy(turno, req.params.id);
    res.status(code).json();
});



app.listen(port,  () => {
    console.log(`Servidor rodando na porta: ${port}`)
})