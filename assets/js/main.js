$(function () {
    'use strict'

    function toggleOffcanvas(){
        $('.offcanvas-collapse').toggleClass('open')
    }

    $('.closebtn').on('click', function(){
        toggleOffcanvas();
    })

    $('[data-toggle="offcanvas"]').on('click', function () {
        toggleOffcanvas();
    })

    $('.nav-item').on('click', function(){
        toggleOffcanvas();
    })
})