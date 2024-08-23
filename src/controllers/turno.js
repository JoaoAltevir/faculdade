const db = [];
let nextID = 1;


const model = (body, id = nextID++) => {
    if(
        body.nome != "",
        body.inicio != "",
        body.termino != "",
        body.nome != undefined,
        body.inicio != undefined,
        body.termino != undefined
    ){
        return {
            id,
            nome: body.nome,
            inicio: body.inicio,
            termino: body.termino
        }
    }
    return
}

const store = body => {
    const novo = model(body);
    if(novo){
        db.push(novo)
        return 201
    }
    return 400
}

const index = () => db;

const show = id => db.find(el => el.id == id);

const update = (body, id) => {
    const index = db.findIndex(el => el.id == id);
    const novo = model(body, parseInt(id));
    if(novo && index != -1){
        db[index] = novo;
        return 201
    }
    return 400
}

const destroy = id => {
    const index = db.findIndex(el => el.id == id);
    if(index != -1){
        db.splice(index,1);
        nextID--
        return 200
    }
    return 400
}

module.exports = {store, index, show, update, destroy}