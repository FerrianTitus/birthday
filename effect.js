$(window).load(function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});
$('document').ready(function(){
        var vw;
        $(window).resize(function(){
             vw = $(window).width()/2;
            $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
            $('#b11').animate({top:240, left: vw-350},500);
            $('#b22').animate({top:240, left: vw-250},500);
            $('#b33').animate({top:240, left: vw-150},500);
            $('#b44').animate({top:240, left: vw-50},500);
            $('#b55').animate({top:240, left: vw+50},500);
            $('#b66').animate({top:240, left: vw+150},500);
            $('#b77').animate({top:240, left: vw+250},500);
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
        
        loopBalloon('#b1');
        loopBalloon('#b2');
        loopBalloon('#b3');
        loopBalloon('#b4');
        loopBalloon('#b5');
        loopBalloon('#b6');
        loopBalloon('#b7');
        
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
         vw = $(window).width()/2;

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b1').attr('id','b11');
        $('#b2').attr('id','b22')
        $('#b3').attr('id','b33')
        $('#b4').attr('id','b44')
        $('#b5').attr('id','b55')
        $('#b6').attr('id','b66')
        $('#b7').attr('id','b77')
        
        var balloonSpacing = 100;
        var totalBalloonsWidth = ($('.balloons:visible').length - 1) * balloonSpacing;
        var startLeft = vw - (totalBalloonsWidth / 2);
        var balloonTopPosition = $(window).height() * 0.7; 

        $('.balloons:visible').each(function(index) {
            $(this).animate({top: balloonTopPosition, left: startLeft + (index * balloonSpacing)}, 500);
        });

        $('.balloons').css('opacity','0.9');
        $('.balloons h2').fadeIn(3000);
        
        $('#photo_container').fadeIn('slow');

        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#story').fadeIn('slow');
        });
    });
    
    // --- FUNGSI LAMA DIHAPUS DAN DIGANTI DENGAN INI ---
    $('#story').click(function(){
        $(this).fadeOut('slow');
        // Sembunyikan semua elemen lain
        $('#photo_container').fadeOut('fast');
        $('.cake').fadeOut('fast');
        $('.balloons').fadeOut('fast');
        $('.bannar').fadeOut('fast');
        
        // Tampilkan kartu ucapan
        $('.message').fadeIn('slow');
    });

    // --- FUNGSI BARU UNTUK TOMBOL CLOSE ---
    $('.close-card').click(function(){
        $('.message').fadeOut('slow');
        // Opsional: tampilkan lagi beberapa elemen setelah kartu ditutup
        $('.cake').fadeIn('slow');
    });
});