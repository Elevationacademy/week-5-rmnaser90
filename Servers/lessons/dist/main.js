const changeColor = function (div) {
    div.style.backgroundColor = "#3498db"
}

$('button').on('click',function (){

    const bookID= $('input').val()
    $.get(`/books/${bookID}`,function (response) {
        const html = $(` 
        <h1>${response.title}</h1>
        <h2>${response.author}</h2>
        
        `)
        $('body').append(html)
    })
    
})