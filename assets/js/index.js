$(document).ready(function(){

  $('.navigation li a[href$="/' + location.pathname.split("/")[1] + '"]').addClass('navigation-current');
  
});