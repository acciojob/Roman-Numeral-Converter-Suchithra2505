function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let result = '';

    for (let key in obj) {
        while (num >= obj[key][1]) {
            result += obj[key][0];
            num -= obj[key][1];
        }

        // Check for subtractive notation (e.g., IV, XL, XC)
        if (key % 2 === 0 && key < 6) {
            let nextKey = parseInt(key) + 2;
            let nextSymbol = obj[nextKey][0];

            if (
                num >= obj[key][1] - obj[nextKey][1] &&
                num < obj[key][1]
            ) {
                result += nextSymbol + obj[key][0];
                num -= obj[key][1] - obj[nextKey][1];
            }
        }
    }

    return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
