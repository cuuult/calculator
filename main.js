var num = document.querySelectorAll('.num');


var action = document.querySelectorAll('.action');

var actionArr = Array.prototype.slice.call( action, 0 );

var screen = document.querySelector('.screen'); 
var leftNumber = "";
var str = "";
var	rightNumber = "";

var screenVal = "";

var operator = "";

var checkOperator = false;

// var screenVal = screen.innerHTML;
// for (var i = 0; i < len; i++ ) {

// 	num[i].onclick = function() {

// 		num  = this.innerHTML;

// 		screenVal += num;

// 		screen.innerHTML = screenVal;

		

// 		// screenVal += num;

// 		// screen.innerHTML = screenVal;
// 	}

// }
var len = num.length;

var alen = actionArr.length;


for (var i = 0; i < len; i++ ) {

	num[i].onclick = function() {


		if (!operator) {

			leftNumber += this.innerHTML;

			str = leftNumber;

		}
			

		if (operator) {

			
			rightNumber = this.innerHTML;
			
			
			str += rightNumber;			

			
		}

	
		screenVal = str;
		
		screen.innerHTML = screenVal;
		
	}

}


for (var j = 0; j < alen; j++ ) {

	actionArr[j].onclick = function() {

		
				
			if (!checkOperator) {
				
				operator = this.innerHTML;

				checkOperator = true; 	

				str += operator;
			
			}

			screenVal = str;
			// screenVal += operator;  

			screen.innerHTML = screenVal;

				
			
				



			// } 
			// if (operator !== undefined) {

			// 		screen.innerHTML.substring(0, screenVal.length - 1);
			// }
				

	} 

}
