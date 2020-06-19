// const baseURL = 'https://api.brewerydb.com/v2/';
// const apikey = 'key=0d8881693054b317b3ab989c18a74c4d';

// const getBeer = (nameQuery) => {
//     const queryType = `search?q=${nameQuery}&type=beer&`;
//     let queryURL = baseURL + queryType;
        
//     $.ajax({
//         url: queryURL +  apikey
//     }).done((beerData) => {
//         for (const beer in beerData) {
            
//             // let myBeers = '<div>' + (beerData[beer].name)+ '</div><div>'+ (beerData[beer].style.description) 
//             // + '</div><div>' + (beerData[beer].abv) + '</div><div>' + (beerData[beer].isOrganic) + '</div><div>' + '</div>'
//             console.log(beerData[beer])
//         }
//         return beerData;

//     })
// }

// $(() =>{
//     $('form').on('submit', (event) => {
//         event.preventDefault()
//         nameQuery = $('#search').val()
//         getBeer(nameQuery)
//     })
// })
const baseURL = 'https://api.brewerydb.com/v2/';
const apikey = 'key=0d8881693054b317b3ab989c18a74c4d';
const getBeer = (nameQuery) => {
    const queryType = `search?q=${nameQuery}&type=beer&`;
    let queryURL = baseURL + queryType;
    $.ajax({
        url: queryURL +  apikey
    }).then((beerData) => {
        console.log(beerData.data)
        for (let i = 0; i <= beerData.data.length; i++) {
            let beerName = beerData.data[i].name
            let thisBeer = '<div>' + (beerData.data[i].name)+ '</div><div>'+ (beerData.data[i].style.description) 
            + '</div><div>' + (beerData.data[i].abv) + '</div><div>' + (beerData.data[i].isOrganic) + '</div><div>' + '</div>'
            $('.container').append(thisBeer)
        }
    }, (error) => {
        console.log(error);
    })
}
$(() =>{
    //getBeer();
    $('form').on('submit', (event) => {
        event.preventDefault()
        nameQuery = $('#search').val()
        getBeer(nameQuery)
    })
});

