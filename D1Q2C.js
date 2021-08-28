//Q2.C-------------------------------

function reverseArray(str)
    {
        let str1 =[]
        for(let i=0;i<str.length;i++)
            {
                str1[i]=str[str.length-1-i]
            }
        return str1
    }
console.log(reverseArray(["A", "B", "C"]));
