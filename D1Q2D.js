
//Q2.D-------------------------------

function checkUniqueness(arr)
{
    let unique=true
    arr.sort()
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==arr[i+1])
        {
            unique=false
        }
    }
    return unique
}
const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne));
const arrTwo = [1, 4, 6, 2, 3]
console.log(checkUniqueness(arrTwo));