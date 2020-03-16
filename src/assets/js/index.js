document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
    $("div#contenedor").hide();
    $('#mostrar').click(function(){
        $('div#contenedor').toggle();
    })
    .css("cursor","pointer");
});