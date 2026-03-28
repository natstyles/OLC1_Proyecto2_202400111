class Entorno {
    constructor(anterior = null, nombre = "Local") {
        this.tabla = new Map();
        this.anterior = anterior;
        this.nombre = (nombre === "Local" && anterior === null) ? "Global" : nombre;
        
        if (anterior != null) {
            this.listaSimbolosGlobal = anterior.listaSimbolosGlobal;
        } else {
            this.listaSimbolosGlobal = [];
        }
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
        
        simbolo.ambito = this.nombre;
        this.tabla.set(id, simbolo);
        
        let yaExiste = this.listaSimbolosGlobal.some(s => s.id === id && s.ambito === this.nombre);
        if (!yaExiste) {
            this.listaSimbolosGlobal.push({
                id: id,
                tipoSimbolo: simbolo.tipo === 'FUNCION' ? 'Función' : (simbolo.tipo === 'STRUCT_DEF' ? 'Struct' : 'Variable'),
                tipoDato: simbolo.tipo,
                ambito: this.nombre,
                linea: simbolo.linea,
                columna: simbolo.columna
            });
        }
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