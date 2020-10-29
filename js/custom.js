$(function() {
    "use strict";
	
	$(window).on('load', function () {
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({ 'overflow': 'visible' });
	})
	
	/*---- Bottom To Top Scroll Script ---*/
	$(window).on('scroll', function() {
		var height = $(window).scrollTop();
		if (height > 100) {
			$('#back2Top').fadeIn();
		} else {
			$('#back2Top').fadeOut();
		}
	});
	
	$("#back2Top").on('click', function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
    });
    
    // function counterup(){
	// 	if( $('.counter').length ){
	// 		$('.counter').counterUp({
	// 			delay: 10,
	// 			time: 1000
	// 		});
	// 	}
	// }
    // counterup();
    
    //  ###### TIMER ######
    
    (function ($) {
        $.fn.countTo = function (options) {
            options = options || {};
            
            return $(this).each(function () {
                // set options for current element
                var settings = $.extend({}, $.fn.countTo.defaults, {
                    from:            $(this).data('from'),
                    to:              $(this).data('to'),
                    speed:           $(this).data('speed'),
                    refreshInterval: $(this).data('refresh-interval'),
                    decimals:        $(this).data('decimals')
                }, options);
                
                // how many times to update the value, and how much to increment the value on each update
                var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;
                
                // references & variables that will change with each update
                var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data('countTo') || {};
                
                $self.data('countTo', data);
                
                // if an existing interval can be found, clear it first
                if (data.interval) {
                    clearInterval(data.interval);
                }
                data.interval = setInterval(updateTimer, settings.refreshInterval);
                
                // initialize the element with the starting value
                render(value);
                
                function updateTimer() {
                    value += increment;
                    loopCount++;
                    
                    render(value);
                    
                    if (typeof(settings.onUpdate) == 'function') {
                        settings.onUpdate.call(self, value);
                    }
                    
                    if (loopCount >= loops) {
                        // remove the interval
                        $self.removeData('countTo');
                        clearInterval(data.interval);
                        value = settings.to;
                        
                        if (typeof(settings.onComplete) == 'function') {
                            settings.onComplete.call(self, value);
                        }
                    }
                }
                
                function render(value) {
                    var formattedValue = settings.formatter.call(self, value, settings);
                    $self.html(formattedValue);
                }
            });
        };
        
        $.fn.countTo.defaults = {
            from: 0,               // the number the element should start at
            to: 0,                 // the number the element should end at
            speed: 1000,           // how long it should take to count between the target numbers
            refreshInterval: 100,  // how often the element should be updated
            decimals: 0,           // the number of decimal places to show
            formatter: formatter,  // handler for formatting the value before rendering
            onUpdate: null,        // callback method for every time the element is updated
            onComplete: null       // callback method for when the element finishes updating
        };
        
        function formatter(value, settings) {
            return value.toFixed(settings.decimals);
        }
    }(jQuery));
    
    jQuery(function ($) {
      // custom formatting example
      $('.count-number').data('countToOptions', {
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
      });
      
      // start all the timers
      $('.timer').each(count);  
      
      function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
    });
    

});

function scrollFooter(scrollY, heightFooter)
{
    console.log(scrollY);
    console.log(heightFooter);

    if(scrollY >= heightFooter)
    {
        $('footer').css({
            'bottom' : '0px'
        });
    }
    else
    {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}

(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let birthday = "Oct 27, 2020 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
            document.getElementById("days1").innerText = Math.floor(distance / (day)),
            document.getElementById("hours1").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes1").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds1").innerText = Math.floor((distance % (minute)) / second);
  
        }, 0)
    }());

    (function () {
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
      
        let birthday = "Oct 27, 2020 18:00:00",
            countDown = new Date(birthday).getTime(),
            x = setInterval(function() {    
      
              let now = new Date().getTime(),
                  distance = countDown - now;
      
                document.getElementById("days2").innerText = Math.floor(distance / (day)),
                document.getElementById("hours2").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes2").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds2").innerText = Math.floor((distance % (minute)) / second);
      
            }, 0)
        }());

        (function () {
            const second = 1000,
                  minute = second * 60,
                  hour = minute * 60,
                  day = hour * 24;
          
            let birthday = "Oct 28, 2020 00:00:00",
                countDown = new Date(birthday).getTime(),
                x = setInterval(function() {    
          
                  let now = new Date().getTime(),
                      distance = countDown - now;
          
                    document.getElementById("days3").innerText = Math.floor(distance / (day)),
                    document.getElementById("hours3").innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById("minutes3").innerText = Math.floor((distance % (hour)) / (minute)),
                    document.getElementById("seconds3").innerText = Math.floor((distance % (minute)) / second);
          
                }, 0)
            }());

            (function () {
                const second = 1000,
                      minute = second * 60,
                      hour = minute * 60,
                      day = hour * 24;
              
                let birthday = "Oct 30, 2020 00:00:00",
                    countDown = new Date(birthday).getTime(),
                    x = setInterval(function() {    
              
                      let now = new Date().getTime(),
                          distance = countDown - now;
              
                        document.getElementById("days4").innerText = Math.floor(distance / (day)),
                        document.getElementById("hours4").innerText = Math.floor((distance % (day)) / (hour)),
                        document.getElementById("minutes4").innerText = Math.floor((distance % (hour)) / (minute)),
                        document.getElementById("seconds4").innerText = Math.floor((distance % (minute)) / second);
              
                    }, 0)
                }());




$(window).load(function(){
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').height(),
        heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

    // Definindo o tamanho do elemento pra animar
    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    // Definindo o tamanho dos elementos header e conteúdo
    $('header').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });



    scrollFooter(window.scrollY, footerHeight);

    // ao dar rolagem
    window.onscroll = function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });
        
        $('header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });

        scrollFooter(scroll, footerHeight);
    }
});












