$(document).ready(function(){

    $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 24
          }, 1000);
          return false;
        }
      }
    });
  });

  $("#content h2, #content h3").addClass("toc_heading");

  $(".toc_heading").each(function(i) {
      var current = $(this);
      current.attr("id", "title" + i);
      $("#table-of-content").append("
        <li><a id='link" + i + "' href='#title" + i + "' class='link-" + current.get(0).tagName + "'>" + 
        current.html() + "</a></li>
        ");
  });

});