const getItem = (searchTerm) =>{
    return fetch (`https://api.mercadolibre.com/sites/MCO/search?q=${searchTerm}`).
    then(response =>response.json()).
    then(products  =>products);
}

export default {getItem}