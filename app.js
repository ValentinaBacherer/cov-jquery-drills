const colorsArray = ['plum', 'orquid', 'violet', 'orquid', 'darkviolet', 'purple', 'orange', 'lightblue', 'orange', 'rosybrown', 'indigo', 'blueviolet', 'gold']

function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}
let myCounter = counter()

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
        const county = myCounter()
        console.log(county);
        $('ul').append('<li id=' + county + '> <h2>' + text + '</h2> </li>')
        if (county <= 1) {
            $('div').append('<h2>' + text + '</h2>')
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
        }
        $(`#${county}`).click(function () {
            random = Math.floor(Math.random() * colorsArray.length)
            color = colorsArray[random]
            $(this).css('color', color)
        })
        $(`#${county}`).dblclick(function () {
            $(this).remove()
        })
    })

    $('body').append('<div></div>')
    $('body').append('<ul></ul>')

})