//Q1.A ---------------------------

function countWords(str, word1, word2) {

    str = str.replace(/(^\s*)|(\s*$) /gi, "");           // remove the start and end spaces
    str = str.replace(/[ ]{2,}/gi, " ");                 // reduce multiple spaces to a single space
    str = str.replace(/([^a-z0-9 ]+)/gi, "");           // remove any unwanted special character
    str = str.replace(/\n /, "\n");                      // exclude a new line with a start spacing
    let str1 = str.split(" ");                            // Convert into array of words
    let i = 0, w1 = 0, w2 = 0;
    for (i = 0; i < str1.length; i++) {
        if (str1[i] === word1) {
            w1++;
        }
        else if (str1[i] == word2) {
            w2++;
        }
    }

    if (w1 > w2) {
        str1 = "The word " + word1 + " more frequently occurred than " + word2
    }
    else if (w1 == w2) {
        str1 = "The word " + word1 + " has as frequently occurred as " + word2
    }
    else {
        str1 = "The word " + word2 + " more frequently occurred than " + word1
    }
    return str1
}

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
console.log(paragraph)
console.log()
console.log(countWords(paragraph, "love", "you"));
