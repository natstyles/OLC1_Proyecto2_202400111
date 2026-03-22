/* Jison generated parser */
var analizador = (function(){
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"inicio":3,"instrucciones":4,"EOF":5,"instruccion":6,"R_PRINT":7,"PAR_IZQ":8,"expresiones":9,"PAR_DER":10,"PT_COMA":11,"R_VAR":12,"IDENTIFICADOR":13,"tipo_dato":14,"IGUAL":15,"expresion":16,"DOS_PUNTOS_IGUAL":17,"instruccion_if":18,"instruccion_while":19,"instruccion_for":20,"R_IF":21,"LLAVE_IZQ":22,"LLAVE_DER":23,"R_ELSE":24,"R_WHILE":25,"R_FOR":26,"init_for":27,"actualizacion_for":28,"R_INT":29,"R_FLOAT":30,"R_STRING":31,"R_BOOL":32,"COMA":33,"AND":34,"OR":35,"NOT":36,"IGUAL_IGUAL":37,"NO_IGUAL":38,"MENOR":39,"MENOR_IGUAL":40,"MAYOR":41,"MAYOR_IGUAL":42,"MAS":43,"MENOS":44,"MULT":45,"DIV":46,"MOD":47,"ENTERO":48,"DECIMAL":49,"CADENA":50,"TRUE":51,"FALSE":52,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"R_PRINT",8:"PAR_IZQ",10:"PAR_DER",11:"PT_COMA",12:"R_VAR",13:"IDENTIFICADOR",15:"IGUAL",17:"DOS_PUNTOS_IGUAL",21:"R_IF",22:"LLAVE_IZQ",23:"LLAVE_DER",24:"R_ELSE",25:"R_WHILE",26:"R_FOR",29:"R_INT",30:"R_FLOAT",31:"R_STRING",32:"R_BOOL",33:"COMA",34:"AND",35:"OR",36:"NOT",37:"IGUAL_IGUAL",38:"NO_IGUAL",39:"MENOR",40:"MENOR_IGUAL",41:"MAYOR",42:"MAYOR_IGUAL",43:"MAS",44:"MENOS",45:"MULT",46:"DIV",47:"MOD",48:"ENTERO",49:"DECIMAL",50:"CADENA",51:"TRUE",52:"FALSE"},
productions_: [0,[3,2],[4,2],[4,1],[6,5],[6,6],[6,4],[6,4],[6,4],[6,1],[6,1],[6,1],[6,1],[18,7],[18,11],[18,9],[19,7],[20,11],[27,5],[27,3],[27,3],[28,3],[14,1],[14,1],[14,1],[14,1],[9,3],[9,1],[16,3],[16,3],[16,2],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,2],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,3]],
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
case 12: /* Manejo de errores */ 
break;
case 13: this.$ = new SentenciaIf($$[$0-4], $$[$0-1], null, _$[$0-6].first_line, _$[$0-6].first_column); 
break;
case 14: this.$ = new SentenciaIf($$[$0-8], $$[$0-5], $$[$0-1], _$[$0-10].first_line, _$[$0-10].first_column); 
break;
case 15: this.$ = new SentenciaIf($$[$0-6], $$[$0-3], $$[$0], _$[$0-8].first_line, _$[$0-8].first_column); 
break;
case 16: this.$ = new SentenciaWhile($$[$0-4], $$[$0-1], _$[$0-6].first_line, _$[$0-6].first_column); 
break;
case 17: this.$ = new SentenciaFor($$[$0-8], $$[$0-6], $$[$0-4], $$[$0-1], _$[$0-10].first_line, _$[$0-10].first_column); 
break;
case 18: this.$ = new Declaracion($$[$0-2], $$[$0-3], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column); 
break;
case 19: this.$ = new Declaracion(null, $$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 20: this.$ = new Asignacion($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 21: this.$ = new Asignacion($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 22: this.$ = TIPO_DATO.INT; 
break;
case 23: this.$ = TIPO_DATO.FLOAT; 
break;
case 24: this.$ = TIPO_DATO.STRING; 
break;
case 25: this.$ = TIPO_DATO.BOOL; 
break;
case 26: $$[$0-2].push($$[$0]); this.$ = $$[$0-2]; 
break;
case 27: this.$ = [$$[$0]]; 
break;
case 28: this.$ = new Logica($$[$0-2], '&&', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 29: this.$ = new Logica($$[$0-2], '||', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 30: this.$ = new Logica(null, '!', $$[$0], _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 31: this.$ = new Relacional($$[$0-2], '==', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 32: this.$ = new Relacional($$[$0-2], '!=', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 33: this.$ = new Relacional($$[$0-2], '<', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 34: this.$ = new Relacional($$[$0-2], '<=', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 35: this.$ = new Relacional($$[$0-2], '>', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 36: this.$ = new Relacional($$[$0-2], '>=', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 37: this.$ = new Aritmetica($$[$0-2], '+', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 38: this.$ = new Aritmetica($$[$0-2], '-', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 39: this.$ = new Aritmetica($$[$0-2], '*', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 40: this.$ = new Aritmetica($$[$0-2], '/', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 41: this.$ = new Aritmetica($$[$0-2], '%', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 42: this.$ = new Aritmetica(null, '-', $$[$0], _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 43: this.$ = new Literal(TIPO_DATO.INT, $$[$0], _$[$0].first_line, _$[$0].first_column); 
break;
case 44: this.$ = new Literal(TIPO_DATO.FLOAT, $$[$0], _$[$0].first_line, _$[$0].first_column); 
break;
case 45: this.$ = new Literal(TIPO_DATO.STRING, $$[$0], _$[$0].first_line, _$[$0].first_column); 
break;
case 46: this.$ = new Literal(TIPO_DATO.BOOL, true, _$[$0].first_line, _$[$0].first_column); 
break;
case 47: this.$ = new Literal(TIPO_DATO.BOOL, false, _$[$0].first_line, _$[$0].first_column); 
break;
case 48: this.$ = new Acceso($$[$0], _$[$0].first_line, _$[$0].first_column); 
break;
case 49: this.$ = $$[$0-1]; 
break;
}
},
table: [{2:[1,10],3:1,4:2,6:3,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:[1,11],25:[1,12],26:[1,13]},{1:[3]},{2:[1,10],5:[1,14],6:15,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:[1,11],25:[1,12],26:[1,13]},{2:[2,3],5:[2,3],7:[2,3],12:[2,3],13:[2,3],21:[2,3],23:[2,3],25:[2,3],26:[2,3]},{8:[1,16]},{13:[1,17]},{15:[1,19],17:[1,18]},{2:[2,9],5:[2,9],7:[2,9],12:[2,9],13:[2,9],21:[2,9],23:[2,9],25:[2,9],26:[2,9]},{2:[2,10],5:[2,10],7:[2,10],12:[2,10],13:[2,10],21:[2,10],23:[2,10],25:[2,10],26:[2,10]},{2:[2,11],5:[2,11],7:[2,11],12:[2,11],13:[2,11],21:[2,11],23:[2,11],25:[2,11],26:[2,11]},{2:[2,12],5:[2,12],7:[2,12],12:[2,12],13:[2,12],21:[2,12],23:[2,12],25:[2,12],26:[2,12]},{8:[1,20]},{8:[1,21]},{8:[1,22]},{1:[2,1]},{2:[2,2],5:[2,2],7:[2,2],12:[2,2],13:[2,2],21:[2,2],23:[2,2],25:[2,2],26:[2,2]},{8:[1,33],9:23,13:[1,32],16:24,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{14:34,29:[1,35],30:[1,36],31:[1,37],32:[1,38]},{8:[1,33],13:[1,32],16:39,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:40,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:41,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:42,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{12:[1,44],13:[1,45],27:43},{10:[1,46],33:[1,47]},{10:[2,27],33:[2,27],34:[1,48],35:[1,49],37:[1,50],38:[1,51],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{8:[1,33],13:[1,32],16:61,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:62,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{10:[2,43],11:[2,43],33:[2,43],34:[2,43],35:[2,43],37:[2,43],38:[2,43],39:[2,43],40:[2,43],41:[2,43],42:[2,43],43:[2,43],44:[2,43],45:[2,43],46:[2,43],47:[2,43]},{10:[2,44],11:[2,44],33:[2,44],34:[2,44],35:[2,44],37:[2,44],38:[2,44],39:[2,44],40:[2,44],41:[2,44],42:[2,44],43:[2,44],44:[2,44],45:[2,44],46:[2,44],47:[2,44]},{10:[2,45],11:[2,45],33:[2,45],34:[2,45],35:[2,45],37:[2,45],38:[2,45],39:[2,45],40:[2,45],41:[2,45],42:[2,45],43:[2,45],44:[2,45],45:[2,45],46:[2,45],47:[2,45]},{10:[2,46],11:[2,46],33:[2,46],34:[2,46],35:[2,46],37:[2,46],38:[2,46],39:[2,46],40:[2,46],41:[2,46],42:[2,46],43:[2,46],44:[2,46],45:[2,46],46:[2,46],47:[2,46]},{10:[2,47],11:[2,47],33:[2,47],34:[2,47],35:[2,47],37:[2,47],38:[2,47],39:[2,47],40:[2,47],41:[2,47],42:[2,47],43:[2,47],44:[2,47],45:[2,47],46:[2,47],47:[2,47]},{10:[2,48],11:[2,48],33:[2,48],34:[2,48],35:[2,48],37:[2,48],38:[2,48],39:[2,48],40:[2,48],41:[2,48],42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],47:[2,48]},{8:[1,33],13:[1,32],16:63,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{11:[1,65],15:[1,64]},{11:[2,22],15:[2,22]},{11:[2,23],15:[2,23]},{11:[2,24],15:[2,24]},{11:[2,25],15:[2,25]},{11:[1,66],34:[1,48],35:[1,49],37:[1,50],38:[1,51],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{11:[1,67],34:[1,48],35:[1,49],37:[1,50],38:[1,51],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{10:[1,68],34:[1,48],35:[1,49],37:[1,50],38:[1,51],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{10:[1,69],34:[1,48],35:[1,49],37:[1,50],38:[1,51],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{11:[1,70]},{13:[1,71]},{15:[1,73],17:[1,72]},{11:[1,74]},{8:[1,33],13:[1,32],16:75,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:76,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:77,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:78,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:79,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:80,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:81,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:82,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:83,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:84,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:85,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:86,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:87,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:88,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{10:[2,30],11:[2,30],33:[2,30],34:[2,30],35:[2,30],37:[1,50],38:[1,51],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{10:[2,42],11:[2,42],33:[2,42],34:[2,42],35:[2,42],37:[2,42],38:[2,42],39:[2,42],40:[2,42],41:[2,42],42:[2,42],43:[2,42],44:[2,42],45:[2,42],46:[2,42],47:[2,42]},{10:[1,89],34:[1,48],35:[1,49],37:[1,50],38:[1,51],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{8:[1,33],13:[1,32],16:90,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{2:[2,6],5:[2,6],7:[2,6],12:[2,6],13:[2,6],21:[2,6],23:[2,6],25:[2,6],26:[2,6]},{2:[2,7],5:[2,7],7:[2,7],12:[2,7],13:[2,7],21:[2,7],23:[2,7],25:[2,7],26:[2,7]},{2:[2,8],5:[2,8],7:[2,8],12:[2,8],13:[2,8],21:[2,8],23:[2,8],25:[2,8],26:[2,8]},{22:[1,91]},{22:[1,92]},{8:[1,33],13:[1,32],16:93,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{14:94,29:[1,35],30:[1,36],31:[1,37],32:[1,38]},{8:[1,33],13:[1,32],16:95,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{8:[1,33],13:[1,32],16:96,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{2:[2,4],5:[2,4],7:[2,4],12:[2,4],13:[2,4],21:[2,4],23:[2,4],25:[2,4],26:[2,4]},{10:[2,26],33:[2,26],34:[1,48],35:[1,49],37:[1,50],38:[1,51],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{10:[2,28],11:[2,28],33:[2,28],34:[2,28],35:[2,28],37:[1,50],38:[1,51],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{10:[2,29],11:[2,29],33:[2,29],34:[1,48],35:[2,29],37:[1,50],38:[1,51],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{10:[2,31],11:[2,31],33:[2,31],34:[2,31],35:[2,31],37:[2,31],38:[2,31],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{10:[2,32],11:[2,32],33:[2,32],34:[2,32],35:[2,32],37:[2,32],38:[2,32],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{10:[2,33],11:[2,33],33:[2,33],34:[2,33],35:[2,33],37:[2,33],38:[2,33],39:[2,33],40:[2,33],41:[2,33],42:[2,33],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{10:[2,34],11:[2,34],33:[2,34],34:[2,34],35:[2,34],37:[2,34],38:[2,34],39:[2,34],40:[2,34],41:[2,34],42:[2,34],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{10:[2,35],11:[2,35],33:[2,35],34:[2,35],35:[2,35],37:[2,35],38:[2,35],39:[2,35],40:[2,35],41:[2,35],42:[2,35],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{10:[2,36],11:[2,36],33:[2,36],34:[2,36],35:[2,36],37:[2,36],38:[2,36],39:[2,36],40:[2,36],41:[2,36],42:[2,36],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{10:[2,37],11:[2,37],33:[2,37],34:[2,37],35:[2,37],37:[2,37],38:[2,37],39:[2,37],40:[2,37],41:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[1,58],46:[1,59],47:[1,60]},{10:[2,38],11:[2,38],33:[2,38],34:[2,38],35:[2,38],37:[2,38],38:[2,38],39:[2,38],40:[2,38],41:[2,38],42:[2,38],43:[2,38],44:[2,38],45:[1,58],46:[1,59],47:[1,60]},{10:[2,39],11:[2,39],33:[2,39],34:[2,39],35:[2,39],37:[2,39],38:[2,39],39:[2,39],40:[2,39],41:[2,39],42:[2,39],43:[2,39],44:[2,39],45:[2,39],46:[2,39],47:[2,39]},{10:[2,40],11:[2,40],33:[2,40],34:[2,40],35:[2,40],37:[2,40],38:[2,40],39:[2,40],40:[2,40],41:[2,40],42:[2,40],43:[2,40],44:[2,40],45:[2,40],46:[2,40],47:[2,40]},{10:[2,41],11:[2,41],33:[2,41],34:[2,41],35:[2,41],37:[2,41],38:[2,41],39:[2,41],40:[2,41],41:[2,41],42:[2,41],43:[2,41],44:[2,41],45:[2,41],46:[2,41],47:[2,41]},{10:[2,49],11:[2,49],33:[2,49],34:[2,49],35:[2,49],37:[2,49],38:[2,49],39:[2,49],40:[2,49],41:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],47:[2,49]},{11:[1,97],34:[1,48],35:[1,49],37:[1,50],38:[1,51],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{2:[1,10],4:98,6:3,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:[1,11],25:[1,12],26:[1,13]},{2:[1,10],4:99,6:3,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:[1,11],25:[1,12],26:[1,13]},{11:[1,100],34:[1,48],35:[1,49],37:[1,50],38:[1,51],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{15:[1,101]},{11:[2,19],34:[1,48],35:[1,49],37:[1,50],38:[1,51],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{11:[2,20],34:[1,48],35:[1,49],37:[1,50],38:[1,51],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{2:[2,5],5:[2,5],7:[2,5],12:[2,5],13:[2,5],21:[2,5],23:[2,5],25:[2,5],26:[2,5]},{2:[1,10],6:15,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:[1,11],23:[1,102],25:[1,12],26:[1,13]},{2:[1,10],6:15,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:[1,11],23:[1,103],25:[1,12],26:[1,13]},{13:[1,105],28:104},{8:[1,33],13:[1,32],16:106,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{2:[2,13],5:[2,13],7:[2,13],12:[2,13],13:[2,13],21:[2,13],23:[2,13],24:[1,107],25:[2,13],26:[2,13]},{2:[2,16],5:[2,16],7:[2,16],12:[2,16],13:[2,16],21:[2,16],23:[2,16],25:[2,16],26:[2,16]},{10:[1,108]},{15:[1,109]},{11:[2,18],34:[1,48],35:[1,49],37:[1,50],38:[1,51],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{18:111,21:[1,11],22:[1,110]},{22:[1,112]},{8:[1,33],13:[1,32],16:113,36:[1,25],44:[1,26],48:[1,27],49:[1,28],50:[1,29],51:[1,30],52:[1,31]},{2:[1,10],4:114,6:3,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:[1,11],25:[1,12],26:[1,13]},{2:[2,15],5:[2,15],7:[2,15],12:[2,15],13:[2,15],21:[2,15],23:[2,15],25:[2,15],26:[2,15]},{2:[1,10],4:115,6:3,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:[1,11],25:[1,12],26:[1,13]},{10:[2,21],34:[1,48],35:[1,49],37:[1,50],38:[1,51],39:[1,52],40:[1,53],41:[1,54],42:[1,55],43:[1,56],44:[1,57],45:[1,58],46:[1,59],47:[1,60]},{2:[1,10],6:15,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:[1,11],23:[1,116],25:[1,12],26:[1,13]},{2:[1,10],6:15,7:[1,4],12:[1,5],13:[1,6],18:7,19:8,20:9,21:[1,11],23:[1,117],25:[1,12],26:[1,13]},{2:[2,14],5:[2,14],7:[2,14],12:[2,14],13:[2,14],21:[2,14],23:[2,14],25:[2,14],26:[2,14]},{2:[2,17],5:[2,17],7:[2,17],12:[2,17],13:[2,17],21:[2,17],23:[2,17],25:[2,17],26:[2,17]}],
defaultActions: {14:[2,1]},
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
case 3:return 29;
break;
case 4:return 30;
break;
case 5:return 31;
break;
case 6:return 32;
break;
case 7:return 12;
break;
case 8:return 7;
break;
case 9:return 21;
break;
case 10:return 24;
break;
case 11:return 25;
break;
case 12:return 26;
break;
case 13:return 51;
break;
case 14:return 52;
break;
case 15:return 37;
break;
case 16:return 38;
break;
case 17:return 40;
break;
case 18:return 42;
break;
case 19:return 39;
break;
case 20:return 41;
break;
case 21:return 17;
break;
case 22:return 15;
break;
case 23:return 34;
break;
case 24:return 35;
break;
case 25:return 36;
break;
case 26:return 43;
break;
case 27:return 44;
break;
case 28:return 45;
break;
case 29:return 46;
break;
case 30:return 47;
break;
case 31:return 8;
break;
case 32:return 10;
break;
case 33:return 22;
break;
case 34:return 23;
break;
case 35:return 11;
break;
case 36:return 33;
break;
case 37: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 50; 
break;
case 38:return 49;
break;
case 39:return 48;
break;
case 40:return 13;
break;
case 41:return 5;
break;
case 42: console.error('Error léxico: ' + yy_.yytext); 
break;
}
};
lexer.rules = [/^(?:\s+)/,/^(?:\/\/.*)/,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/,/^(?:int\b)/,/^(?:float64\b)/,/^(?:string\b)/,/^(?:bool\b)/,/^(?:var\b)/,/^(?:fmt\.Println\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:while\b)/,/^(?:for\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:==)/,/^(?:!=)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?::=)/,/^(?:=)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:!)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:;)/,/^(?:,)/,/^(?:"[^\"]*")/,/^(?:[0-9]+(\.[0-9]+)\b)/,/^(?:[0-9]+\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],"inclusive":true}};
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