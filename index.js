// DEFINE YOUR FUNCTION BELOW:

function capitalize(str) {
    let firstLetter = str[0].toUpperCase();
    let restOfStr = str.slice(1);
    
    return firstLetter + restOfStr;
}