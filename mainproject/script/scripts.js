
$(document).ready(function() {
  $('#form').submit(function(e) {
    var name = $('#name').val().trim();
    var email = $('#email').val().trim();
    var msg = $('#msg').val().trim();
    $(".error").remove();
    var isvalidform = true;
    if (name.length < 1) {
      $('#name').after('<span class="error"><i class="fa-solid fa-circle-exclamation" style="color: #f4101c;"></i>This field is required</span>');
      var isvalidform = false;
    }
    if (email.length < 1) {
      $('#email').after('<span class="error"><i class="fa-solid fa-circle-exclamation" style="color: #f4101c;"></i>This field is required</span>');
      var isvalidform = false;
    }
    if (msg.length < 1) {
      $('#msg').after('<span class="error"><i class="fa-solid fa-circle-exclamation" style="color: #f4101c;"></i>This field is required</span>');
      var isvalidform = false;
    }
    return isvalidform;
  });
});


$(document).ready(function() {
  $('#sebtn').on('click', function() {
    var query = $('#searchb').val();
    if (query == "men" || query == "man" || query == "Men" || query == "Man" || query == "men's fashion")
      window.location.href = './product.html#list-item-1';
    else if (query == "women" || query == "ladies" || query == "woman" || query == "Woman" || query == "Women" || query == "ladies fashion")
      window.location.href = './product.html#list-item-2';
    else if (query == "children" || query == "kids")
      window.location.href = './product.html#list-item-3';
    else if (query == "imported" || query == "international")
      window.location.href = './product.html#list-item-4';
    else if (query == "winter" || query == "woolen")
      window.location.href = './product.html#list-item-5';
    else
      window.location.href = './404.html';
  });
});


$(document).ready(function() {
  $('#a1').on('click', function() {
    var ele = $(this).closest('#div1');
    ele.remove();
  });
});


$(document).ready(function() {
  $('#a2').on('click', function() {
    var ele = $(this).closest('#div2');
    ele.remove();
  });
});