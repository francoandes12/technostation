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
window.addEventListener('load',()=>{
    document.getElementById('circulo').className='hide';
    document.getElementById('contenido').className='animated fadeInDown';
})