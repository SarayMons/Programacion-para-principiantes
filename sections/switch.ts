
export let weekDay: number = 5;

if (weekDay <=0 ) {
    console.log( "Día de la semana no permitido" );
}

switch( weekDay) {

    case 1:
        console.log( "Lunes" );
        break;

        case 2:
            console.log( "Martes" );
            break;
            
        case 3:
            console.log( "Miércoles" );
            break;

        default:
            console.log( "No es lunes, martes o miércoles" );    

        
}