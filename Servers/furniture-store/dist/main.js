const changeColor = function (div) {
    div.style.backgroundColor = "#3498db"
}

$('button').on('click',function (){

    const itemName= $('input').val()
    $.get(`/priceCheck/${itemName}`,function (response) {
        const html = $(` 
        <h1>${response.price}</h1>   
        `)
        $('body').append(html)
    })
    
})