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

export const logAtLeast5 = (n) => {
	for (var i = 1; i <= Math.max(5, n); i++) {
		console.log(i);
	}
}