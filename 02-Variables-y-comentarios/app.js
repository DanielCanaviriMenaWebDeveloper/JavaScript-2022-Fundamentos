/* 
    COMENTARIOS EN JAVASCRIPT 

    Los comentarios son líneas de código que el intérprete de JavaScript ignorará a la hora de ejecutarlo 

    Atajos de teclado para crear comentarios : 

        ctrl + ]              =   Crea comentarios simples         
        alt + shift + a    =  Crea comentarios multiples
    
    Ejemplo: 
*/

// Este es un comentario simple

/* 
        Este es un 
        comentario 
        multiple 
    */

/* VARIABLES */

let a = 10;

var b = 10;

const c = 10;

/* No esta permitido reasignar un valor a una constante. 
c = 23; // Output : Uncaught TypeError: invalid assignment to const 'c' 
*/

console.log(a, b, c);

// Reasignando valores a las variable a y b 
a = 20;

b = 30;