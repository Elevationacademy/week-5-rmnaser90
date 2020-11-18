const changeColor = function (div) {
    div.style.backgroundColor = "#3498db"
}

$('#getPrice').on('click',function (){

    const itemName= $('input').val()
    $.get(`/priceCheck/${itemName}`,function (response) {
        const html = $(` 
        <h1>${response.price}</h1>   
        `)
        $('body').append(html)
    })
    
})

$('#butItem').on('click',function (){

    const itemName= $('input').val()
    $.get(`/buy/${itemName}`,function (response) {
        const html = $(` 
        <h1> Congratulations, you've just bought ${response.name} for ${response.price}. There are ${response.inventory} left now in the store</h1>   
        `)
        $('body').append(html)
    })
    
})