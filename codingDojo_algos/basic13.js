
		/* 1. Print all the integers from 1 to 255.*/
		function print255(){
		    for(var i = 1; i < 256; i++){
		        console.log(i);
		    }
		}
		print255();

		////////or////////

		function print255(){
		    var num = 1;
		    while(num < 256){
		        console.log(num);
		        num = num + 1;
		    }
		}
		print255();

		/* 2. Print all odd integers from 1 to 255.*/
		function odd255(){
		    for(var i = 1; i < 256; i++){
		        if(i % 2 == 1){
		            console.log(i);
		        }
		    }
		}

		////////or////////

		function odd255(){
		    var num = 1;
		    while(num < 255){
		        num = num + 2;
		        console.log(num);
		    }
		}
		odd255();

		/* 3. Print integers from 0 to 255, and with each integer print the sum so far.*/
		function intAndSum(){
		var sum = 0;
		for (var i = 0; i <256; i++){
		    sum = sum + i;
		    console.log(i + " " + sum);
		    }
		}
		intAndSum();
		/* 4. Iterate through a given array, printing each value.*/
		function iterate_array(){
			for(var i = 0; i < arr.length; i++){
				console.log(arr[i]);
			}
		}
		iterate_array([11,22,43,25]);

    	/* 5. Given an array, find and print its largest element*/
		function find_max(arr){
		    var max = 0;
		    for(var i = 0; i < arr.length; i++){
		        if(arr[i] > max){
		            max = arr[i];
		        }
		    }
		    console.log("max value is: " + max);
		}
		find_max([44,32,2,55,3]);

    	/* 6. Analyze an array’s values and print the average.*/
		function find_avg(arr){
		    var sum = 0;
		    for(var i = 0; i < arr.length; i++){
		        sum += arr[i];
		    }
		    var average = sum / arr.length;
		    console.log(average);
		}
		find_avg([4,3,33,22,1]);
    	/* 7. Create an array with all the odd integers between 1 and 255 (inclusive).*/
    	var arrayOdd = [];
    	for (var i = 0; i <= 255; i++) {
			if (i % 2 == 0) {
				arrayOdd[i] = i;
				console.log(arrayOdd[i]);
			}
		}
		/* 8. Square each value in a given array, returning that same array with changed values.*/
		function sqrArr(arr){
		    for(var i = 0; i < arr.length; i++){
		        arr[i] = arr[i]*arr[i];
		    }
		    return arr;
		}
		console.log(sqrArr([3,4,6,2,1]));
		/* 9. Given an array and a value Y, count and print the number of array values greater than Y*/
		function greaterY(arr, y){
		    var count = 0;
		    for(var idx = 0; idx < arr.length; idx++){
		        if(arr[idx] > y){
		            count++;
		        }
		    }
		            console.log("There are %d values greater than the Y value of %d", count, y);
		}
		greaterY([4,5,6,7,8,9,10], 7);
		/* 10. Return the given array after setting any negative values to zero.*/
		var arrayNeg = [-1, 2, -4, 5];
		for (var i = 0; i <arrayNeg.length; i++) {
			if (arrayNeg[i] < 0) {
				arrayNeg[i] = 0;
			}
			console.log(arrayNeg[i]);
		}
		/*11. Given an array, print the max, min and average values for that array.*/
		var numbersArray = [1, 2, 3, 4, 0]
		var min = numbersArray[0];
		var max = numbersArray[0];
		var sum = 0;
		var j = 0;
    	for (var i = 0; i < numbersArray.length; i++) {
    		if (max < numbersArray[i]) {
    			max = numbersArray[i];
    		}
    		if (min > numbersArray[i]) {
    			min = numbersArray[i];
    		}
    		sum += numbersArray[i];
    		j++
    	}
    	console.log(max);
    	console.log(min);
    	console.log(sum / j);
    	/* 12. Given an array, move all values forward by one index, dropping the first and leaving a 0 value at the end.*/
			var arr = [3,4,-9,3,100,-32];
			for(var i = 1; i < arr.length; i++)
			{
				arr[i-1] = arr[i];
			}
			arr[arr.length-1] = 0;
			console.log(arr);
	/*13) Given an array of numbers, replace any negative values with the string 'Dojo'.*/
			var arr = [5,3,-10,3,64,-12];
			for(var i = 0; i < arr.length; i++)
			{
				if(arr[i] < 0)
					{arr[i] = "Dojo";}
			}
			console.log(arr);
	</script>
</head>
<body>

</body>
</html>
