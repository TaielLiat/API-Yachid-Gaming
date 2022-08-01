const { v4: uuidv4 } = require("uuid");
const middleware = require("../utils/middleware")

const router = require("express").Router();
let datos = require("../dataccess/entry");

router.get("/", (req, res) => {
    res.status(200).json(datos.getAll(req.query));
});

/* Obtener uno especifico */
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const data = datos.getOne(id);
    if (data) {
        res.status(200).json(data);
    } else {
        res.sendStatus(404);
    }
});
/* Agregar un elemento */
router.post("/", (req, res) => {
    const body = {...req.body, id: uuidv4() };
    datos.save(body);
    res.status(200).json(body);
});


/* Borrar un elemento */
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    if (datos.borrar(id)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

/* Modificar un elemento */
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    if (datos.update(id, body)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;