/* 

-----------------------------------
Decalare namespace for the project
-----------------------------------
(function (window, undefined) {

	Project = (function () {

		var core = {

			coreVersion: "0.1",

		}

		return core;

	})();

	window.Project = Project;

})(window);

-----------------------------------
Example for extended
-----------------------------------
Project.componentName = (function(){
	
	// Private methods
	var print = function(txt) {
		console.log(txt);
	},
	foo = function() {
		return print("Init the component!");	
	}
	
	// Public methods
	var Core = {
		version: "0.1",
		init: foo
	}
	
	return Core;
	
})();

-----------------------------------
Init component
-----------------------------------
Project.componentName.init();

*/
	
