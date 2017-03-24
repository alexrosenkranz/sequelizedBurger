$(document).ready( function(){
  
// $('.devour-form').each(function(i){
//   $(this).find('.form-group').attr('burgerNumber', i);
// })



  $('.burger-form').on('click','.burger-submit', function(e){
    e.preventDefault();

    var burger = {
      burgerName: $('.burger-name').val().trim()
    }

    $.post('/', burger).then(function(result) {
      if (result.name === "SequelizeValidationError") {
        $('.burger-form').find('.form-group').addClass('has-error');
      } else {
        $('.burger-form').find('.form-group').removeClass('has-error');
        window.location.reload();
      }
    })

  });

  $('.devour-form').on('click','.devour-submit', function(e){
    e.preventDefault();
    var devourForm = $(this).parent();
    var consumer = {
      customerName: devourForm.find('.customer').val().trim(),
      burgerId: parseInt(devourForm.find('.burger_id').val()),
    }

    $.post('/'+ consumer.burgerId, consumer).then(function(result) {
      console.log(result);
      console.log(devourForm);
      if (result.name === "SequelizeValidationError") {
        devourForm.addClass('has-error');
      } else {
        devourForm.removeClass('has-error');
        window.location.reload();
      }
    })

  });

})