var bee = (function(bee){
	bee.abc = function(){
		alert(123);
	}
	return bee;
})(bee||{});

bee.abc();
