$('.question-item').click(function(){
    var el = $(this);
if(!el.parents('.question').data('select-multiple')){
    if(!el.hasClass('selected')) {
        el.parents('.question').find('.selected').removeClass('selected').find('i').toggleClass('fa-check-square-o fa-square-o');
        el.addClass('selected').find('i').toggleClass('fa-square-o fa-check-square-o');
    }
} else {
    if(!el.hasClass('selected')) {
        el.addClass('selected').find('i').toggleClass('fa-square-o fa-check-square-o');
    } else {
        el.addClass('selected').find('i').toggleClass('fa-check-square-o fa-square-o');
    }
}
})