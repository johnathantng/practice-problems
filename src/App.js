import React from 'react';

import { addUpTo } from './components/Functions';

import './App.css';

function App() {
//WORKSPACE
	var t1 = performance.now();
	addUpTo(10000000);
	var t2 = performance.now();
	console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
//WORKSPACE
	return (
		<div className="welcome-msg"> Open The Console To See Your Work! </div>
	);
}

export default App;