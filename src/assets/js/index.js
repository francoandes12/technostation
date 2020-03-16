document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
    $("div#contenedor").hide();
    $('#mostrar').click(function(){
        $('div#contenedor').toggle();
    })
    .css("cursor","pointer");
    $(".subir").click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },500);
        return false;
    });
});