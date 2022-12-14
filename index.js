/*Function that splits phrase, makes each word uppercase, and then joins each phrase separated by a 😱 emoji*/
const panic = (string) => {
    const newString = string.toUpperCase().split(' ').join(' 😱 ') + '!';
    return newString;
}

/*Function to reset panic phrase text*/
const resetAlert = () => {
    document.getElementById("panic-phrase").textContent = "";
}

/*Event listener for panic button*/
document.getElementById("panic-btn").addEventListener("click", () => {
    const panicInput = document.getElementById("panic-input").value;
    /*If input isn't blank, add input text to phrase box and reset input*/
    if(panicInput) {
        const panicAlertPhrase = panic(panicInput);
        document.getElementById("panic-phrase").textContent = panicAlertPhrase;
        document.getElementById("panic-input").value = "";
    } else {
        alert("Input can't be blank.  Please add a valid value and submit again.")
    }
})

/*Event listener for reset button*/
document.getElementById("reset-btn").addEventListener("click", resetAlert);


import userData from "./data.js";

/*Imports array of user data.  Creates new area of objects with concatenated full name value and birthday with updated date format*/
const transformData = (data) => {
    const newData = data.map(d => {
        return {
           fullName: d.name.first + ' ' + d.name.last,
           birthday: new Date(d.dob.date).toDateString()
        }
    })
    return newData;
}

console.log(transformData(userData));