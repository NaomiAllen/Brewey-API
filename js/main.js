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
            let thisBeer = '<div class="col s12 m6"><div class="card"><div class="card-image"><div id="accordion"><a href= "wishlist.html" class="btn-floating halfway waves-effect waves-light red"><i class="material-icons icon-color">add</i></a><a href= "favorites.html"  class="btn-floating halfway waves-effect waves-light red"><i class="material-icons icon-color">favorite</i></a><div class="card-content"><div>'
             + (beerData.data[i].name)  + '</div><div>' + (beerData.data[i].style.description) 
            + '</div><div>' + 'ABV: ' + (beerData.data[i].abv) + '</div><div>' + 'Organic: ' + (beerData.data[i].isOrganic) + '</div><div>' + '</div>' + '<br></br>' + ' </div></div></div></div></div>'
            $('.container').append(thisBeer)
            // const $img = $('<img>').attr('src', beerData.data[i].labels.medium).attr('alt', beerData.data[i].name)
            // $('.container').append($img)
            
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

