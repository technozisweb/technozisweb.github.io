
$(document).ready(function () {

$('ul.services-option > li')
            .click(function (e) {
      $('ul.services-option > li')
            .removeClass('active');
      $(this).addClass('active');
});
});
 