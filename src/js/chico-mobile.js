/*--
	CHICO OBJECT
----------------------------*/
;(function (exports, undefined) {

	var ch = (function () {

		var core = {
			"version": "0.1"		
		};

		return core;

	})();

	exports.ch = ch;

})(window);

ch.mobile = ( function () {

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
				//$(tabId).siblings().addClass("ch-hide");

			} else {
				$element.removeClass("ch-selected");
				$(tabId).addClass("ch-hide");
			}
		});
	},

	expando = function (ele, toShow) {
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
	
			win.addEventListener("load", function(){
				setTimeout(function(){
					//at load, if user hasn't scrolled more than 20 or so...
					if( getScrollTop() < 20 ){
						//reset to hide addr bar at onload
						win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
					}
				}, 0);
			} );
		};
	},
	
	modal = function (trigger, content, fn) {

		// Get some elements
		var $trigger = $(trigger),
			$content = $(content).addClass("ch-modal-content"),
			$view = $("<div>")
				.addClass("ch-modal ch-hide"),
			$index = $("div[data-page=index]"),
			lastScroll;

		// Functions
		var show = function (trigger) {
			// Callbacks on Show
			if (fn) {
				fn.call(trigger);
			}

			// Save last scroll position
			lastScroll = window.pageYOffset;

			// Toogle classes to show and hide
			$index.addClass("ch-hide");
			$view.removeClass("ch-hide");

			// Set scroll to top
			window.scrollTo(0, 1);
		};
		
		var hide = function () {
			// Toogle classes to show and hide
			$index.removeClass("ch-hide");
			$view.addClass("ch-hide");

			// Update scroll position
			window.scrollTo(0, lastScroll);
		}

		// Creates close button and add behaivor
		var $close = $("<a class=\"ch-btn ch-secondary ch-skin\" data-action=\"close\">Cancelar</a>").bind("click", hide);
		
		$content
			.removeClass("ch-hide")
			.wrapAll($view);
		
		$view.find(".ch-header nav").append($close);

		// Adds behaivor to trigger
		$trigger.click(function (event) {
			event.preventDefault();
			event.stopPropagation();
			show(this);
		});
		
		/*var width = document.documentElement.clientWidth,
			$trigger = $(trigger),
			$content = $(content).addClass("ch-modal-content"),
			$view = $("<div>")
				.addClass("ch-modal ch-hide")
				.css({
					"min-height": document.documentElement.clientHeight,
					"left": width
				}),
			$index = $("div[data-page=index]"),
			lastScroll;

		// Functions
		var show = function (trigger) {
			lastScroll = window.pageYOffset;

			if (fn) {
				fn.call(trigger);
			}
			
			$index.css({"position":"absolute","top": -lastScroll,"left":0});
			window.scrollTo(0, 1);
			
			$view.removeClass("ch-hide");
			
			$view.anim({"left": 0}, 0.3, "ease-out", function () {
				$index.addClass("ch-hide");
			});
		};
		
		var hide = function () {
			$index.removeClass("ch-hide");
			$view.anim({"left": document.documentElement.clientWidth}, 0.3, "ease-out", function () {
				$view.addClass("ch-hide");
				$index.css({
					"position":"relative",
					"top": 0
				});
				window.scrollTo(0, lastScroll);
			});
		};*/

	};

	// Public methods
	var Core = {
		menu: menu,
		expando: expando,
		hideBar: hideBar,
		modal: modal
	}

	return Core;

})();