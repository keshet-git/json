let continent = {
    countryName: "Europe",
    countries: [
        {
            name: "Switzerland",
            population: 8700000,
            area: 412885
        },
        {
            name: "Moldova",
            population: 2600000,
            area: 43000
        },
        {
            name: "Greece",
            population: 10700000,
            area: 132000
        }]
   
};

let continentJSON = JSON.stringify(continent);
let objFromJson = JSON.parse(continentJSON);
console.log(continent);
console.log(continentJSON);