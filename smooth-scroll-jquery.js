var $ = require('jquery');

function SmoothScrolling(el) {
  var $el = $(el),
      $targets = $el.find('[data-scroll]');

  $targets.click(function() {
    var id = $(this).attr('data-scroll'),
        $target = $(document).find('#' + id);

    if ($target.length) {
      var targetPos = $target.offset().top;
      $('html, body').animate({
        scrollTop: targetPos
      }, 1000);
      return false;
    }
  });
};

module.exports = SmoothScrolling;
