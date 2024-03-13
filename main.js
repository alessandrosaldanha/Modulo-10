$(document).ready(function() {
    $('#carousel-img').slick({
        autoplay: true,
    });
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    });

    $('#telefone').mask('(00) 0000-0000',{
        placeholder: '__/__/___'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true,
                nome: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                telefone: true
            }
        },
        messages: {
            nome: 'Digite seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos); {
                alert(`Existe ${camposIncorretos} campos incorretos`)
            }
        }
    });

    $('.lista-carros button').click(function() {
        const destino = $('#contato');

        const nomeVeiculo = ($(this).parent().find('h3').text());

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
});

