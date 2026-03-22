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
";"                         return 'PT_COMA';
","                         return 'COMA';

\"[^\"]*\"                  { yytext = yytext.substr(1, yyleng-2); return 'CADENA'; }
[0-9]+("."[0-9]+)\b         return 'DECIMAL';
[0-9]+\b                    return 'ENTERO';
[a-zA-Z_][a-zA-Z0-9_]* return 'IDENTIFICADOR';

<<EOF>>                     return 'EOF';
.                           { console.error('Error léxico: ' + yytext); }

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
    : R_PRINT PAR_IZQ expresiones PAR_DER PT_COMA 
      { $$ = new Print($3, @1.first_line, @1.first_column); }
    | R_VAR IDENTIFICADOR tipo_dato IGUAL expresion PT_COMA
      { $$ = new Declaracion($3, $2, $5, @1.first_line, @1.first_column); }
    | R_VAR IDENTIFICADOR tipo_dato PT_COMA
      { $$ = new Declaracion($3, $2, null, @1.first_line, @1.first_column); }
    | IDENTIFICADOR DOS_PUNTOS_IGUAL expresion PT_COMA
      { $$ = new Declaracion(null, $1, $3, @1.first_line, @1.first_column); }
    | IDENTIFICADOR IGUAL expresion PT_COMA
      { $$ = new Asignacion($1, $3, @1.first_line, @1.first_column); }
    | instruccion_if { $$ = $1; }
    | instruccion_while { $$ = $1; }
    | instruccion_for { $$ = $1; }
    | error { /* Manejo de errores */ }
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

tipo_dato
    : R_INT     { $$ = TIPO_DATO.INT; }
    | R_FLOAT   { $$ = TIPO_DATO.FLOAT; }
    | R_STRING  { $$ = TIPO_DATO.STRING; }
    | R_BOOL    { $$ = TIPO_DATO.BOOL; }
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
    
    /* Literales y Accesos */
    | ENTERO                        { $$ = new Literal(TIPO_DATO.INT, $1, @1.first_line, @1.first_column); }
    | DECIMAL                       { $$ = new Literal(TIPO_DATO.FLOAT, $1, @1.first_line, @1.first_column); }
    | CADENA                        { $$ = new Literal(TIPO_DATO.STRING, $1, @1.first_line, @1.first_column); }
    | TRUE                          { $$ = new Literal(TIPO_DATO.BOOL, true, @1.first_line, @1.first_column); }
    | FALSE                         { $$ = new Literal(TIPO_DATO.BOOL, false, @1.first_line, @1.first_column); }
    | IDENTIFICADOR                 { $$ = new Acceso($1, @1.first_line, @1.first_column); }
    | PAR_IZQ expresion PAR_DER     { $$ = $2; }
    ;