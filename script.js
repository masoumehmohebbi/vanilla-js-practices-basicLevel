 function GetUserString(userText) {
    if (ifInsertNumber(userText)){ //True
        alert('Prefer Insert The Text But : ')
    }

    if (searchText(userText)) {      //True
        alert('Your Text Includes M')
    }

    alert ("The Last Char of Your Text Is: " + sliceText(userText))
}
let userText = prompt("Enter Your Text")
GetUserString(userText)

function searchText(searchTxt) {
    if (searchTxt.toUpperCase().includes('M')) {
        return true
    }
}


function sliceText (sliceTxt){
        return (sliceTxt.slice(-1))
}

function ifInsertNumber(text) {
    if (!isNaN(text)) {
        return true
    }
}
