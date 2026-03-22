%{
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
    const Funcion = require('../models/funcion');
    const Llamada = require('../models/llamada');
    const Return = require('../models/return');
    const DefinicionStruct = require('../models/definicionStruct');
    const InstanciaStruct = require('../models/instanciaStruct');
    const AccesoStruct = require('../models/accesoStruct');
    const AsignacionStruct = require('../models/asignacionStruct');
    const Excepcion = require('../models/excepcion');
    const { TIPO_DATO } = require('../models/tipo');
%}

/* definición lexica */
%lex
%options case-sensitive

%%

\s+                         /* ignoro espacios en blanco */
"//".* /* comentario una linea */
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]  /* multilinea */

"int"                       return 'R_INT';
"float64"                   return 'R_FLOAT';
"string"                    return 'R_STRING';
"bool"                      return 'R_BOOL';
"var"                       return 'R_VAR';
"fmt.Println"               return 'R_PRINT';
"if"                        return 'R_IF';
"else"                      return 'R_ELSE';
"while"                     return 'R_WHILE';
"for"                       return 'R_FOR';
"switch"                    return 'R_SWITCH';
"case"                      return 'R_CASE';
"default"                   return 'R_DEFAULT';
"break"                     return 'R_BREAK';
"continue"                  return 'R_CONTINUE';
"func"                      return 'R_FUNC';
"return"                    return 'R_RETURN';
"type"                      return 'R_TYPE';
"struct"                    return 'R_STRUCT';
"true"                      return 'TRUE';
"false"                     return 'FALSE';

"=="                        return 'IGUAL_IGUAL';
"!="                        return 'NO_IGUAL';
"<="                        return 'MENOR_IGUAL';
">="                        return 'MAYOR_IGUAL';
"<"                         return 'MENOR';
">"                         return 'MAYOR';
":="                        return 'DOS_PUNTOS_IGUAL';
"="                         return 'IGUAL';

"&&"                        return 'AND';
"||"                        return 'OR';
"!"                         return 'NOT';

"+"                         return 'MAS';
"-"                         return 'MENOS';
"*"                         return 'MULT';
"/"                         return 'DIV';
"%"                         return 'MOD';

"("                         return 'PAR_IZQ';
")"                         return 'PAR_DER';
"{"                         return 'LLAVE_IZQ';
"}"                         return 'LLAVE_DER';
"["                         return 'CORCHETE_IZQ';
"]"                         return 'CORCHETE_DER';
"."                         return 'PUNTO';
":"                         return 'DOS_PUNTOS';
";"                         return 'PT_COMA';
","                         return 'COMA';

\"[^\"]*\"                  { yytext = yytext.substr(1, yyleng-2); return 'CADENA'; }
[0-9]+("."[0-9]+)\b         return 'DECIMAL';
[0-9]+\b                    return 'ENTERO';
[a-zA-Z_][a-zA-Z0-9_]* return 'IDENTIFICADOR';

<<EOF>>                     return 'EOF';
.                           { yy.errores.push(new Excepcion("Léxico", "Carácter no válido: " + yytext, yylloc.first_line, yylloc.first_column)); }

/lex

/* Asociación y Precedencia */
%left 'OR'
%left 'AND'
%right 'NOT'
%left 'IGUAL_IGUAL' 'NO_IGUAL'
%left 'MENOR' 'MENOR_IGUAL' 'MAYOR' 'MAYOR_IGUAL'
%left 'MAS' 'MENOS'
%left 'MULT' 'DIV' 'MOD'
%right 'UNARIO'
%left 'PUNTO'

%start inicio

%% /* Reglas Sintácticas */

inicio
    : instrucciones EOF { return $1; }
    ;

instrucciones
    : instrucciones instruccion { $1.push($2); $$ = $1; }
    | instruccion              { $$ = [$1]; }
    ;

instruccion
    : R_PRINT PAR_IZQ lista_valores_opt PAR_DER PT_COMA 
      { $$ = new Print($3, @1.first_line, @1.first_column); }
    | R_VAR IDENTIFICADOR tipo_dato IGUAL expresion PT_COMA
      { $$ = new Declaracion($3, $2, $5, @1.first_line, @1.first_column); }
    | R_VAR IDENTIFICADOR IDENTIFICADOR IGUAL expresion PT_COMA
      { $$ = new Declaracion('STRUCT', $2, $5, @1.first_line, @1.first_column); }
    | R_VAR IDENTIFICADOR tipo_dato PT_COMA
      { $$ = new Declaracion($3, $2, null, @1.first_line, @1.first_column); }
    | IDENTIFICADOR DOS_PUNTOS_IGUAL expresion PT_COMA
      { $$ = new Declaracion(null, $1, $3, @1.first_line, @1.first_column); }
    | IDENTIFICADOR IGUAL expresion PT_COMA
      { $$ = new Asignacion($1, $3, @1.first_line, @1.first_column); }
    | IDENTIFICADOR PUNTO IDENTIFICADOR IGUAL expresion PT_COMA
      { $$ = new AsignacionStruct($1, $3, $5, @1.first_line, @1.first_column); }
    | IDENTIFICADOR CORCHETE_IZQ expresion CORCHETE_DER IGUAL expresion PT_COMA
      { $$ = new AsignacionArreglo($1, $3, $6, @1.first_line, @1.first_column); }
    | R_TYPE IDENTIFICADOR R_STRUCT LLAVE_IZQ lista_atributos LLAVE_DER PT_COMA
      { $$ = new DefinicionStruct($2, $5, @1.first_line, @1.first_column); }
    | instruccion_if { $$ = $1; }
    | instruccion_while { $$ = $1; }
    | instruccion_for { $$ = $1; }
    | instruccion_switch { $$ = $1; }
    | instruccion_funcion { $$ = $1; }
    | R_RETURN expresion PT_COMA { $$ = new Return($2, @1.first_line, @1.first_column); }
    | R_RETURN PT_COMA { $$ = new Return(null, @1.first_line, @1.first_column); }
    | R_BREAK PT_COMA { $$ = new Break(@1.first_line, @1.first_column); }
    | R_CONTINUE PT_COMA { $$ = new Continue(@1.first_line, @1.first_column); }
    | IDENTIFICADOR PAR_IZQ lista_valores_opt PAR_DER PT_COMA { $$ = new Llamada($1, $3, @1.first_line, @1.first_column); }
    | error PT_COMA { yy.errores.push(new Excepcion("Sintáctico", "Error de sintaxis en: " + yytext, this._$.first_line, this._$.first_column)); $$ = null; }
    ;

lista_atributos
    : lista_atributos atributo PT_COMA { $1.push($2); $$ = $1; }
    | atributo PT_COMA                 { $$ = [$1]; }
    ;

atributo
    : IDENTIFICADOR tipo_dato { $$ = { id: $1, tipo: $2 }; }
    ;

instruccion_funcion
    : R_FUNC IDENTIFICADOR PAR_IZQ parametros_opt PAR_DER tipo_dato LLAVE_IZQ instrucciones LLAVE_DER
      { $$ = new Funcion($2, $4, $6, $8, @1.first_line, @1.first_column); }
    | R_FUNC IDENTIFICADOR PAR_IZQ parametros_opt PAR_DER LLAVE_IZQ instrucciones LLAVE_DER
      { $$ = new Funcion($2, $4, TIPO_DATO.VOID, $7, @1.first_line, @1.first_column); }
    ;

parametros_opt
    : parametros { $$ = $1; }
    | /* vacio */ { $$ = []; }
    ;

parametros
    : parametros COMA parametro { $1.push($3); $$ = $1; }
    | parametro                 { $$ = [$1]; }
    ;

parametro
    : IDENTIFICADOR tipo_dato   { $$ = { id: $1, tipo: $2 }; }
    ;

instruccion_if
    : R_IF PAR_IZQ expresion PAR_DER LLAVE_IZQ instrucciones LLAVE_DER
      { $$ = new SentenciaIf($3, $6, null, @1.first_line, @1.first_column); }
    | R_IF PAR_IZQ expresion PAR_DER LLAVE_IZQ instrucciones LLAVE_DER R_ELSE LLAVE_IZQ instrucciones LLAVE_DER
      { $$ = new SentenciaIf($3, $6, $10, @1.first_line, @1.first_column); }
    | R_IF PAR_IZQ expresion PAR_DER LLAVE_IZQ instrucciones LLAVE_DER R_ELSE instruccion_if
      { $$ = new SentenciaIf($3, $6, $9, @1.first_line, @1.first_column); }
    ;

instruccion_while
    : R_WHILE PAR_IZQ expresion PAR_DER LLAVE_IZQ instrucciones LLAVE_DER
      { $$ = new SentenciaWhile($3, $6, @1.first_line, @1.first_column); }
    ;

instruccion_for
    : R_FOR PAR_IZQ init_for PT_COMA expresion PT_COMA actualizacion_for PAR_DER LLAVE_IZQ instrucciones LLAVE_DER
      { $$ = new SentenciaFor($3, $5, $7, $10, @1.first_line, @1.first_column); }
    ;

init_for
    : R_VAR IDENTIFICADOR tipo_dato IGUAL expresion 
      { $$ = new Declaracion($3, $2, $5, @1.first_line, @1.first_column); }
    | IDENTIFICADOR DOS_PUNTOS_IGUAL expresion 
      { $$ = new Declaracion(null, $1, $3, @1.first_line, @1.first_column); }
    | IDENTIFICADOR IGUAL expresion 
      { $$ = new Asignacion($1, $3, @1.first_line, @1.first_column); }
    ;

actualizacion_for
    : IDENTIFICADOR IGUAL expresion 
      { $$ = new Asignacion($1, $3, @1.first_line, @1.first_column); }
    ;

instruccion_switch
    : R_SWITCH PAR_IZQ expresion PAR_DER LLAVE_IZQ casos LLAVE_DER
      { $$ = new SentenciaSwitch($3, $6, @1.first_line, @1.first_column); }
    ;

casos
    : casos caso { $1.push($2); $$ = $1; }
    | caso       { $$ = [$1]; }
    ;

caso
    : R_CASE expresion DOS_PUNTOS instrucciones
      { $$ = new Caso($2, $4, @1.first_line, @1.first_column); }
    | R_DEFAULT DOS_PUNTOS instrucciones
      { $$ = new Caso(null, $3, @1.first_line, @1.first_column); }
    ;

tipo_dato
    : R_INT     { $$ = TIPO_DATO.INT; }
    | R_FLOAT   { $$ = TIPO_DATO.FLOAT; }
    | R_STRING  { $$ = TIPO_DATO.STRING; }
    | R_BOOL    { $$ = TIPO_DATO.BOOL; }
    | CORCHETE_IZQ ENTERO CORCHETE_DER tipo_dato { $$ = TIPO_DATO.ARREGLO; }
    | CORCHETE_IZQ CORCHETE_DER tipo_dato { $$ = TIPO_DATO.ARREGLO; }
    ;

lista_valores_opt
    : expresiones { $$ = $1; }
    | /* vacio */ { $$ = []; }
    ;

expresiones
    : expresiones COMA expresion { $1.push($3); $$ = $1; }
    | expresion                 { $$ = [$1]; }
    ;

expresion
    /* Operaciones Lógicas */
    : expresion AND expresion       { $$ = new Logica($1, '&&', $3, @1.first_line, @1.first_column); }
    | expresion OR expresion        { $$ = new Logica($1, '||', $3, @1.first_line, @1.first_column); }
    | NOT expresion                 { $$ = new Logica(null, '!', $2, @1.first_line, @1.first_column); }
    
    /* Operaciones Relacionales */
    | expresion IGUAL_IGUAL expresion   { $$ = new Relacional($1, '==', $3, @1.first_line, @1.first_column); }
    | expresion NO_IGUAL expresion      { $$ = new Relacional($1, '!=', $3, @1.first_line, @1.first_column); }
    | expresion MENOR expresion         { $$ = new Relacional($1, '<', $3, @1.first_line, @1.first_column); }
    | expresion MENOR_IGUAL expresion   { $$ = new Relacional($1, '<=', $3, @1.first_line, @1.first_column); }
    | expresion MAYOR expresion         { $$ = new Relacional($1, '>', $3, @1.first_line, @1.first_column); }
    | expresion MAYOR_IGUAL expresion   { $$ = new Relacional($1, '>=', $3, @1.first_line, @1.first_column); }
    
    /* Operaciones Aritméticas */
    | expresion MAS expresion       { $$ = new Aritmetica($1, '+', $3, @1.first_line, @1.first_column); }
    | expresion MENOS expresion     { $$ = new Aritmetica($1, '-', $3, @1.first_line, @1.first_column); }
    | expresion MULT expresion      { $$ = new Aritmetica($1, '*', $3, @1.first_line, @1.first_column); }
    | expresion DIV expresion       { $$ = new Aritmetica($1, '/', $3, @1.first_line, @1.first_column); }
    | expresion MOD expresion       { $$ = new Aritmetica($1, '%', $3, @1.first_line, @1.first_column); }
    | MENOS expresion %prec UNARIO  { $$ = new Aritmetica(null, '-', $2, @1.first_line, @1.first_column); }
    
    /* Literales, Arreglos y Accesos */
    | ENTERO                        { $$ = new Literal(TIPO_DATO.INT, $1, @1.first_line, @1.first_column); }
    | DECIMAL                       { $$ = new Literal(TIPO_DATO.FLOAT, $1, @1.first_line, @1.first_column); }
    | CADENA                        { $$ = new Literal(TIPO_DATO.STRING, $1, @1.first_line, @1.first_column); }
    | TRUE                          { $$ = new Literal(TIPO_DATO.BOOL, true, @1.first_line, @1.first_column); }
    | FALSE                         { $$ = new Literal(TIPO_DATO.BOOL, false, @1.first_line, @1.first_column); }
    | IDENTIFICADOR                 { $$ = new Acceso($1, @1.first_line, @1.first_column); }
    | IDENTIFICADOR PUNTO IDENTIFICADOR { $$ = new AccesoStruct($1, $3, @1.first_line, @1.first_column); }
    | IDENTIFICADOR CORCHETE_IZQ expresion CORCHETE_DER { $$ = new AccesoArreglo($1, $3, @1.first_line, @1.first_column); }
    | IDENTIFICADOR LLAVE_IZQ lista_valores_struct LLAVE_DER { $$ = new InstanciaStruct($1, $3, @1.first_line, @1.first_column); }
    | CORCHETE_IZQ lista_valores_opt CORCHETE_DER { $$ = new Arreglo($2, @1.first_line, @1.first_column); }
    | IDENTIFICADOR PAR_IZQ lista_valores_opt PAR_DER { $$ = new Llamada($1, $3, @1.first_line, @1.first_column); }
    | PAR_IZQ expresion PAR_DER     { $$ = $2; }
    ;

lista_valores_struct
    : lista_valores_struct COMA valor_struct { $1.push($3); $$ = $1; }
    | valor_struct                           { $$ = [$1]; }
    ;

valor_struct
    : IDENTIFICADOR DOS_PUNTOS expresion { $$ = { id: $1, expresion: $3 }; }
    ;