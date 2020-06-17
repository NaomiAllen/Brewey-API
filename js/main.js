
/*------------------------ Classes and Objects ------------------------------*/



/*---------------------------------- Cache ----------------------------------*/
const baseURL = 'https://api.brewerydb.com/v2/';
const queryType = 'beers/';
let nameQuery = '';
let queryURL = baseURL + queryType + '?' + apikey 

console.log(queryURL);
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
$(() =>{  

const getBeer = () => {
    $.ajax({
        url: queryURL + nameQuery,
    }).then((beersData) => {
        $('.container').html(`
        <h2> ${beersData.name} </h2>
        <h3> ${beersData.discription} </h3>
        <h4> ${beersData.abv} <h4>
        <h5> ${beersData.isOrganic} <h5>
        
        `)
        console.log(beersData)
    }, (error) => {
        console.error(error)
    })
}

getBeer();

});