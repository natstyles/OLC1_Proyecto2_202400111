const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');

class InstanciaStruct extends Node {
    constructor(idStruct, asignaciones, linea, columna) {
        super(linea, columna);
        this.idStruct = idStruct;
        this.asignaciones = asignaciones; 
    }

    interpretar(arbol, tabla) {
        let defStruct = tabla.obtener(this.idStruct);
        if (!defStruct || defStruct.tipo !== 'STRUCT_DEF') {
            console.error(`Error: Struct ${this.idStruct} no definido.`);
            return { tipo: TIPO_DATO.NULL, valor: null };
        }

        let entornoStruct = new Map();

        for (let asig of this.asignaciones) {
            let atributoBase = defStruct.valor.find(attr => attr.id === asig.id);
            if (!atributoBase) {
                console.error(`Error: Atributo ${asig.id} no existe en el struct ${this.idStruct}.`);
                continue;
            }

            let valorEvaluado = asig.expresion.interpretar(arbol, tabla);
            entornoStruct.set(asig.id, valorEvaluado);
        }

        return { tipo: TIPO_DATO.STRUCT, valor: entornoStruct, tipoStruct: this.idStruct };
    }
}

module.exports = InstanciaStruct;