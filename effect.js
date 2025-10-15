$(window).load(function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});
$('document').ready(function(){
        var vw;
        $(window).resize(function(){
             vw = $(window).width()/2;
            $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        });

    $('#turn_on').click(function(){
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').promise().done(function(){
            setTimeout(function() {
                $('.name-prompt-overlay').css('display', 'flex').hide().fadeIn('slow');
            }, 5000);
        });
    });
    
    $('#submitName').click(function() {
        var userNameInput = $('#userName').val();
        var normalizedName = userNameInput.trim().toLowerCase();
        var validNames = ['irene', 'iren', 'eirene'];

        if (validNames.includes(normalizedName)) {
            var nameChars = normalizedName.split('');
            $('.balloons').hide(); 
            for (var i = 0; i < nameChars.length; i++) {
                $('#b' + (i + 1)).show();
                $('#b' + (i + 1) + ' h2').text(nameChars[i].toUpperCase());
            }

            var lastMessage = $("p:contains('a very happy birthday Xola Mathembisa')");
            if (lastMessage.length > 0) {
                lastMessage.html('a very happy birthday ' + userNameInput);
            }
            
            $('.name-prompt-overlay').fadeOut('slow', function() {
                $('#play').fadeIn('slow');
            });

        } else {
            alert("Please enter the name of the beautiful girl who's having a birthday today.");
            $('#userName').val('');
        }
    });

    $('#play').click(function(){
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('backgroud-color','#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function(){
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#balloons_flying').fadeIn('slow');
        });
    });

    function loopBalloon(balloonId) {
        var viewportWidth = $(window).width();
        var randomLeft = (viewportWidth / 2 - 200) + 400 * Math.random();
        var randomTop = 500 * Math.random();
        $(balloonId).animate({left: randomLeft, bottom: randomTop}, 10000, function(){
            loopBalloon(balloonId);
        });
    }

    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top:-500},8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
        
        $('.balloons:visible').each(function() {
            loopBalloon('#' + $(this).attr('id'));
        });
        
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#cake_fadein').fadeIn('slow');
        });
    }); 

    $('#cake_fadein').click(function(){
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#light_candle').click(function(){
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function(){
            $('#wish_message').fadeIn('slow');
        });
    });
        
    $('#wish_message').click(function(){
        var vw = $(window).width() / 2;

        $('.balloons').stop();
        
        var balloonWidth = 80; 
        var balloonSpacing = 90; 
        var numBalloons = $('.balloons:visible').length;
        
        var totalGroupWidth = (numBalloons * balloonWidth) + ((numBalloons - 1) * (balloonSpacing - balloonWidth));
        
        var startLeft = vw - (totalGroupWidth / 2);
        
        // --- PERUBAHAN DI SINI ---
        var balloonTopPosition = $(window).height() * 0.8; // Diubah dari 0.7 menjadi 0.8 untuk posisi lebih rendah

        $('.balloons:visible').each(function(index) {
            var newLeft = startLeft + (index * balloonSpacing);
            $(this).animate({top: balloonTopPosition, left: newLeft}, 500);
        });

        $('.balloons').css('opacity','0.9');
        $('.balloons h2').fadeIn(3000);
        
        $('#photo_container').fadeIn('slow');

        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#story').fadeIn('slow');
        });
    });
    
    $('#story').click(function(){
        $(this).fadeOut('slow');
        $('#photo_container').fadeOut('fast');
        $('.cake').fadeOut('fast');
        $('.balloons').fadeOut('fast');
        $('.bannar').fadeOut('fast');
        
        $('.message').fadeIn('slow');
    });

    $('.close-card').click(function(){
        $('.message').fadeOut('slow');
        $('.cake').fadeIn('slow');
    });
});