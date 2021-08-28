//Q2.B-------------------------------

function sevenRandomNumbers() {
    let uniqueNumber = [],j=1
    let r = Math.floor(Math.random() * 10) + 1
    uniqueNumber[0]=r
    while(uniqueNumber.length<7)
        {
        let r = Math.floor(Math.random() * 10) + 1
        let duplicate=0
        for(let i=0;i<uniqueNumber.length;i++)
            {
            if(uniqueNumber[i]==r)
                {
                    duplicate=1
                    break
                }
            }
        if (duplicate == 0) {
            uniqueNumber[j++] = r     //Store unique random number
            }   
        }
        return uniqueNumber
    }
console.log("Seven Unique Random Numbers are " + sevenRandomNumbers())

