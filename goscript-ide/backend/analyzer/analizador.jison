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
    const AsignacionCompuesta = require('../models/asignacionCompuesta');
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
    const Embebida = require('../models/embebida');
    const NativasSlice = require('../models/nativasSlice');
    const SentenciaForRange = require('../models/sentenciaForRange');
    const Bloque = require('../models/bloque');
%}

/* definición lexica */
%lex
%options case-sensitive

%%

[ \t\r]+                    /* ignoro espacios en blanco */
\n+                         /* ignoro saltos de línea */
"//".* /* comentario una linea */
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]  /* multilinea */

"int"                       return 'R_INT';
"float64"                   return 'R_FLOAT';
"string"                    return 'R_STRING';
"bool"                      return 'R_BOOL';
"rune"                      return 'R_RUNE';
"var"                       return 'R_VAR';
"fmt.Println"               return 'R_PRINT';
"if"                        return 'R_IF';
"else"                      return 'R_ELSE';
"while"                     return 'R_WHILE';
"for"                       return 'R_FOR';
"range"                     return 'R_RANGE';
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
"+="                        return 'MAS_IGUAL';
"-="                        return 'MENOS_IGUAL';
"="                         return 'IGUAL';

"++"                        return 'MAS_MAS';
"--"                        return 'MENOS_MENOS';

"&&"                        return 'AND';
"||"                        return 'OR';
"!"                         return 'NOT';

"strconv.Atoi"              return 'R_ATOI';
"strconv.ParseFloat"        return 'R_PARSEFLOAT';
"reflect.TypeOf"            return 'R_TYPEOF';
"len"                       return 'R_LEN';
"append"                    return 'R_APPEND';
"slices.Index"              return 'R_SLICES_INDEX';
"strings.Join"              return 'R_STRINGS_JOIN';

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
\'([^\'\\]|\\.)\'           { yytext = yytext.substr(1, yyleng-2); return 'CARACTER'; }
[0-9]+("."[0-9]+)\b         return 'DECIMAL';
[0-9]+\b                    return 'ENTERO';
[a-zA-Z_][a-zA-Z0-9_]* return 'IDENTIFICADOR';

<<EOF>>                     return 'EOF';
.                           { 
                                if (!yy.errores) yy.errores = [];
                                yy.errores.push(new Excepcion("Léxico", "Carácter no válido: " + yytext, this.yylloc.first_line, this.yylloc.first_column + 1));
                                return this.lex();
                            }

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
    : instrucciones instruccion { if ($2 != null) $1.push($2); $$ = $1; }
    | instruccion              { $$ = $1 != null ? [$1] : []; }
    ;

pt_coma_opcional
    : PT_COMA
    | /* epsilon */
    ;

instruccion
    : R_PRINT PAR_IZQ lista_valores_opt PAR_DER pt_coma_opcional
      { $$ = new Print($3, @1.first_line, @1.first_column); }
    | R_VAR IDENTIFICADOR tipo_dato IGUAL valor_asignable pt_coma_opcional
      { $$ = new Declaracion($3, $2, $5, @1.first_line, @1.first_column); }
    | R_VAR IDENTIFICADOR tipo_dato pt_coma_opcional
      { $$ = new Declaracion($3, $2, null, @1.first_line, @1.first_column); }
    | IDENTIFICADOR DOS_PUNTOS_IGUAL valor_asignable pt_coma_opcional
      { $$ = new Declaracion(null, $1, $3, @1.first_line, @1.first_column); }
    | IDENTIFICADOR IGUAL valor_asignable pt_coma_opcional
      { $$ = new Asignacion($1, $3, @1.first_line, @1.first_column); }
    | IDENTIFICADOR MAS_IGUAL valor_asignable pt_coma_opcional
      { $$ = new AsignacionCompuesta($1, $3, '+', @1.first_line, @1.first_column); }
    | IDENTIFICADOR MENOS_IGUAL valor_asignable pt_coma_opcional
      { $$ = new AsignacionCompuesta($1, $3, '-', @1.first_line, @1.first_column); }
    | IDENTIFICADOR MAS_MAS pt_coma_opcional
      { $$ = new AsignacionCompuesta($1, new Literal(TIPO_DATO.INT, 1, @1.first_line, @1.first_column), '+', @1.first_line, @1.first_column); }
    | IDENTIFICADOR MENOS_MENOS pt_coma_opcional
      { $$ = new AsignacionCompuesta($1, new Literal(TIPO_DATO.INT, 1, @1.first_line, @1.first_column), '-', @1.first_line, @1.first_column); }
    | IDENTIFICADOR PUNTO IDENTIFICADOR IGUAL valor_asignable pt_coma_opcional
      { $$ = new AsignacionStruct($1, $3, $5, @1.first_line, @1.first_column); }
    | IDENTIFICADOR PUNTO IDENTIFICADOR MAS_IGUAL valor_asignable pt_coma_opcional
      { $$ = new AsignacionStruct($1, $3, new Aritmetica(new AccesoStruct($1, $3, @1.first_line, @1.first_column), '+', $5, @1.first_line, @1.first_column), @1.first_line, @1.first_column); }
    | IDENTIFICADOR PUNTO IDENTIFICADOR MENOS_IGUAL valor_asignable pt_coma_opcional
      { $$ = new AsignacionStruct($1, $3, new Aritmetica(new AccesoStruct($1, $3, @1.first_line, @1.first_column), '-', $5, @1.first_line, @1.first_column), @1.first_line, @1.first_column); }
    | IDENTIFICADOR lista_indices MAS_IGUAL valor_asignable pt_coma_opcional
      { $$ = new AsignacionArreglo($1, $2, new Aritmetica(new AccesoArreglo($1, $2, @1.first_line, @1.first_column), '+', $4, @1.first_line, @1.first_column), @1.first_line, @1.first_column); }
    | IDENTIFICADOR lista_indices MENOS_IGUAL valor_asignable pt_coma_opcional
      { $$ = new AsignacionArreglo($1, $2, new Aritmetica(new AccesoArreglo($1, $2, @1.first_line, @1.first_column), '-', $4, @1.first_line, @1.first_column), @1.first_line, @1.first_column); }
    | IDENTIFICADOR lista_indices IGUAL valor_asignable pt_coma_opcional
      { $$ = new AsignacionArreglo($1, $2, $4, @1.first_line, @1.first_column); }
    | R_TYPE IDENTIFICADOR R_STRUCT LLAVE_IZQ lista_atributos LLAVE_DER pt_coma_opcional
      { $$ = new DefinicionStruct($2, $5, @1.first_line, @1.first_column); }
    | instruccion_if { $$ = $1; }
    | instruccion_while { $$ = $1; }
    | instruccion_for { $$ = $1; }
    | instruccion_switch { $$ = $1; }
    | instruccion_funcion { $$ = $1; }
    | R_RETURN valor_asignable pt_coma_opcional { $$ = new Return($2, @1.first_line, @1.first_column); }
    | R_RETURN pt_coma_opcional { $$ = new Return(null, @1.first_line, @1.first_column); }
    | R_BREAK pt_coma_opcional { $$ = new Break(@1.first_line, @1.first_column); }
    | R_CONTINUE pt_coma_opcional { $$ = new Continue(@1.first_line, @1.first_column); }
    | IDENTIFICADOR PAR_IZQ lista_valores_opt PAR_DER pt_coma_opcional { $$ = new Llamada($1, $3, @1.first_line, @1.first_column); }
    | IDENTIFICADOR PAR_IZQ lista_valores_opt PAR_DER pt_coma_opcional { $$ = new Llamada($1, $3, @1.first_line, @1.first_column); }
    | LLAVE_IZQ instrucciones LLAVE_DER pt_coma_opcional { $$ = new Bloque($2, @1.first_line, @1.first_column); } /* <-- NUEVA REGLA */
    | error pt_coma_opcional { $$ = null; }
    ;

lista_atributos
    : lista_atributos atributo pt_coma_opcional { $1.push($2); $$ = $1; }
    | atributo pt_coma_opcional                 { $$ = [$1]; }
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
    | R_IF expresion LLAVE_IZQ instrucciones LLAVE_DER
      { $$ = new SentenciaIf($2, $4, null, @1.first_line, @1.first_column); }
    | R_IF PAR_IZQ expresion PAR_DER LLAVE_IZQ instrucciones LLAVE_DER R_ELSE LLAVE_IZQ instrucciones LLAVE_DER
      { $$ = new SentenciaIf($3, $6, $10, @1.first_line, @1.first_column); }
    | R_IF expresion LLAVE_IZQ instrucciones LLAVE_DER R_ELSE LLAVE_IZQ instrucciones LLAVE_DER
      { $$ = new SentenciaIf($2, $4, $8, @1.first_line, @1.first_column); }
    | R_IF PAR_IZQ expresion PAR_DER LLAVE_IZQ instrucciones LLAVE_DER R_ELSE instruccion_if
      { $$ = new SentenciaIf($3, $6, $9, @1.first_line, @1.first_column); }
    | R_IF expresion LLAVE_IZQ instrucciones LLAVE_DER R_ELSE instruccion_if
      { $$ = new SentenciaIf($2, $4, $7, @1.first_line, @1.first_column); }
    ;

instruccion_while
    : R_WHILE PAR_IZQ expresion PAR_DER LLAVE_IZQ instrucciones LLAVE_DER
      { $$ = new SentenciaWhile($3, $6, @1.first_line, @1.first_column); }
    | R_WHILE expresion LLAVE_IZQ instrucciones LLAVE_DER
      { $$ = new SentenciaWhile($2, $4, @1.first_line, @1.first_column); }
    ;

instruccion_for
    : R_FOR PAR_IZQ init_for PT_COMA expresion PT_COMA actualizacion_for PAR_DER LLAVE_IZQ instrucciones LLAVE_DER
      { $$ = new SentenciaFor($3, $5, $7, $10, @1.first_line, @1.first_column); }
    | R_FOR init_for PT_COMA expresion PT_COMA actualizacion_for LLAVE_IZQ instrucciones LLAVE_DER
      { $$ = new SentenciaFor($2, $4, $6, $8, @1.first_line, @1.first_column); }
    | R_FOR IDENTIFICADOR COMA IDENTIFICADOR DOS_PUNTOS_IGUAL R_RANGE acceso_range LLAVE_IZQ instrucciones LLAVE_DER
      { $$ = new SentenciaForRange($2, $4, $7, $9, @1.first_line, @1.first_column); }
    ;

acceso_range
    : IDENTIFICADOR { $$ = new Acceso($1, @1.first_line, @1.first_column); }
    | IDENTIFICADOR PUNTO IDENTIFICADOR { $$ = new AccesoStruct($1, $3, @1.first_line, @1.first_column); }
    ;

init_for
    : R_VAR IDENTIFICADOR tipo_dato IGUAL valor_asignable 
      { $$ = new Declaracion($3, $2, $5, @1.first_line, @1.first_column); }
    | IDENTIFICADOR DOS_PUNTOS_IGUAL valor_asignable 
      { $$ = new Declaracion(null, $1, $3, @1.first_line, @1.first_column); }
    | IDENTIFICADOR IGUAL valor_asignable 
      { $$ = new Asignacion($1, $3, @1.first_line, @1.first_column); }
    ;

actualizacion_for
    : IDENTIFICADOR IGUAL valor_asignable 
      { $$ = new Asignacion($1, $3, @1.first_line, @1.first_column); }
    | IDENTIFICADOR MAS_IGUAL valor_asignable 
      { $$ = new AsignacionCompuesta($1, $3, '+', @1.first_line, @1.first_column); }
    | IDENTIFICADOR MENOS_IGUAL valor_asignable 
      { $$ = new AsignacionCompuesta($1, $3, '-', @1.first_line, @1.first_column); }
    | IDENTIFICADOR MAS_MAS
      { $$ = new AsignacionCompuesta($1, new Literal(TIPO_DATO.INT, 1, @1.first_line, @1.first_column), '+', @1.first_line, @1.first_column); }
    | IDENTIFICADOR MENOS_MENOS
      { $$ = new AsignacionCompuesta($1, new Literal(TIPO_DATO.INT, 1, @1.first_line, @1.first_column), '-', @1.first_line, @1.first_column); }
    ;

instruccion_switch
    : R_SWITCH PAR_IZQ expresion PAR_DER LLAVE_IZQ casos LLAVE_DER
      { $$ = new SentenciaSwitch($3, $6, @1.first_line, @1.first_column); }
    | R_SWITCH expresion LLAVE_IZQ casos LLAVE_DER
      { $$ = new SentenciaSwitch($2, $4, @1.first_line, @1.first_column); }
    ;

casos
    : casos caso { $1.push($2); $$ = $1; }
    | caso       { $$ = [$1]; }
    ;

instrucciones_opt
    : instrucciones { $$ = $1; }
    | /* vacio */ { $$ = []; }
    ;

caso
    : R_CASE expresion DOS_PUNTOS instrucciones_opt
      { $$ = new Caso($2, $4, @1.first_line, @1.first_column); }
    | R_DEFAULT DOS_PUNTOS instrucciones_opt
      { $$ = new Caso(null, $3, @1.first_line, @1.first_column); }
    ;

tipo_dato
    : R_INT     { $$ = TIPO_DATO.INT; }
    | R_FLOAT   { $$ = TIPO_DATO.FLOAT; }
    | R_STRING  { $$ = TIPO_DATO.STRING; }
    | R_BOOL    { $$ = TIPO_DATO.BOOL; }
    | R_RUNE    { $$ = TIPO_DATO.RUNE; }
    | IDENTIFICADOR { $$ = 'STRUCT'; }
    | CORCHETE_IZQ ENTERO CORCHETE_DER tipo_dato { $$ = TIPO_DATO.ARREGLO; }
    | CORCHETE_IZQ CORCHETE_DER tipo_dato { $$ = TIPO_DATO.ARREGLO; }
    ;

valor_asignable
    : expresion { $$ = $1; }
    | IDENTIFICADOR LLAVE_IZQ lista_valores_struct LLAVE_DER { $$ = new InstanciaStruct($1, $3, @1.first_line, @1.first_column); }
    | IDENTIFICADOR LLAVE_IZQ LLAVE_DER { $$ = new InstanciaStruct($1, [], @1.first_line, @1.first_column); }
    | CORCHETE_IZQ CORCHETE_DER tipo_dato LLAVE_IZQ lista_valores_opt LLAVE_DER { $$ = new Arreglo($5, @1.first_line, @1.first_column); }
    | LLAVE_IZQ lista_valores_opt LLAVE_DER { $$ = new Arreglo($2, @1.first_line, @1.first_column); }
    ;

lista_valores_opt
    : valores_asignables { $$ = $1; }
    | /* vacio */ { $$ = []; }
    ;

valores_asignables
    : valores_asignables COMA valor_asignable { $1.push($3); $$ = $1; }
    | valor_asignable { $$ = [$1]; }
    ;

lista_indices
    : lista_indices CORCHETE_IZQ valor_asignable CORCHETE_DER { $1.push($3); $$ = $1; }
    | CORCHETE_IZQ valor_asignable CORCHETE_DER                 { $$ = [$2]; }
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
    | CARACTER                      { $$ = new Literal(TIPO_DATO.RUNE, $1, @1.first_line, @1.first_column); }
    | TRUE                          { $$ = new Literal(TIPO_DATO.BOOL, true, @1.first_line, @1.first_column); }
    | FALSE                         { $$ = new Literal(TIPO_DATO.BOOL, false, @1.first_line, @1.first_column); }
    | IDENTIFICADOR                 { $$ = new Acceso($1, @1.first_line, @1.first_column); }
    | IDENTIFICADOR PUNTO IDENTIFICADOR { $$ = new AccesoStruct($1, $3, @1.first_line, @1.first_column); }
    | IDENTIFICADOR lista_indices { $$ = new AccesoArreglo($1, $2, @1.first_line, @1.first_column); }
    | IDENTIFICADOR PAR_IZQ lista_valores_opt PAR_DER { $$ = new Llamada($1, $3, @1.first_line, @1.first_column); }
    | PAR_IZQ valor_asignable PAR_DER { $$ = $2; }

    /* Funciones Embebidas */
    | R_ATOI PAR_IZQ valor_asignable PAR_DER { $$ = new Embebida('atoi', $3, @1.first_line, @1.first_column); }
    | R_PARSEFLOAT PAR_IZQ valor_asignable PAR_DER { $$ = new Embebida('parsefloat', $3, @1.first_line, @1.first_column); }
    | R_TYPEOF PAR_IZQ valor_asignable PAR_DER PUNTO R_STRING { $$ = new Embebida('typeof', $3, @1.first_line, @1.first_column); }
    | R_TYPEOF PAR_IZQ valor_asignable PAR_DER { $$ = new Embebida('typeof', $3, @1.first_line, @1.first_column); }

    /* Nativas de Slices */
    | R_LEN PAR_IZQ lista_valores_opt PAR_DER { $$ = new NativasSlice('len', $3, @1.first_line, @1.first_column); }
    | R_APPEND PAR_IZQ lista_valores_opt PAR_DER { $$ = new NativasSlice('append', $3, @1.first_line, @1.first_column); }
    | R_SLICES_INDEX PAR_IZQ lista_valores_opt PAR_DER { $$ = new NativasSlice('slices.index', $3, @1.first_line, @1.first_column); }
    | R_STRINGS_JOIN PAR_IZQ lista_valores_opt PAR_DER { $$ = new NativasSlice('strings.join', $3, @1.first_line, @1.first_column); }
    ;

lista_valores_struct
    : lista_valores_struct COMA valor_struct { $1.push($3); $$ = $1; }
    | valor_struct                           { $$ = [$1]; }
    ;

valor_struct
    : IDENTIFICADOR DOS_PUNTOS valor_asignable { $$ = { id: $1, expresion: $3 }; }
    ;