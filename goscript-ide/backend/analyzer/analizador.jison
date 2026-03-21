%{
    //MODELOS
    const Print = require('../models/print');
%}

/* definición lexica */
%lex
%options case-sensitive

%%

\s+                         /* ignoro espacios en blanco */
"//".* /* comentario una linea */
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]  /* multilinea */

"int"                       return 'R_INT';
"fmt.Println"               return 'R_PRINT';
"("                         return 'PAR_IZQ';
")"                         return 'PAR_DER';
"{"                         return 'LLAVE_IZQ';
"}"                         return 'LLAVE_DER';
";"                         return 'PT_COMA';
\"[^\"]*\"                  { yytext = yytext.substr(1, yyleng-2); return 'CADENA'; }
[0-9]+                      return 'ENTERO';
[a-zA-Z_][a-zA-Z0-9_]* return 'IDENTIFICADOR';

<<EOF>>                     return 'EOF';
.                           { console.error('Error léxico: ' + yytext); }

/lex

/* Asociación y Precedencia [cite: 577] */
%left 'MAS' 'MENOS'
%left 'MULT' 'DIV'

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
    | error { /* Manejo de errores [cite: 138, 169] */ }
    ;

expresiones
    : expresiones COMA expresion { $1.push($3); $$ = $1; }
    | expresion                 { $$ = [$1]; }
    ;