// All independent of framework
(function (window, undefined) {

	Vip = (function () {

		var core = {

			coreVersion: "0.1",

			setCookie: function (conf) {
				console.log(conf);
			},

			getCookie: function (conf) {
				console.log(conf)
			},

			formatPrice: function (conf) {
				console.log(conf.price);
			}

		}

		return core;

	})();

	window.Vip = Vip;

})(window);