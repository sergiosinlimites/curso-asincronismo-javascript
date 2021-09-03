function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){ // por estandar se le pone este nombre
    return callback(num1, num2);
}

console.log(calc(6, 2, sum));

//

function date(callback){
    console.log(new Date);
    setTimeout(() => {
        let date = new Date
        callback(date); // le dice que espere 3 segundos para que vuelva a mostrar date, esto luego se convierte en la función **printDate** es como si dijera printDate(date);
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);