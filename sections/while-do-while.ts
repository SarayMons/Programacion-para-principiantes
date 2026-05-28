/* 
let gasTank = 0;

while ( gasTank > 0 ) {
   console.log( "Gasolina restante", gasTank ); 

   gasTank--;

}

console.log( "¡Se acabó la gasolina!" ); */

export let gasTank = -10;

do {
   console.log( "Gasolina restante", gasTank ); 

   gasTank--;

} while ( gasTank > 0 );

console.log( "¡Se acabó la gasolina!" );