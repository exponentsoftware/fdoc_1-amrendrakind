
//Q1.C ----------------------------

function countWords1(strSentence) {
    let str = strSentence.replace(/([^a-z0-9 ]+)/gi, "");           // remove any unwanted special character
    str = str.split(" ")
    let wordCount = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].length != 1) {
            wordCount++;
        }
    }
    return wordCount
}

const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
console.log(countWords1(sentence));