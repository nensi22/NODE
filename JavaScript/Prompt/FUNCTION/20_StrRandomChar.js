/* 20. Write a JS function that generates a string id (specified length) of random characters. 
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"             */


let generateStr=(length)=>{
    let characterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	let string = "";

    for (var i = 0; i < length; i++)
    {
        let randomChar = characterList.charAt( Math.floor(Math.random() * (characterList.length - 1)) );
            string += randomChar
    }
    
    return string;

}

console.log(generateStr(5));

