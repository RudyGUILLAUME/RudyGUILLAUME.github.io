<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 800); // Vitesse de transition (en millisecondes)
      }
    });
  });