$(document).ready(function(){

  function getUrlParameter(sParam)
  {
      var sPageURL = window.location.search.substring(1);
      var sURLVariables = sPageURL.split('&');
      for (var i = 0; i < sURLVariables.length; i++) 
      {
          var sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] == sParam) 
          {
              return sParameterName[1];
          }
      }
  }        

  var nbItems = $('.design-image').length
  var navigation = document.getElementById("design-nav");

  var version = getUrlParameter('v');

  if( ! version){
    version = nbItems;
    alert(version);
  }

  var reverseVersion =  (-version+1) + (nbItems-1);

  var currentImage = $( ".design-image" )[reverseVersion];
  $(currentImage).addClass('is-visible');

  for (var i=nbItems; i>0; i--){
    var li = document.createElement('li');
    $(li).attr('class', 'design-link');
    if( i == version ){
    $(li).addClass( 'active' );
    }
    li.innerHTML = li.innerHTML + 'v' + i;
    navigation.appendChild(li);
  }

  $('.design-link').click( function () {

    $('.design-link').removeClass('active');
    $(this).addClass('active');

    var position = $( ".design-link" ).index( this );
    currentImage = $( ".design-image" )[position];

    $('.design-image').removeClass('is-visible');
    $(currentImage).addClass('is-visible');

  });

});