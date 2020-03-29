/*******************************************************************************************************
Count the number of prime numbers less than a non-negative number, n.
*******************************************************************************************************/

var countPrimes = function (n) {
	let notPrimes = new Array(n);
	for (let i = 0; i < n; i++) {
		notPrimes[i] = false;
	}
	let res = 0;
	for (let i = 2; i < n; i++) {
		if (notPrimes[i] === false) {
			res++;
			for (let j = 2; i * j < n; j++) {
				notPrimes[i * j] = true;
			}
		}
	}
	return res;
};
