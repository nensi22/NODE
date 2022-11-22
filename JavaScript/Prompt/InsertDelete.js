let array=[11,12,13,14,15];

console.log(array);
function firstInsert()
{
    array.unshift(10);
    console.log(array);
}
function firstDelete()
{
    array.shift();
    console.log(array);
}
function lastInsert()
{
    array.push(16);
    console.log(array);
}
function lastDelete()
{
    array.pop();
    console.log(array);
}
firstInsert();
firstDelete();
lastInsert();
lastDelete();

