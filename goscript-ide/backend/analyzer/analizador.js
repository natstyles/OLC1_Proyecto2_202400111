/* Jison generated parser */
var analizador = (function(){
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"inicio":3,"instrucciones":4,"EOF":5,"instruccion":6,"R_PRINT":7,"PAR_IZQ":8,"expresiones":9,"PAR_DER":10,"PT_COMA":11,"R_VAR":12,"IDENTIFICADOR":13,"tipo_dato":14,"IGUAL":15,"expresion":16,"DOS_PUNTOS_IGUAL":17,"CORCHETE_IZQ":18,"CORCHETE_DER":19,"instruccion_if":20,"instruccion_while":21,"instruccion_for":22,"instruccion_switch":23,"R_BREAK":24,"R_CONTINUE":25,"R_IF":26,"LLAVE_IZQ":27,"LLAVE_DER":28,"R_ELSE":29,"R_WHILE":30,"R_FOR":31,"init_for":32,"actualizacion_for":33,"R_SWITCH":34,"casos":35,"caso":36,"R_CASE":37,"DOS_PUNTOS":38,"R_DEFAULT":39,"R_INT":40,"R_FLOAT":41,"R_STRING":42,"R_BOOL":43,"COMA":44,"AND":45,"OR":46,"NOT":47,"IGUAL_IGUAL":48,"NO_IGUAL":49,"MENOR":50,"MENOR_IGUAL":51,"MAYOR":52,"MAYOR_IGUAL":53,"MAS":54,"MENOS":55,"MULT":56,"DIV":57,"MOD":58,"ENTERO":59,"DECIMAL":60,"CADENA":61,"TRUE":62,"FALSE":63,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"R_PRINT",8:"PAR_IZQ",10:"PAR_DER",11:"PT_COMA",12:"R_VAR",13:"IDENTIFICADOR",15:"IGUAL",17:"DOS_PUNTOS_IGUAL",18:"CORCHETE_IZQ",19:"CORCHETE_DER",24:"R_BREAK",25:"R_CONTINUE",26:"R_IF",27:"LLAVE_IZQ",28:"LLAVE_DER",29:"R_ELSE",30:"R_WHILE",31:"R_FOR",34:"R_SWITCH",37:"R_CASE",38:"DOS_PUNTOS",39:"R_DEFAULT",40:"R_INT",41:"R_FLOAT",42:"R_STRING",43:"R_BOOL",44:"COMA",45:"AND",46:"OR",47:"NOT",48:"IGUAL_IGUAL",49:"NO_IGUAL",50:"MENOR",51:"MENOR_IGUAL",52:"MAYOR",53:"MAYOR_IGUAL",54:"MAS",55:"MENOS",56:"MULT",57:"DIV",58:"MOD",59:"ENTERO",60:"DECIMAL",61:"CADENA",62:"TRUE",63:"FALSE"},
productions_: [0,[3,2],[4,2],[4,1],[6,5],[6,6],[6,4],[6,4],[6,4],[6,7],[6,1],[6,1],[6,1],[6,1],[6,2],[6,2],[6,1],[20,7],[20,11],[20,9],[21,7],[22,11],[32,5],[32,3],[32,3],[33,3],[23,7],[35,2],[35,1],[36,4],[36,3],[14,1],[14,1],[14,1],[14,1],[9,3],[9,1],[16,3],[16,3],[16,2],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,2],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,4],[16,3],[16,3]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$
) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 3: this.$ = [$$[$0]]; 
break;
case 4: this.$ = new Print($$[$0-2], _$[$0-4].first_line, _$[$0-4].first_column); 
break;
case 5: this.$ = new Declaracion($$[$0-3], $$[$0-4], $$[$0-1], _$[$0-5].first_line, _$[$0-5].first_column); 
break;
case 6: this.$ = new Declaracion($$[$0-1], $$[$0-2], null, _$[$0-3].first_line, _$[$0-3].first_column); 
break;
case 7: this.$ = new Declaracion(null, $$[$0-3], $$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column); 
break;
case 8: this.$ = new Asignacion($$[$0-3], $$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column); 
break;
case 9: this.$ = new AsignacionArreglo($$[$0-6], $$[$0-4], $$[$0-1], _$[$0-6].first_line, _$[$0-6].first_column); 
break;
case 10: this.$ = $$[$0]; 
break;
case 11: this.$ = $$[$0]; 
break;
case 12: this.$ = $$[$0]; 
break;
case 13: this.$ = $$[$0]; 
break;
case 14: this.$ = new Break(_$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 15: this.$ = new Continue(_$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 16: /* Manejo de errores */ 
break;
case 17: this.$ = new SentenciaIf($$[$0-4], $$[$0-1], null, _$[$0-6].first_line, _$[$0-6].first_column); 
break;
case 18: this.$ = new SentenciaIf($$[$0-8], $$[$0-5], $$[$0-1], _$[$0-10].first_line, _$[$0-10].first_column); 
break;
case 19: this.$ = new SentenciaIf($$[$0-6], $$[$0-3], $$[$0], _$[$0-8].first_line, _$[$0-8].first_column); 
break;
case 20: this.$ = new SentenciaWhile($$[$0-4], $$[$0-1], _$[$0-6].first_line, _$[$0-6].first_column); 
break;
case 21: this.$ = new SentenciaFor($$[$0-8], $$[$0-6], $$[$0-4], $$[$0-1], _$[$0-10].first_line, _$[$0-10].first_column); 
break;
case 22: this.$ = new Declaracion($$[$0-2], $$[$0-3], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column); 
break;
case 23: this.$ = new Declaracion(null, $$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 24: this.$ = new Asignacion($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 25: this.$ = new Asignacion($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 26: this.$ = new SentenciaSwitch($$[$0-4], $$[$0-1], _$[$0-6].first_line, _$[$0-6].first_column); 
break;
case 27: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 28: this.$ = [$$[$0]]; 
break;
case 29: this.$ = new Caso($$[$0-2], $$[$0], _$[$0-3].first_line, _$[$0-3].first_column); 
break;
case 30: this.$ = new Caso(null, $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 31: this.$ = TIPO_DATO.INT; 
break;
case 32: this.$ = TIPO_DATO.FLOAT; 
break;
case 33: this.$ = TIPO_DATO.STRING; 
break;
case 34: this.$ = TIPO_DATO.BOOL; 
break;
case 35: $$[$0-2].push($$[$0]); this.$ = $$[$0-2]; 
break;
case 36: this.$ = [$$[$0]]; 
break;
case 37: this.$ = new Logica($$[$0-2], '&&', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 38: this.$ = new Logica($$[$0-2], '||', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 39: this.$ = new Logica(null, '!', $$[$0], _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 40: this.$ = new Relacional($$[$0-2], '==', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 41: this.$ = new Relacional($$[$0-2], '!=', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 42: this.$ = new Relacional($$[$0-2], '<', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 43: this.$ = new Relacional($$[$0-2], '<=', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 44: this.$ = new Relacional($$[$0-2], '>', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 45: this.$ = new Relacional($$[$0-2], '>=', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 46: this.$ = new Aritmetica($$[$0-2], '+', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 47: this.$ = new Aritmetica($$[$0-2], '-', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 48: this.$ = new Aritmetica($$[$0-2], '*', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 49: this.$ = new Aritmetica($$[$0-2], '/', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 50: this.$ = new Aritmetica($$[$0-2], '%', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 51: this.$ = new Aritmetica(null, '-', $$[$0], _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 52: this.$ = new Literal(TIPO_DATO.INT, $$[$0], _$[$0].first_line, _$[$0].first_column); 
break;
case 53: this.$ = new Literal(TIPO_DATO.FLOAT, $$[$0], _$[$0].first_line, _$[$0].first_column); 
break;
case 54: this.$ = new Literal(TIPO_DATO.STRING, $$[$0], _$[$0].first_line, _$[$0].first_column); 
break;
case 55: this.$ = new Literal(TIPO_DATO.BOOL, true, _$[$0].first_line, _$[$0].first_column); 
break;
case 56: this.$ = new Literal(TIPO_DATO.BOOL, false, _$[$0].first_line, _$[$0].first_column); 
break;
case 57: this.$ = new Acceso($$[$0], _$[$0].first_line, _$[$0].first_column); 
break;
case 58: this.$ = new AccesoArreglo($$[$0-3], $$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column); 
break;
case 59: this.$ = new Arreglo($$[$0-1], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 60: this.$ = $$[$0-1]; 
break;
}
},
table: [{2:[1,13],3:1,4:2,6:3,7:[1,4],12:[1,5],13:[1,6],20:7,21:8,22:9,23:10,24:[1,11],25:[1,12],26:[1,14],30:[1,15],31:[1,16],34:[1,17]},{1:[3]},{2:[1,13],5:[1,18],6:19,7:[1,4],12:[1,5],13:[1,6],20:7,21:8,22:9,23:10,24:[1,11],25:[1,12],26:[1,14],30:[1,15],31:[1,16],34:[1,17]},{2:[2,3],5:[2,3],7:[2,3],12:[2,3],13:[2,3],24:[2,3],25:[2,3],26:[2,3],28:[2,3],30:[2,3],31:[2,3],34:[2,3],37:[2,3],39:[2,3]},{8:[1,20]},{13:[1,21]},{15:[1,23],17:[1,22],18:[1,24]},{2:[2,10],5:[2,10],7:[2,10],12:[2,10],13:[2,10],24:[2,10],25:[2,10],26:[2,10],28:[2,10],30:[2,10],31:[2,10],34:[2,10],37:[2,10],39:[2,10]},{2:[2,11],5:[2,11],7:[2,11],12:[2,11],13:[2,11],24:[2,11],25:[2,11],26:[2,11],28:[2,11],30:[2,11],31:[2,11],34:[2,11],37:[2,11],39:[2,11]},{2:[2,12],5:[2,12],7:[2,12],12:[2,12],13:[2,12],24:[2,12],25:[2,12],26:[2,12],28:[2,12],30:[2,12],31:[2,12],34:[2,12],37:[2,12],39:[2,12]},{2:[2,13],5:[2,13],7:[2,13],12:[2,13],13:[2,13],24:[2,13],25:[2,13],26:[2,13],28:[2,13],30:[2,13],31:[2,13],34:[2,13],37:[2,13],39:[2,13]},{11:[1,25]},{11:[1,26]},{2:[2,16],5:[2,16],7:[2,16],12:[2,16],13:[2,16],24:[2,16],25:[2,16],26:[2,16],28:[2,16],30:[2,16],31:[2,16],34:[2,16],37:[2,16],39:[2,16]},{8:[1,27]},{8:[1,28]},{8:[1,29]},{8:[1,30]},{1:[2,1]},{2:[2,2],5:[2,2],7:[2,2],12:[2,2],13:[2,2],24:[2,2],25:[2,2],26:[2,2],28:[2,2],30:[2,2],31:[2,2],34:[2,2],37:[2,2],39:[2,2]},{8:[1,42],9:31,13:[1,40],16:32,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{14:43,40:[1,44],41:[1,45],42:[1,46],43:[1,47]},{8:[1,42],13:[1,40],16:48,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:49,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:50,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{2:[2,14],5:[2,14],7:[2,14],12:[2,14],13:[2,14],24:[2,14],25:[2,14],26:[2,14],28:[2,14],30:[2,14],31:[2,14],34:[2,14],37:[2,14],39:[2,14]},{2:[2,15],5:[2,15],7:[2,15],12:[2,15],13:[2,15],24:[2,15],25:[2,15],26:[2,15],28:[2,15],30:[2,15],31:[2,15],34:[2,15],37:[2,15],39:[2,15]},{8:[1,42],13:[1,40],16:51,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:52,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{12:[1,54],13:[1,55],32:53},{8:[1,42],13:[1,40],16:56,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{10:[1,57],44:[1,58]},{10:[2,36],19:[2,36],44:[2,36],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{8:[1,42],13:[1,40],16:72,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:73,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{10:[2,52],11:[2,52],19:[2,52],38:[2,52],44:[2,52],45:[2,52],46:[2,52],48:[2,52],49:[2,52],50:[2,52],51:[2,52],52:[2,52],53:[2,52],54:[2,52],55:[2,52],56:[2,52],57:[2,52],58:[2,52]},{10:[2,53],11:[2,53],19:[2,53],38:[2,53],44:[2,53],45:[2,53],46:[2,53],48:[2,53],49:[2,53],50:[2,53],51:[2,53],52:[2,53],53:[2,53],54:[2,53],55:[2,53],56:[2,53],57:[2,53],58:[2,53]},{10:[2,54],11:[2,54],19:[2,54],38:[2,54],44:[2,54],45:[2,54],46:[2,54],48:[2,54],49:[2,54],50:[2,54],51:[2,54],52:[2,54],53:[2,54],54:[2,54],55:[2,54],56:[2,54],57:[2,54],58:[2,54]},{10:[2,55],11:[2,55],19:[2,55],38:[2,55],44:[2,55],45:[2,55],46:[2,55],48:[2,55],49:[2,55],50:[2,55],51:[2,55],52:[2,55],53:[2,55],54:[2,55],55:[2,55],56:[2,55],57:[2,55],58:[2,55]},{10:[2,56],11:[2,56],19:[2,56],38:[2,56],44:[2,56],45:[2,56],46:[2,56],48:[2,56],49:[2,56],50:[2,56],51:[2,56],52:[2,56],53:[2,56],54:[2,56],55:[2,56],56:[2,56],57:[2,56],58:[2,56]},{10:[2,57],11:[2,57],18:[1,74],19:[2,57],38:[2,57],44:[2,57],45:[2,57],46:[2,57],48:[2,57],49:[2,57],50:[2,57],51:[2,57],52:[2,57],53:[2,57],54:[2,57],55:[2,57],56:[2,57],57:[2,57],58:[2,57]},{8:[1,42],9:75,13:[1,40],16:32,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:76,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{11:[1,78],15:[1,77]},{11:[2,31],15:[2,31]},{11:[2,32],15:[2,32]},{11:[2,33],15:[2,33]},{11:[2,34],15:[2,34]},{11:[1,79],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{11:[1,80],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{19:[1,81],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{10:[1,82],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{10:[1,83],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{11:[1,84]},{13:[1,85]},{15:[1,87],17:[1,86]},{10:[1,88],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{11:[1,89]},{8:[1,42],13:[1,40],16:90,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:91,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:92,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:93,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:94,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:95,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:96,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:97,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:98,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:99,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:100,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:101,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:102,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:103,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{10:[2,39],11:[2,39],19:[2,39],38:[2,39],44:[2,39],45:[2,39],46:[2,39],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{10:[2,51],11:[2,51],19:[2,51],38:[2,51],44:[2,51],45:[2,51],46:[2,51],48:[2,51],49:[2,51],50:[2,51],51:[2,51],52:[2,51],53:[2,51],54:[2,51],55:[2,51],56:[2,51],57:[2,51],58:[2,51]},{8:[1,42],13:[1,40],16:104,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{19:[1,105],44:[1,58]},{10:[1,106],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{8:[1,42],13:[1,40],16:107,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{2:[2,6],5:[2,6],7:[2,6],12:[2,6],13:[2,6],24:[2,6],25:[2,6],26:[2,6],28:[2,6],30:[2,6],31:[2,6],34:[2,6],37:[2,6],39:[2,6]},{2:[2,7],5:[2,7],7:[2,7],12:[2,7],13:[2,7],24:[2,7],25:[2,7],26:[2,7],28:[2,7],30:[2,7],31:[2,7],34:[2,7],37:[2,7],39:[2,7]},{2:[2,8],5:[2,8],7:[2,8],12:[2,8],13:[2,8],24:[2,8],25:[2,8],26:[2,8],28:[2,8],30:[2,8],31:[2,8],34:[2,8],37:[2,8],39:[2,8]},{15:[1,108]},{27:[1,109]},{27:[1,110]},{8:[1,42],13:[1,40],16:111,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{14:112,40:[1,44],41:[1,45],42:[1,46],43:[1,47]},{8:[1,42],13:[1,40],16:113,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{8:[1,42],13:[1,40],16:114,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{27:[1,115]},{2:[2,4],5:[2,4],7:[2,4],12:[2,4],13:[2,4],24:[2,4],25:[2,4],26:[2,4],28:[2,4],30:[2,4],31:[2,4],34:[2,4],37:[2,4],39:[2,4]},{10:[2,35],19:[2,35],44:[2,35],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{10:[2,37],11:[2,37],19:[2,37],38:[2,37],44:[2,37],45:[2,37],46:[2,37],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{10:[2,38],11:[2,38],19:[2,38],38:[2,38],44:[2,38],45:[1,59],46:[2,38],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{10:[2,40],11:[2,40],19:[2,40],38:[2,40],44:[2,40],45:[2,40],46:[2,40],48:[2,40],49:[2,40],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{10:[2,41],11:[2,41],19:[2,41],38:[2,41],44:[2,41],45:[2,41],46:[2,41],48:[2,41],49:[2,41],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{10:[2,42],11:[2,42],19:[2,42],38:[2,42],44:[2,42],45:[2,42],46:[2,42],48:[2,42],49:[2,42],50:[2,42],51:[2,42],52:[2,42],53:[2,42],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{10:[2,43],11:[2,43],19:[2,43],38:[2,43],44:[2,43],45:[2,43],46:[2,43],48:[2,43],49:[2,43],50:[2,43],51:[2,43],52:[2,43],53:[2,43],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{10:[2,44],11:[2,44],19:[2,44],38:[2,44],44:[2,44],45:[2,44],46:[2,44],48:[2,44],49:[2,44],50:[2,44],51:[2,44],52:[2,44],53:[2,44],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{10:[2,45],11:[2,45],19:[2,45],38:[2,45],44:[2,45],45:[2,45],46:[2,45],48:[2,45],49:[2,45],50:[2,45],51:[2,45],52:[2,45],53:[2,45],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{10:[2,46],11:[2,46],19:[2,46],38:[2,46],44:[2,46],45:[2,46],46:[2,46],48:[2,46],49:[2,46],50:[2,46],51:[2,46],52:[2,46],53:[2,46],54:[2,46],55:[2,46],56:[1,69],57:[1,70],58:[1,71]},{10:[2,47],11:[2,47],19:[2,47],38:[2,47],44:[2,47],45:[2,47],46:[2,47],48:[2,47],49:[2,47],50:[2,47],51:[2,47],52:[2,47],53:[2,47],54:[2,47],55:[2,47],56:[1,69],57:[1,70],58:[1,71]},{10:[2,48],11:[2,48],19:[2,48],38:[2,48],44:[2,48],45:[2,48],46:[2,48],48:[2,48],49:[2,48],50:[2,48],51:[2,48],52:[2,48],53:[2,48],54:[2,48],55:[2,48],56:[2,48],57:[2,48],58:[2,48]},{10:[2,49],11:[2,49],19:[2,49],38:[2,49],44:[2,49],45:[2,49],46:[2,49],48:[2,49],49:[2,49],50:[2,49],51:[2,49],52:[2,49],53:[2,49],54:[2,49],55:[2,49],56:[2,49],57:[2,49],58:[2,49]},{10:[2,50],11:[2,50],19:[2,50],38:[2,50],44:[2,50],45:[2,50],46:[2,50],48:[2,50],49:[2,50],50:[2,50],51:[2,50],52:[2,50],53:[2,50],54:[2,50],55:[2,50],56:[2,50],57:[2,50],58:[2,50]},{19:[1,116],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{10:[2,59],11:[2,59],19:[2,59],38:[2,59],44:[2,59],45:[2,59],46:[2,59],48:[2,59],49:[2,59],50:[2,59],51:[2,59],52:[2,59],53:[2,59],54:[2,59],55:[2,59],56:[2,59],57:[2,59],58:[2,59]},{10:[2,60],11:[2,60],19:[2,60],38:[2,60],44:[2,60],45:[2,60],46:[2,60],48:[2,60],49:[2,60],50:[2,60],51:[2,60],52:[2,60],53:[2,60],54:[2,60],55:[2,60],56:[2,60],57:[2,60],58:[2,60]},{11:[1,117],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{8:[1,42],13:[1,40],16:118,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{2:[1,13],4:119,6:3,7:[1,4],12:[1,5],13:[1,6],20:7,21:8,22:9,23:10,24:[1,11],25:[1,12],26:[1,14],30:[1,15],31:[1,16],34:[1,17]},{2:[1,13],4:120,6:3,7:[1,4],12:[1,5],13:[1,6],20:7,21:8,22:9,23:10,24:[1,11],25:[1,12],26:[1,14],30:[1,15],31:[1,16],34:[1,17]},{11:[1,121],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{15:[1,122]},{11:[2,23],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{11:[2,24],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{35:123,36:124,37:[1,125],39:[1,126]},{10:[2,58],11:[2,58],19:[2,58],38:[2,58],44:[2,58],45:[2,58],46:[2,58],48:[2,58],49:[2,58],50:[2,58],51:[2,58],52:[2,58],53:[2,58],54:[2,58],55:[2,58],56:[2,58],57:[2,58],58:[2,58]},{2:[2,5],5:[2,5],7:[2,5],12:[2,5],13:[2,5],24:[2,5],25:[2,5],26:[2,5],28:[2,5],30:[2,5],31:[2,5],34:[2,5],37:[2,5],39:[2,5]},{11:[1,127],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{2:[1,13],6:19,7:[1,4],12:[1,5],13:[1,6],20:7,21:8,22:9,23:10,24:[1,11],25:[1,12],26:[1,14],28:[1,128],30:[1,15],31:[1,16],34:[1,17]},{2:[1,13],6:19,7:[1,4],12:[1,5],13:[1,6],20:7,21:8,22:9,23:10,24:[1,11],25:[1,12],26:[1,14],28:[1,129],30:[1,15],31:[1,16],34:[1,17]},{13:[1,131],33:130},{8:[1,42],13:[1,40],16:132,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{28:[1,133],36:134,37:[1,125],39:[1,126]},{28:[2,28],37:[2,28],39:[2,28]},{8:[1,42],13:[1,40],16:135,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{38:[1,136]},{2:[2,9],5:[2,9],7:[2,9],12:[2,9],13:[2,9],24:[2,9],25:[2,9],26:[2,9],28:[2,9],30:[2,9],31:[2,9],34:[2,9],37:[2,9],39:[2,9]},{2:[2,17],5:[2,17],7:[2,17],12:[2,17],13:[2,17],24:[2,17],25:[2,17],26:[2,17],28:[2,17],29:[1,137],30:[2,17],31:[2,17],34:[2,17],37:[2,17],39:[2,17]},{2:[2,20],5:[2,20],7:[2,20],12:[2,20],13:[2,20],24:[2,20],25:[2,20],26:[2,20],28:[2,20],30:[2,20],31:[2,20],34:[2,20],37:[2,20],39:[2,20]},{10:[1,138]},{15:[1,139]},{11:[2,22],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{2:[2,26],5:[2,26],7:[2,26],12:[2,26],13:[2,26],24:[2,26],25:[2,26],26:[2,26],28:[2,26],30:[2,26],31:[2,26],34:[2,26],37:[2,26],39:[2,26]},{28:[2,27],37:[2,27],39:[2,27]},{38:[1,140],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{2:[1,13],4:141,6:3,7:[1,4],12:[1,5],13:[1,6],20:7,21:8,22:9,23:10,24:[1,11],25:[1,12],26:[1,14],30:[1,15],31:[1,16],34:[1,17]},{20:143,26:[1,14],27:[1,142]},{27:[1,144]},{8:[1,42],13:[1,40],16:145,18:[1,41],47:[1,33],55:[1,34],59:[1,35],60:[1,36],61:[1,37],62:[1,38],63:[1,39]},{2:[1,13],4:146,6:3,7:[1,4],12:[1,5],13:[1,6],20:7,21:8,22:9,23:10,24:[1,11],25:[1,12],26:[1,14],30:[1,15],31:[1,16],34:[1,17]},{2:[1,13],6:19,7:[1,4],12:[1,5],13:[1,6],20:7,21:8,22:9,23:10,24:[1,11],25:[1,12],26:[1,14],28:[2,30],30:[1,15],31:[1,16],34:[1,17],37:[2,30],39:[2,30]},{2:[1,13],4:147,6:3,7:[1,4],12:[1,5],13:[1,6],20:7,21:8,22:9,23:10,24:[1,11],25:[1,12],26:[1,14],30:[1,15],31:[1,16],34:[1,17]},{2:[2,19],5:[2,19],7:[2,19],12:[2,19],13:[2,19],24:[2,19],25:[2,19],26:[2,19],28:[2,19],30:[2,19],31:[2,19],34:[2,19],37:[2,19],39:[2,19]},{2:[1,13],4:148,6:3,7:[1,4],12:[1,5],13:[1,6],20:7,21:8,22:9,23:10,24:[1,11],25:[1,12],26:[1,14],30:[1,15],31:[1,16],34:[1,17]},{10:[2,25],45:[1,59],46:[1,60],48:[1,61],49:[1,62],50:[1,63],51:[1,64],52:[1,65],53:[1,66],54:[1,67],55:[1,68],56:[1,69],57:[1,70],58:[1,71]},{2:[1,13],6:19,7:[1,4],12:[1,5],13:[1,6],20:7,21:8,22:9,23:10,24:[1,11],25:[1,12],26:[1,14],28:[2,29],30:[1,15],31:[1,16],34:[1,17],37:[2,29],39:[2,29]},{2:[1,13],6:19,7:[1,4],12:[1,5],13:[1,6],20:7,21:8,22:9,23:10,24:[1,11],25:[1,12],26:[1,14],28:[1,149],30:[1,15],31:[1,16],34:[1,17]},{2:[1,13],6:19,7:[1,4],12:[1,5],13:[1,6],20:7,21:8,22:9,23:10,24:[1,11],25:[1,12],26:[1,14],28:[1,150],30:[1,15],31:[1,16],34:[1,17]},{2:[2,18],5:[2,18],7:[2,18],12:[2,18],13:[2,18],24:[2,18],25:[2,18],26:[2,18],28:[2,18],30:[2,18],31:[2,18],34:[2,18],37:[2,18],39:[2,18]},{2:[2,21],5:[2,21],7:[2,21],12:[2,21],13:[2,21],24:[2,21],25:[2,21],26:[2,21],28:[2,21],30:[2,21],31:[2,21],34:[2,21],37:[2,21],39:[2,21]}],
defaultActions: {18:[2,1]},
parseError: function parseError (str, hash) {
    throw new Error(str);
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    var ranges = this.lexer.options && this.lexer.options.ranges;

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        _handle_error:
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            var errStr = '';
            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state === 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol == 2 ? null : symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};

    // MODELOS
    const Literal = require('../models/literal');
    const Aritmetica = require('../models/aritmetica');
    const Relacional = require('../models/relacional');
    const Logica = require('../models/logica');
    const Print = require('../models/print');
    const Declaracion = require('../models/declaracion');
    const Acceso = require('../models/acceso');
    const Asignacion = require('../models/asignacion');
    const SentenciaIf = require('../models/sentenciaIf');
    const SentenciaWhile = require('../models/sentenciaWhile');
    const SentenciaFor = require('../models/sentenciaFor');
    const SentenciaSwitch = require('../models/sentenciaSwitch');
    const Caso = require('../models/caso');
    const Break = require('../models/break');
    const Continue = require('../models/continue');
    const Arreglo = require('../models/arreglo');
    const AccesoArreglo = require('../models/accesoArreglo');
    const AsignacionArreglo = require('../models/asignacionArreglo');
    const { TIPO_DATO } = require('../models/tipo');
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex () {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },
popState:function popState () {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules () {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin (condition) {
        this.begin(condition);
    }});
lexer.options = {"case-sensitive":true};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START
) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:/* ignoro espacios en blanco */
break;
case 1:/* comentario una linea */
break;
case 2:/* multilinea */
break;
case 3:return 40;
break;
case 4:return 41;
break;
case 5:return 42;
break;
case 6:return 43;
break;
case 7:return 12;
break;
case 8:return 7;
break;
case 9:return 26;
break;
case 10:return 29;
break;
case 11:return 30;
break;
case 12:return 31;
break;
case 13:return 34;
break;
case 14:return 37;
break;
case 15:return 39;
break;
case 16:return 24;
break;
case 17:return 25;
break;
case 18:return 62;
break;
case 19:return 63;
break;
case 20:return 48;
break;
case 21:return 49;
break;
case 22:return 51;
break;
case 23:return 53;
break;
case 24:return 50;
break;
case 25:return 52;
break;
case 26:return 17;
break;
case 27:return 15;
break;
case 28:return 45;
break;
case 29:return 46;
break;
case 30:return 47;
break;
case 31:return 54;
break;
case 32:return 55;
break;
case 33:return 56;
break;
case 34:return 57;
break;
case 35:return 58;
break;
case 36:return 8;
break;
case 37:return 10;
break;
case 38:return 27;
break;
case 39:return 28;
break;
case 40:return 18;
break;
case 41:return 19;
break;
case 42:return 38;
break;
case 43:return 11;
break;
case 44:return 44;
break;
case 45: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 61; 
break;
case 46:return 60;
break;
case 47:return 59;
break;
case 48:return 13;
break;
case 49:return 5;
break;
case 50: console.error('Error léxico: ' + yy_.yytext); 
break;
}
};
lexer.rules = [/^(?:\s+)/,/^(?:\/\/.*)/,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/,/^(?:int\b)/,/^(?:float64\b)/,/^(?:string\b)/,/^(?:bool\b)/,/^(?:var\b)/,/^(?:fmt\.Println\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:while\b)/,/^(?:for\b)/,/^(?:switch\b)/,/^(?:case\b)/,/^(?:default\b)/,/^(?:break\b)/,/^(?:continue\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:==)/,/^(?:!=)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?::=)/,/^(?:=)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:!)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?::)/,/^(?:;)/,/^(?:,)/,/^(?:"[^\"]*")/,/^(?:[0-9]+(\.[0-9]+)\b)/,/^(?:[0-9]+\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = analizador;
exports.Parser = analizador.Parser;
exports.parse = function () { return analizador.parse.apply(analizador, arguments); }
exports.main = function commonjsMain (args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}