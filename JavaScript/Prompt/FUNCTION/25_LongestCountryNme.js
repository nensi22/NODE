/* 25. Write a JS function that accept a list of country names as input and returns the longest country name as output. 
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"                  */


function Longest_Country_Name(countries) {
    let longestCountry = countries[0];
    for (let country of countries) {
        if (country.length > longestCountry.length) {
            longestCountry = country;
        }
    }
    return longestCountry;
}
let Arr = ["Australia", "Germany", "United States of America"];
console.log(Longest_Country_Name(Arr));