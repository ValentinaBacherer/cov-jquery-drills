const colorsArray = ['plum', 'orquid', 'violet', 'orquid', 'darkviolet', 'purple', 'orange', 'lightblue', 'orange', 'rosybrown', 'indigo', 'blueviolet', 'gold']
counter = 0
$(document).ready(function () {

    // $('body').append('<input></input>')
    // $('input').attr({
    //     'type': 'submit',
    //     'id': 'btnSubmit',
    //     'value': 'submit'
    // })
    // $('input').css({
    //     padding: '0.5rem'
    // })

    $('input[type="text"]').change(function () {
        $('#btnSubmit').attr({
            disabled: false
        })
    })
    $('#btnSubmit').click(function (e) {
        e.preventDefault()
        const text = $('input[type="text"]').val()
        counter++
        $('div').append('<h2>' + text + '</h2>')
        $('ul').append('<li id=' + counter + '> <h2>' + text + '</h2> </li>')
        $('div > h2').hover(function () {
            console.log('hello');
            $(this).append($("<span> ***</span>"))
            $(this).css({
                color: 'violet',
                'background-color': 'pink',
                'border-radius': '5px'
            })
        }, function () {
            $(this).find("span").last().remove();
            $(this).css({
                color: 'black',
                'background-color': 'white',
                'border-radius': '0'
            })
        })
        $(`#${counter}`).click(function () {
            random = Math.floor(Math.random() * colorsArray.length)
            color = colorsArray[random]
            $(this).css('color', color)
        })
        $(`#${counter}`).dblclick(function () {
            $(this).remove()
        })
    })

    $('body').append('<div></div>')
    $('body').append('<ul></ul>')


})