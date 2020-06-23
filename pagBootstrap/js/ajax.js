$(document).ready(function(){

    $('#gatito1').click(function(){
        $('#principal').load('buy1.html')
    })

    $('#gatito2').click(function(){
        $('#principal').load('buy2.html')
    })

    $('#gatito3').click(function(){
        $('#principal').load('buy3.html')
    })
<<<<<<< HEAD
    $('#comprar').click(function(){
        $('#principal').load('successful_purchase.html')
    })
    $('#volverPagPrin').click(function(){
        window.location.reload();
    })
=======

    $('compraE').click(function(){
        $('#principal').load('successful_purchase.html')
    })

>>>>>>> e157818922d30c58295419c05e4a40f0db8242e5
});