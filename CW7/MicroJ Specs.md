## μJ1 Specification

program      → method

method       → <B>ident</B> ( identList<sub>opt</sub> ) { declaration<sub>opt</sub> statement<sub>rep</sub> }

identList    → <B>ident</B> | identList , <B>ident</B>

declaration  → <B>var</B> identList ;

statement    → assignment | printStat

assignment   → variable = expression ;

expression   → –<sub>opt</sub> term | expression + term | expression – term

term         → factor | term * factor | term / factor

factor       → <B>number</B> | variable | ( expression )

variable     → <B>ident</B>

printStat    → <B>print</B> itemList ; | <B>println</B> itemList<sub>opt</sub> ;

itemList     → printItem | itemList , printItem

printItem    → <B>literal</B> | expression | expression : expression 

## μJ2 Specification

statement    → assignment | printStat | readStat | whileStat | ifStat

readStat     → <B>read</B> <B>literal</B><sub>opt</sub> ,<sub>opt</sub> variable ;

whileStat    → <B>while</B> condition block

ifStat       → <B>if</B> condition block elsePart<sub>opt</sub>

elsePart     → <B>else</B> block | <B>else</B> ifStat

condition    → ( expression relation expression )

block        → {&emsp;} | { statement<sub>rep</sub> }

## μJ3 Specification

program      → method<sub>rep</sub>

statement    → assignment | printStat | readStat | whileStat | ifStat | returnStat

assignment   → variable = expression ; | invocation ;

factor       → <B>number</B> | variable | ( expression ) | invocation

invocation   → <B>ident</B> ( exprList<sub>opt</sub> )

exprList     → expression | exprList , expression

returnStat   → <B>return</B> expression<sub>opt</sub> ;

## Lexical Forms
```
token        ident | number | literal | keyword | relation | operator | separator

keyword      var | print | println | read | while | if | else | return 

relation     ==  !=  <   <=  >   >=

operator     =   +   -   *   /

separator    (   )   {   }   ,   ;   :

In-line comments // are skipped in the lexical stage
opt means optional,  rep means repeated one or more time
```
