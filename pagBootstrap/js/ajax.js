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
    $('#comprar').click(function(){
        $('#principal').load('successful_purchase.html')
    })
    $('#volverPagPrin').click(function(){
        window.location.reload();
    })
    $('#faqs').click(function(){
        $('#principal').load('faqs.html')
    })
});