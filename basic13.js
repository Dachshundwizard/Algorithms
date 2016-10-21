<!DOCTYPE html>
<html>
<head>
	<title>Algorithms</title>
	<script type="text/javascript">
		/* 1. Print all the integers from 1 to 255.*/
		for (var i = 1; i <= 255; i++) {
			console.log(i);
		}
		/* 2. Print all odd integers from 1 to 255.*/
		for (var i = 1; i <= 255; i++) {
			if (i % 2 == 0) {
				console.log(i);
			}
		}
		/* 3. Print integers from 0 to 255, and with each integer print the sum so far.*/
		var sum = 0;
		for (var i = 0; i <= 255; i++) {
			sum += i;
			console.log(i +  " " + (sum));
		}
		/* 4. Iterate through a given array, printing each value.*/
		var numbers = [1, 2, 3, 4, 5, 6];
		var arrayLength = numbers.length;
		for (var i = 0; i < arrayLength; i++) {
    		console.log(numbers[i]);
    	}
    	/* 5. Given an array, find and print its largest element*/
    	var maxElement = numbers[0];
    	for (var i = 0; i < arrayLength; i++) {
    		if (maxElement < numbers[i]) {
    			maxElement = numbers[i];
    		}
    	}
    	console.log(maxElement);
    	/* 6. Analyze an array’s values and print the average.*/
    	var average = 0;
    	var count = 0;
    	for (var i = 0; i < arrayLength; i++) {
    		average += numbers[i];
    		count++;
    	}
    	console.log(average/count);
    	/* 7. Create an array with all the odd integers between 1 and 255 (inclusive).*/
    	var arrayOdd = [];
    	for (var i = 0; i <= 255; i++) {
			if (i % 2 == 0) {
				arrayOdd[i] = i;
				console.log(arrayOdd[i]);
			}
		}
		/* 8. Square each value in a given array, returning that same array with changed values.*/
		var squareNum = [];
		for (var i = 0; i < squareNum.length; i++) {
			numbers[i] = squareNum[i*i];
		}
		/* 9. Given an array and a value Y, count and print the number of array values greater than Y*/
		var y = 1;
		var countarray =0;
		for (var i = 0; i <arrayLength; i++) {
			if (numbers[i] < y) {
				countarray++;
			}
		}
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
