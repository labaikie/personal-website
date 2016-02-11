app.directive('dotScroll', ScrollDirective)

function ScrollDirective($document, $window) {
  return {
    restrict: 'EA',
    scope: {
      menu: '='
    },
    link: function(scope, element, attr) {
      var inactive = 'fa fa-circle-o'
      var active = 'fa fa-circle'
      // console.log(scope.menu)
      element.on('mouseenter', function(event) {
      var target = $(event.currentTarget)
        // event.preventDefault();
        target.siblings('span').css({
          opacity: 1.0
        })
        target.removeClass(inactive).addClass(active)
      })

      element.on('mouseleave', function(event) {
        var target = $(event.currentTarget);
        target.siblings('span').css({
          opacity: 0,
          backgroundColor: 'none'
        })
        target.removeClass(active).addClass(inactive)
      })

      element.on('click', function() {
        $('body').animate({
          scrollTop: $(scope.menu.div).offset().top
        },'slow')
      })

      var scroll_pos = 0;
      $(document).scroll(function() {  // header change color upon scroll down
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > $('#portfolio-section').offset().top) {
            $('header > div').css('color', '#242D36');
        }else {
            $('header > div').css('color', '#C6C9CE');
        }
      });

    }
  }
}


