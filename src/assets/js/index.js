document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
    $(".subir").click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },500);
        return false;
    });
});
var elems = document.querySelectorAll('.collapsible');
var instances = M.Collapsible.init(elems, options);