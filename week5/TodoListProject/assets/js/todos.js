//Check off specific Todos by clicking
// $('li')로 시작하면 새로 생성된 li에 대해서는 쿼리문이 동작하지 않는다. 따라서 ul로 시작
//when an 'li' clicked inside the 'ul'
$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
});

//Click on X to delete Todo
$('ul').on('click','span',function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val(""); //clear input value
        //create a new li and add to ul
        $('ul').append("<li><span><i class='fa fa-trash'></i></span> "+ todoText + "</li>");
    }
});

$('.fa-plus').on('click',function(){
    $("input[type='text']").fadeToggle();
});