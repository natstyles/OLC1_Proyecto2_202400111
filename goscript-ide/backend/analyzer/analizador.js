/* Jison generated parser */
var analizador = (function(){
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"inicio":3,"instrucciones":4,"EOF":5,"instruccion":6,"R_PRINT":7,"PAR_IZQ":8,"expresiones":9,"PAR_DER":10,"PT_COMA":11,"R_VAR":12,"IDENTIFICADOR":13,"tipo_dato":14,"IGUAL":15,"expresion":16,"DOS_PUNTOS_IGUAL":17,"instruccion_if":18,"instruccion_while":19,"instruccion_for":20,"instruccion_switch":21,"R_BREAK":22,"R_CONTINUE":23,"R_IF":24,"LLAVE_IZQ":25,"LLAVE_DER":26,"R_ELSE":27,"R_WHILE":28,"R_FOR":29,"init_for":30,"actualizacion_for":31,"R_SWITCH":32,"casos":33,"caso":34,"R_CASE":35,"DOS_PUNTOS":36,"R_DEFAULT":37,"R_INT":38,"R_FLOAT":39,"R_STRING":40,"R_BOOL":41,"COMA":42,"AND":43,"OR":44,"NOT":45,"IGUAL_IGUAL":46,"NO_IGUAL":47,"MENOR":48,"MENOR_IGUAL":49,"MAYOR":50,"MAYOR_IGUAL":51,"MAS":52,"MENOS":53,"MULT":54,"DIV":55,"MOD":56,"ENTERO":57,"DECIMAL":58,"CADENA":59,"TRUE":60,"FALSE":61,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"R_PRINT",8:"PAR_IZQ",10:"PAR_DER",11:"PT_COMA",12:"R_VAR",13:"IDENTIFICADOR",15:"IGUAL",17:"DOS_PUNTOS_IGUAL",22:"R_BREAK",23:"R_CONTINUE",24:"R_IF",25:"LLAVE_IZQ",26:"LLAVE_DER",27:"R_ELSE",28:"R_WHILE",29:"R_FOR",32:"R_SWITCH",35:"R_CASE",36:"DOS_PUNTOS",37:"R_DEFAULT",38:"R_INT",39:"R_FLOAT",40:"R_STRING",41:"R_BOOL",42:"COMA",43:"AND",44:"OR",45:"NOT",46:"IGUAL_IGUAL",47:"NO_IGUAL",48:"MENOR",49:"MENOR_IGUAL",50:"MAYOR",51:"MAYOR_IGUAL",52:"MAS",53:"MENOS",54:"MULT",55:"DIV",56:"MOD",57:"ENTERO",58:"DECIMAL",59:"CADENA",60:"TRUE",61:"FALSE"},
productions_: [0,[3,2],[4,2],[4,1],[6,5],[6,6],[6,4],[6,4],[6,4],[6,1],[6,1],[6,1],[6,1],[6,2],[6,2],[6,1],[18,7],[18,11],[18,9],[19,7],[20,11],[30,5],[30,3],[30,3],[31,3],[21,7],[33,2],[33,1],[34,4],[34,3],[14,1],[14,1],[14,1],[14,1],[9,3],[9,1],[16,3],[16,3],[16,2],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,2],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,3]],
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
case 9: this.$ = $$[$0]; 
break;
case 10: this.$ = $$[$0]; 
break;
case 11: this.$ = $$[$0]; 
break;
case 12: this.$ = $$[$0]; 
break;
case 13: this.$ = new Break(_$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 14: this.$ = new Continue(_$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 15: /* Manejo de errores */ 
break;
case 16: this.$ = new SentenciaIf($$[$0-4], $$[$0-1], null, _$[$0-6].first_line, _$[$0-6].first_column); 
break;
case 17: this.$ = new SentenciaIf($$[$0-8], $$[$0-5], $$[$0-1], _$[$0-10].first_line, _$[$0-10].first_column); 
break;
case 18: this.$ = new SentenciaIf($$[$0-6], $$[$0-3], $$[$0], _$[$0-8].first_line, _$[$0-8].first_column); 
break;
case 19: this.$ = new SentenciaWhile($$[$0-4], $$[$0-1], _$[$0-6].first_line, _$[$0-6].first_column); 
break;
case 20: this.$ = new SentenciaFor($$[$0-8], $$[$0-6], $$[$0-4], $$[$0-1], _$[$0-10].first_line, _$[$0-10].first_column); 
break;
case 21: this.$ = new Declaracion($$[$0-2], $$[$0-3], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column); 
break;
case 22: this.$ = new Declaracion(null, $$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 23: this.$ = new Asignacion($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 24: this.$ = new Asignacion($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 25: this.$ = new SentenciaSwitch($$[$0-4], $$[$0-1], _$[$0-6].first_line, _$[$0-6].first_column); 
break;
case 26: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 27: this.$ = [$$[$0]]; 
break;
case 28: this.$ = new Caso($$[$0-2], $$[$0], _$[$0-3].first_line, _$[$0-3].first_column); 
break;
case 29: this.$ = new Caso(null, $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 30: this.$ = TIPO_DATO.INT; 
break;
case 31: this.$ = TIPO_DATO.FLOAT; 
break;
case 32: this.$ = TIPO_DATO.STRING; 
break;
case 33: this.$ = TIPO_DATO.BOOL; 
break;
case 34: $$[$0-2].push($$[$0]); this.$ = $$[$0-2]; 
break;
case 35: this.$ = [$$[$0]]; 
break;
case 36: this.$ = new Logica($$[$0-2], '&&', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 37: this.$ = new Logica($$[$0-2], '||', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 38: this.$ = new Logica(null, '!', $$[$0], _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 39: this.$ = new Relacional($$[$0-2], '==', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 40: this.$ = new Relacional($$[$0-2], '!=', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 41: this.$ = new Relacional($$[$0-2], '<', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 42: this.$ = new Relacional($$[$0-2], '<=', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 43: this.$ = new Relacional($$[$0-2], '>', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 44: this.$ = new Relacional($$[$0-2], '>=', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 45: this.$ = new Aritmetica($$[$0-2], '+', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 46: this.$ = new Aritmetica($$[$0-2], '-', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 47: this.$ = new Aritmetica($$[$0-2], '*', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 48: this.$ = new Aritmetica($$[$0-2], '/', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 49: this.$ = new Aritmetica($$[$0-2], '%', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 50: this.$ = new Aritmetica(null, '-', $$[$0], _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 51: this.$ = new Literal(TIPO_DATO.INT, $$[$0], _$[$0].first_line, _$[$0].first_column); 
break;
case 52: this.$ = new Literal(TIPO_DATO.FLOAT, $$[$0], _$[$0].first_line, _$[$0].first_column); 
break;
case 53: this.$ = new Literal(TIPO_DATO.STRING, $$[$0], _$[$0].first_line, _$[$0].first_column); 
break;
case 54: this.$ = new Literal(TIPO_DATO.BOOL, true, _$[$0].first_line, _$[$0].first_column); 
break;
case 55: this.$ = new Literal(TIPO_DATO.BOOL, false, _$[$0].first_line, _$[$0].first_column); 
break;
case 56: this.$ = new Acceso($$[$0], _$[$0].first_line, _$[$0].first_column); 
break;
case 57: this.$ = $$[$0-1]; 
break;
}
},
table: [{2:[1,13],3:1,4:2,6:3,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:10,22:[1,11],23:[1,12],24:[1,14],28:[1,15],29:[1,16],32:[1,17]},{1:[3]},{2:[1,13],5:[1,18],6:19,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:10,22:[1,11],23:[1,12],24:[1,14],28:[1,15],29:[1,16],32:[1,17]},{2:[2,3],5:[2,3],7:[2,3],12:[2,3],13:[2,3],22:[2,3],23:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],32:[2,3],35:[2,3],37:[2,3]},{8:[1,20]},{13:[1,21]},{15:[1,23],17:[1,22]},{2:[2,9],5:[2,9],7:[2,9],12:[2,9],13:[2,9],22:[2,9],23:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],32:[2,9],35:[2,9],37:[2,9]},{2:[2,10],5:[2,10],7:[2,10],12:[2,10],13:[2,10],22:[2,10],23:[2,10],24:[2,10],26:[2,10],28:[2,10],29:[2,10],32:[2,10],35:[2,10],37:[2,10]},{2:[2,11],5:[2,11],7:[2,11],12:[2,11],13:[2,11],22:[2,11],23:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],32:[2,11],35:[2,11],37:[2,11]},{2:[2,12],5:[2,12],7:[2,12],12:[2,12],13:[2,12],22:[2,12],23:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],32:[2,12],35:[2,12],37:[2,12]},{11:[1,24]},{11:[1,25]},{2:[2,15],5:[2,15],7:[2,15],12:[2,15],13:[2,15],22:[2,15],23:[2,15],24:[2,15],26:[2,15],28:[2,15],29:[2,15],32:[2,15],35:[2,15],37:[2,15]},{8:[1,26]},{8:[1,27]},{8:[1,28]},{8:[1,29]},{1:[2,1]},{2:[2,2],5:[2,2],7:[2,2],12:[2,2],13:[2,2],22:[2,2],23:[2,2],24:[2,2],26:[2,2],28:[2,2],29:[2,2],32:[2,2],35:[2,2],37:[2,2]},{8:[1,40],9:30,13:[1,39],16:31,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{14:41,38:[1,42],39:[1,43],40:[1,44],41:[1,45]},{8:[1,40],13:[1,39],16:46,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{8:[1,40],13:[1,39],16:47,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{2:[2,13],5:[2,13],7:[2,13],12:[2,13],13:[2,13],22:[2,13],23:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],32:[2,13],35:[2,13],37:[2,13]},{2:[2,14],5:[2,14],7:[2,14],12:[2,14],13:[2,14],22:[2,14],23:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],32:[2,14],35:[2,14],37:[2,14]},{8:[1,40],13:[1,39],16:48,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{8:[1,40],13:[1,39],16:49,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{12:[1,51],13:[1,52],30:50},{8:[1,40],13:[1,39],16:53,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{10:[1,54],42:[1,55]},{10:[2,35],42:[2,35],43:[1,56],44:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{8:[1,40],13:[1,39],16:69,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{8:[1,40],13:[1,39],16:70,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{10:[2,51],11:[2,51],36:[2,51],42:[2,51],43:[2,51],44:[2,51],46:[2,51],47:[2,51],48:[2,51],49:[2,51],50:[2,51],51:[2,51],52:[2,51],53:[2,51],54:[2,51],55:[2,51],56:[2,51]},{10:[2,52],11:[2,52],36:[2,52],42:[2,52],43:[2,52],44:[2,52],46:[2,52],47:[2,52],48:[2,52],49:[2,52],50:[2,52],51:[2,52],52:[2,52],53:[2,52],54:[2,52],55:[2,52],56:[2,52]},{10:[2,53],11:[2,53],36:[2,53],42:[2,53],43:[2,53],44:[2,53],46:[2,53],47:[2,53],48:[2,53],49:[2,53],50:[2,53],51:[2,53],52:[2,53],53:[2,53],54:[2,53],55:[2,53],56:[2,53]},{10:[2,54],11:[2,54],36:[2,54],42:[2,54],43:[2,54],44:[2,54],46:[2,54],47:[2,54],48:[2,54],49:[2,54],50:[2,54],51:[2,54],52:[2,54],53:[2,54],54:[2,54],55:[2,54],56:[2,54]},{10:[2,55],11:[2,55],36:[2,55],42:[2,55],43:[2,55],44:[2,55],46:[2,55],47:[2,55],48:[2,55],49:[2,55],50:[2,55],51:[2,55],52:[2,55],53:[2,55],54:[2,55],55:[2,55],56:[2,55]},{10:[2,56],11:[2,56],36:[2,56],42:[2,56],43:[2,56],44:[2,56],46:[2,56],47:[2,56],48:[2,56],49:[2,56],50:[2,56],51:[2,56],52:[2,56],53:[2,56],54:[2,56],55:[2,56],56:[2,56]},{8:[1,40],13:[1,39],16:71,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{11:[1,73],15:[1,72]},{11:[2,30],15:[2,30]},{11:[2,31],15:[2,31]},{11:[2,32],15:[2,32]},{11:[2,33],15:[2,33]},{11:[1,74],43:[1,56],44:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{11:[1,75],43:[1,56],44:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{10:[1,76],43:[1,56],44:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{10:[1,77],43:[1,56],44:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{11:[1,78]},{13:[1,79]},{15:[1,81],17:[1,80]},{10:[1,82],43:[1,56],44:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{11:[1,83]},{8:[1,40],13:[1,39],16:84,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{8:[1,40],13:[1,39],16:85,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{8:[1,40],13:[1,39],16:86,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{8:[1,40],13:[1,39],16:87,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{8:[1,40],13:[1,39],16:88,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{8:[1,40],13:[1,39],16:89,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{8:[1,40],13:[1,39],16:90,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{8:[1,40],13:[1,39],16:91,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{8:[1,40],13:[1,39],16:92,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{8:[1,40],13:[1,39],16:93,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{8:[1,40],13:[1,39],16:94,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{8:[1,40],13:[1,39],16:95,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{8:[1,40],13:[1,39],16:96,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{8:[1,40],13:[1,39],16:97,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{10:[2,38],11:[2,38],36:[2,38],42:[2,38],43:[2,38],44:[2,38],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{10:[2,50],11:[2,50],36:[2,50],42:[2,50],43:[2,50],44:[2,50],46:[2,50],47:[2,50],48:[2,50],49:[2,50],50:[2,50],51:[2,50],52:[2,50],53:[2,50],54:[2,50],55:[2,50],56:[2,50]},{10:[1,98],43:[1,56],44:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{8:[1,40],13:[1,39],16:99,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{2:[2,6],5:[2,6],7:[2,6],12:[2,6],13:[2,6],22:[2,6],23:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],32:[2,6],35:[2,6],37:[2,6]},{2:[2,7],5:[2,7],7:[2,7],12:[2,7],13:[2,7],22:[2,7],23:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],32:[2,7],35:[2,7],37:[2,7]},{2:[2,8],5:[2,8],7:[2,8],12:[2,8],13:[2,8],22:[2,8],23:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],32:[2,8],35:[2,8],37:[2,8]},{25:[1,100]},{25:[1,101]},{8:[1,40],13:[1,39],16:102,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{14:103,38:[1,42],39:[1,43],40:[1,44],41:[1,45]},{8:[1,40],13:[1,39],16:104,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{8:[1,40],13:[1,39],16:105,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{25:[1,106]},{2:[2,4],5:[2,4],7:[2,4],12:[2,4],13:[2,4],22:[2,4],23:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],32:[2,4],35:[2,4],37:[2,4]},{10:[2,34],42:[2,34],43:[1,56],44:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{10:[2,36],11:[2,36],36:[2,36],42:[2,36],43:[2,36],44:[2,36],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{10:[2,37],11:[2,37],36:[2,37],42:[2,37],43:[1,56],44:[2,37],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{10:[2,39],11:[2,39],36:[2,39],42:[2,39],43:[2,39],44:[2,39],46:[2,39],47:[2,39],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{10:[2,40],11:[2,40],36:[2,40],42:[2,40],43:[2,40],44:[2,40],46:[2,40],47:[2,40],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{10:[2,41],11:[2,41],36:[2,41],42:[2,41],43:[2,41],44:[2,41],46:[2,41],47:[2,41],48:[2,41],49:[2,41],50:[2,41],51:[2,41],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{10:[2,42],11:[2,42],36:[2,42],42:[2,42],43:[2,42],44:[2,42],46:[2,42],47:[2,42],48:[2,42],49:[2,42],50:[2,42],51:[2,42],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{10:[2,43],11:[2,43],36:[2,43],42:[2,43],43:[2,43],44:[2,43],46:[2,43],47:[2,43],48:[2,43],49:[2,43],50:[2,43],51:[2,43],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{10:[2,44],11:[2,44],36:[2,44],42:[2,44],43:[2,44],44:[2,44],46:[2,44],47:[2,44],48:[2,44],49:[2,44],50:[2,44],51:[2,44],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{10:[2,45],11:[2,45],36:[2,45],42:[2,45],43:[2,45],44:[2,45],46:[2,45],47:[2,45],48:[2,45],49:[2,45],50:[2,45],51:[2,45],52:[2,45],53:[2,45],54:[1,66],55:[1,67],56:[1,68]},{10:[2,46],11:[2,46],36:[2,46],42:[2,46],43:[2,46],44:[2,46],46:[2,46],47:[2,46],48:[2,46],49:[2,46],50:[2,46],51:[2,46],52:[2,46],53:[2,46],54:[1,66],55:[1,67],56:[1,68]},{10:[2,47],11:[2,47],36:[2,47],42:[2,47],43:[2,47],44:[2,47],46:[2,47],47:[2,47],48:[2,47],49:[2,47],50:[2,47],51:[2,47],52:[2,47],53:[2,47],54:[2,47],55:[2,47],56:[2,47]},{10:[2,48],11:[2,48],36:[2,48],42:[2,48],43:[2,48],44:[2,48],46:[2,48],47:[2,48],48:[2,48],49:[2,48],50:[2,48],51:[2,48],52:[2,48],53:[2,48],54:[2,48],55:[2,48],56:[2,48]},{10:[2,49],11:[2,49],36:[2,49],42:[2,49],43:[2,49],44:[2,49],46:[2,49],47:[2,49],48:[2,49],49:[2,49],50:[2,49],51:[2,49],52:[2,49],53:[2,49],54:[2,49],55:[2,49],56:[2,49]},{10:[2,57],11:[2,57],36:[2,57],42:[2,57],43:[2,57],44:[2,57],46:[2,57],47:[2,57],48:[2,57],49:[2,57],50:[2,57],51:[2,57],52:[2,57],53:[2,57],54:[2,57],55:[2,57],56:[2,57]},{11:[1,107],43:[1,56],44:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{2:[1,13],4:108,6:3,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:10,22:[1,11],23:[1,12],24:[1,14],28:[1,15],29:[1,16],32:[1,17]},{2:[1,13],4:109,6:3,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:10,22:[1,11],23:[1,12],24:[1,14],28:[1,15],29:[1,16],32:[1,17]},{11:[1,110],43:[1,56],44:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{15:[1,111]},{11:[2,22],43:[1,56],44:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{11:[2,23],43:[1,56],44:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{33:112,34:113,35:[1,114],37:[1,115]},{2:[2,5],5:[2,5],7:[2,5],12:[2,5],13:[2,5],22:[2,5],23:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],32:[2,5],35:[2,5],37:[2,5]},{2:[1,13],6:19,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:10,22:[1,11],23:[1,12],24:[1,14],26:[1,116],28:[1,15],29:[1,16],32:[1,17]},{2:[1,13],6:19,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:10,22:[1,11],23:[1,12],24:[1,14],26:[1,117],28:[1,15],29:[1,16],32:[1,17]},{13:[1,119],31:118},{8:[1,40],13:[1,39],16:120,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{26:[1,121],34:122,35:[1,114],37:[1,115]},{26:[2,27],35:[2,27],37:[2,27]},{8:[1,40],13:[1,39],16:123,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{36:[1,124]},{2:[2,16],5:[2,16],7:[2,16],12:[2,16],13:[2,16],22:[2,16],23:[2,16],24:[2,16],26:[2,16],27:[1,125],28:[2,16],29:[2,16],32:[2,16],35:[2,16],37:[2,16]},{2:[2,19],5:[2,19],7:[2,19],12:[2,19],13:[2,19],22:[2,19],23:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],32:[2,19],35:[2,19],37:[2,19]},{10:[1,126]},{15:[1,127]},{11:[2,21],43:[1,56],44:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{2:[2,25],5:[2,25],7:[2,25],12:[2,25],13:[2,25],22:[2,25],23:[2,25],24:[2,25],26:[2,25],28:[2,25],29:[2,25],32:[2,25],35:[2,25],37:[2,25]},{26:[2,26],35:[2,26],37:[2,26]},{36:[1,128],43:[1,56],44:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{2:[1,13],4:129,6:3,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:10,22:[1,11],23:[1,12],24:[1,14],28:[1,15],29:[1,16],32:[1,17]},{18:131,24:[1,14],25:[1,130]},{25:[1,132]},{8:[1,40],13:[1,39],16:133,45:[1,32],53:[1,33],57:[1,34],58:[1,35],59:[1,36],60:[1,37],61:[1,38]},{2:[1,13],4:134,6:3,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:10,22:[1,11],23:[1,12],24:[1,14],28:[1,15],29:[1,16],32:[1,17]},{2:[1,13],6:19,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:10,22:[1,11],23:[1,12],24:[1,14],26:[2,29],28:[1,15],29:[1,16],32:[1,17],35:[2,29],37:[2,29]},{2:[1,13],4:135,6:3,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:10,22:[1,11],23:[1,12],24:[1,14],28:[1,15],29:[1,16],32:[1,17]},{2:[2,18],5:[2,18],7:[2,18],12:[2,18],13:[2,18],22:[2,18],23:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],32:[2,18],35:[2,18],37:[2,18]},{2:[1,13],4:136,6:3,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:10,22:[1,11],23:[1,12],24:[1,14],28:[1,15],29:[1,16],32:[1,17]},{10:[2,24],43:[1,56],44:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68]},{2:[1,13],6:19,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:10,22:[1,11],23:[1,12],24:[1,14],26:[2,28],28:[1,15],29:[1,16],32:[1,17],35:[2,28],37:[2,28]},{2:[1,13],6:19,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:10,22:[1,11],23:[1,12],24:[1,14],26:[1,137],28:[1,15],29:[1,16],32:[1,17]},{2:[1,13],6:19,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:10,22:[1,11],23:[1,12],24:[1,14],26:[1,138],28:[1,15],29:[1,16],32:[1,17]},{2:[2,17],5:[2,17],7:[2,17],12:[2,17],13:[2,17],22:[2,17],23:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],32:[2,17],35:[2,17],37:[2,17]},{2:[2,20],5:[2,20],7:[2,20],12:[2,20],13:[2,20],22:[2,20],23:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],32:[2,20],35:[2,20],37:[2,20]}],
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
case 3:return 38;
break;
case 4:return 39;
break;
case 5:return 40;
break;
case 6:return 41;
break;
case 7:return 12;
break;
case 8:return 7;
break;
case 9:return 24;
break;
case 10:return 27;
break;
case 11:return 28;
break;
case 12:return 29;
break;
case 13:return 32;
break;
case 14:return 35;
break;
case 15:return 37;
break;
case 16:return 22;
break;
case 17:return 23;
break;
case 18:return 60;
break;
case 19:return 61;
break;
case 20:return 46;
break;
case 21:return 47;
break;
case 22:return 49;
break;
case 23:return 51;
break;
case 24:return 48;
break;
case 25:return 50;
break;
case 26:return 17;
break;
case 27:return 15;
break;
case 28:return 43;
break;
case 29:return 44;
break;
case 30:return 45;
break;
case 31:return 52;
break;
case 32:return 53;
break;
case 33:return 54;
break;
case 34:return 55;
break;
case 35:return 56;
break;
case 36:return 8;
break;
case 37:return 10;
break;
case 38:return 25;
break;
case 39:return 26;
break;
case 40:return 36;
break;
case 41:return 11;
break;
case 42:return 42;
break;
case 43: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 59; 
break;
case 44:return 58;
break;
case 45:return 57;
break;
case 46:return 13;
break;
case 47:return 5;
break;
case 48: console.error('Error léxico: ' + yy_.yytext); 
break;
}
};
lexer.rules = [/^(?:\s+)/,/^(?:\/\/.*)/,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/,/^(?:int\b)/,/^(?:float64\b)/,/^(?:string\b)/,/^(?:bool\b)/,/^(?:var\b)/,/^(?:fmt\.Println\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:while\b)/,/^(?:for\b)/,/^(?:switch\b)/,/^(?:case\b)/,/^(?:default\b)/,/^(?:break\b)/,/^(?:continue\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:==)/,/^(?:!=)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?::=)/,/^(?:=)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:!)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?::)/,/^(?:;)/,/^(?:,)/,/^(?:"[^\"]*")/,/^(?:[0-9]+(\.[0-9]+)\b)/,/^(?:[0-9]+\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],"inclusive":true}};
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