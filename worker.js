onmessage = function(e){
  if ( e.data === "start" ) {

		var a = [];

		for (var i = 50000; i >= 0; i--) {
		    a.push(i);
		};

		function bubbleSort(a)
		{
		    var swapped;
		    do {
		        swapped = false;
		        for (var i=0; i < a.length-1; i++) {
		            if (a[i] > a[i+1]) {
		                var temp = a[i];
		                a[i] = a[i+1];
		                a[i+1] = temp;
		                swapped = true;
		            }
		        }
		    } while (swapped);
		}
		var start = new Date().getTime();
		bubbleSort(a);
		var end = new Date().getTime();
		var time = end - start;
		postMessage(time);
  }
};