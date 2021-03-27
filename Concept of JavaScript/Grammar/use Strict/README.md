# “use strict”

‘use strict’ enforce stricter parsing and error handling in your code. It helps in failing fast and failing loudly i.e throwing an error which will lead to failure and problems in a later stage of programming.
Also, the javascript language is developed in 10days with lots of errors and features which are difficult to be included to make it more grammatically correct.

Prevents the use of global variable
a)
       name = "sparsh";
       console.log(city)
                    	     above code is will not work using ‘use strict’
 'use strict';
 name = "sparsh";
 console.log(city)
b)
         function myFunc(a,a,b){
   		console.log(a,a,b);
         }
         myFunc(1,2,3)
               	    above code is will not work using ‘use strict’
  ‘use strict’     
  function myFunc(a,a,b){
   		console.log(a,a,b);
         }
         myFunc(1,2,3)
       console.log(city)
               	
			
