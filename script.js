let myValues = [3, 5, 7, 9, 11];
console.log(myValues[0]);
console.log(myValues[4]);

//The numbers I had to pass as indexes where 0 and 4, because these indexes are used to access the values within the array. The index starts at 0.

for (let i = 0; i < myValues.length; i++)
{
    console.log(myValues[i])
}

myValues.push(13, 15, 17, 19, 21);

console.log(myValues)

//The contents now include the pushed values. And they were added after the original values.

console.log(myValues.pop());
console.log(myValues.pop());
console.log(myValues.pop());

console.log(myValues)

//The last three values are missing from the array.

let myString= "cake"

console.log(myString.length)