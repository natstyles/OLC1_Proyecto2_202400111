class Entorno {
    constructor(anterior = null) {
        this.tabla = new Map();
        this.anterior = anterior;
    }

    guardar(id, simbolo) {
        let ent = this;
        while (ent != null) {
            if (ent.tabla.has(id)) {
                ent.tabla.set(id, simbolo);
                return true;
            }
            ent = ent.anterior;
        }
        this.tabla.set(id, simbolo);
        return true;
    }

    obtener(id) {
        let ent = this;
        while (ent != null) {
            if (ent.tabla.has(id)) {
                return ent.tabla.get(id);
            }
            ent = ent.anterior;
        }
        return null;
    }
}

module.exports = Entorno;