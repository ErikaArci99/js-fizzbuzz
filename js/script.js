
// ciclo che permette di stampare i numeri da 1 a 100
for (let i = 0; i<100; i++){
    // verifica numeri divisibili per 3
    if((i+1) % 3 == 0) {
        // verifica numeri divisibili sia per 3 che per 5
        if ((i+1) % 5 == 0){
            console.log('FizzBuzz')
        }
        else console.log('Fizz')
    }
    // verifica numeri divisibili per 5
    else if ((i+1) % 5 == 0){
        console.log('Buzz')
    }

    // i numeri restanti
    else console.log(i + 1)
}