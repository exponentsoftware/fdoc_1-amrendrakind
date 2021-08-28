
//Q1.B --------------------------------------

function cleanText(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi, ""); // remove the start and end spaces
    str = str.replace(/([^a-z0-9 .?]+)/gi, ""); // remove any unwanted special character
    str = str.replace(/[ ]{2,}/gi, " ");      // reduce multiple spaces to a single space
    str = str.replace(/\n /, "\n");           // exclude a new line with a start spacing
    //    console.log(str.split(" "));             // Convert into array of words
    return str                              // return clean text
}
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
console.log(cleanText(sentence))
