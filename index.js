const express = require ("express")
const app = express()
const RotasProfessor = require("./routes/professor.routes")
const RotasCurso = require("./routes/cursos.routes")
app.use(express.json())
app.use("/professores", RotasProfessor)
app.use("/cursos", RotasCurso)


app.listen(3000, () => console.log ("API no ar"))