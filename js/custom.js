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
      
        let birthday = "Oct 26, 2020 00:00:00",
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












