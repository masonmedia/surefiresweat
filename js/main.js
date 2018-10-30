// Collapse mobile menu after clicking

$(document).ready(function () {
	$('.navbar-collapse a:not(.dropdown-toggle), body').click(function () {
		$(".navbar-collapse").collapse('hide');
	});
});

//smooth scroll

$(document).ready(function () {
	// Add smooth scrolling to all links in navbar + footer link
	$(".navbar a, .d-flex a, footer a, a[href='#bhs']").on('click', function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior 
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (900) [I upped this to 1100] specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				//				window.location.hash = hash;
			});
		} // End if
	});
})


//Change navbar color on scroll

$(function () {
	$(document).scroll(function () {
		var $nav = $(".navbar");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

// shrink navbar on scroll 

$(window).scroll(function () {
	if ($(document).scrollTop() > 50) {
		$('nav').addClass('shrink');
		$('.navbar-brand').addClass('shrink');
	} else {
		$('nav').removeClass('shrink');
		$('.navbar-brand').removeClass('shrink');
	}
});

// iframe video + bandcamp defer js

$(document).ready(function () {
	$('iframe#track-1').attr('src', 'https://bandcamp.com/EmbeddedPlayer/album=2776862196/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=none/track=576189169/transparent=true/');
	$('iframe#track-2').attr('src', 'https://bandcamp.com/EmbeddedPlayer/album=2776862196/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=none/track=1144129226/transparent=true/');
	$('iframe#track-3').attr('src', 'https://bandcamp.com/EmbeddedPlayer/album=2776862196/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=none/track=2172763946/transparent=true/');
	$('iframe#track-4').attr('src', 'https://bandcamp.com/EmbeddedPlayer/album=2776862196/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=none/track=1511403670/transparent=true/');
});

//img load-defer js

function init() {
	var imgDefer = document.getElementsByTagName('img');
	for (var i = 0; i < imgDefer.length; i++) {
		if (imgDefer[i].getAttribute('data-src')) {
			imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
		}
	}
}
window.onload = init;


//js multi youtube embed * added single class for the front page player to install a custom image: https://codepen.io/tutsplus/pen/RRVRro

(function () {
	
//	document.querySelectorAll('.a,.b')

	var youtube = document.querySelectorAll(".youtube-frontpage,.youtube-new-img");

	for (var i = 0; i < youtube.length; i++) {

		//		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
		//		
		//		var image = new Image();
		//				image.src = source;
		//				image.addEventListener( "load", function() {
		//					youtube[ i ].appendChild( image );
		//				}( i ) );

		youtube[i].addEventListener("click", function () {

			var iframe = document.createElement("iframe");

			iframe.setAttribute("frameborder", "0");
			iframe.setAttribute("allowfullscreen", "");
			iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

			this.innerHTML = "";
			this.appendChild(iframe);
		});
	};

})();


//js multi youtube embed: https://codepen.io/tutsplus/pen/RRVRro

(function () {

	var youtube = document.getElementsByClassName("youtube");

	for (var i = 0; i < youtube.length; i++) {

		var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";

		var image = new Image();
		image.src = source;
		image.addEventListener("load", function () {
			youtube[i].appendChild(image);
		}(i));

		youtube[i].addEventListener("click", function () {

			var iframe = document.createElement("iframe");

			iframe.setAttribute("frameborder", "0");
			iframe.setAttribute("allowfullscreen", "");
			iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

			this.innerHTML = "";
			this.appendChild(iframe);
		});
	};

})();

//jQ audio accordion

$(document).ready(function(){
    $("#audio").click(function(){
        $("#tracks").fadeToggle(2500);
    });
    $("#video").click(function(){
        $("#videos").fadeToggle(1500);
    });
    $("#images").click(function(){
        $("#photos").fadeToggle(1500);
    });
	$("#epk").click(function(){
    	$("#calendar").fadeOut(1000);
    });
	$("#dates").click(function(){
    	$("#calendar").fadeToggle(1500);
    });

});
