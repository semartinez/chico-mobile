/*--
	VIP OBJECT
----------------------------*/
Vip.Mobile = ( function () {

	//Private methods
	var menu = function (ele, exclude) {
		$(ele).click(function (event) {
			event.preventDefault();
			event.stopPropagation();
			
			// Get some elements
			var $element = $(this),
				child = this.firstChild,
				tabId = "#" + child.href.split("#")[1];

			// Toogle behaivor
			if (!$element.hasClass("ch-selected")) {
				// Show
				$element.addClass("ch-selected");
				$(tabId).removeClass("ch-hide");
				
				// Search focus
				if ($element.hasClass("ch-search")) {
					$(tabId).find("input[type=search]").focus();
				}

				// Hide
				$element.siblings().removeClass("ch-selected");
				$(tabId).siblings().addClass("ch-hide");

			} else {
				$element.removeClass("ch-selected");
				$(tabId).addClass("ch-hide");
			}
		});
	},

	drop = function (ele, toShow) {
		$(ele).click( function () {
			var $toShow = toShow || $(this).next();
			if ( $toShow.hasClass("ch-hide") ){
				$toShow.removeClass("ch-hide");
			}else {
				$toShow.addClass("ch-hide");
			}

		} );
	},
	
	hideBar = function( win ){
	
		var doc = win.document;
	
		// If there's a hash, or addEventListener is undefined, stop here
		if( !location.hash && win.addEventListener ){
	
			//scroll to 1
			window.scrollTo( 0, 1 );
			
			var scrollTop = 1,
			
				getScrollTop = function(){
					return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
				},
	
				//reset to 0 on bodyready, if needed
				bodycheck = setInterval(function(){
					if( doc.body ){
						clearInterval( bodycheck );
						scrollTop = getScrollTop();
						win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
					}	
				}, 15 );
	
			win.addEventListener( "load", function(){
				setTimeout(function(){
					//at load, if user hasn't scrolled more than 20 or so...
					if( getScrollTop() < 20 ){
						//reset to hide addr bar at onload
						win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
					}
				}, 0);
			} );
		}
		
	};

	// Public methods
	var Core = {
		menu: menu,
		dropdown: drop,
		hideBar: hideBar
	}

	return Core;

})();

/*--
	GENERAL INITATION
----------------------------*/
// Iphone scale fix
MBP.scaleFix();
// Hide navigation url bar
Vip.Mobile.hideBar(window);

//FOR MOBILE
Vip.Mobile.menu($(".ch-header menu li"));

//FOR TABLET
//Vip.Mobile.menu($(".mobi-menu li"), "tablet");
