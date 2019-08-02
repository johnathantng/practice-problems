export const addUpTo = (n) => {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

export const addUpTo2 = (n) => {
	return n * (n + 1) / 2;
}

export const logAtLeast5 = (n) => {		//	O(n) will scale proportionally to the value of n
	for (var i = 1; i <= Math.max(5, n); i++) {
		console.log(i);
	}
}

export const logAtMost5 = (n) => {		//	Big O will be constant == O(1)
	for (var i = 1; i <= Math.min(5, n); i++) {
		console.log(i);
	}
}

//	SPACE COMPLEXITY

export const sum = (arr) => {		//	not creating a new variable == just means we will have constant space! O(1)
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
}