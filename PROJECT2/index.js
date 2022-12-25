// let array=[11,22]

window.onload = function () {
    let Arr = [];
    const item = document.getElementById("item");
    const Add = document.getElementById("Add");
    const Ans = document.getElementById("Ans");


    let counter = 1;
    let object = {};
    Add.addEventListener('click', () => {
        object = {
            "key": counter++,
            "value": Add.value,
        }
        Arr.push(object);
        console.log(Arr);
        Ans.value = (Arr);
    })
}