//Check off specific Todos by clicking
$('li').click(function(){
    $(this).toggleClass(completed);
});