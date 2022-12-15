document.querySelector('#calculate').addEventListener('click',calculate)

const humanYears = document.querySelector('#humanYears').value

function calculate (humanYears){

    /* First year = 15 for both
    Second year = 24 for both
    Third year and thereafter += 4 for cat and += 5 for dog */

    let catYears = 0
    let dogYears = 0

    for (let i = 0; i <= humanYears; i++){
        if (i === 0){
            return [0,0,0]
        } else if (i === 1){
            catYears += 15
            dogYears += 15
        } else if (i === 2){
            catYears += 4
            dogYears += 4
        } else {
            catYears += 4
            dogYears += 5
        }
    }

    return humanYears,catYears,dogYears

    document.querySelector('#catYears').innerText = `If you are ${humanYears} years old as a human, you would be ${catYears} old as a cat.`
    document.querySelector('#dogYears').innerText = `If you are ${humanYears} years old as a human, you would be ${dogYears} old as a dog.`

}