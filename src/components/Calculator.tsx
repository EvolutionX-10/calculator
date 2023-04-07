import { useState } from 'react';
import { Display } from './Display';
import { Keypad } from './Keypad';

export function Calculator() {
	const [display, setDisplay] = useState('0');

	return (
		<div className="flex flex-col items-center justify-center rounded-3xl bg-slate-100 p-3 shadow-cus backdrop-blur-3xl w-85">
			<Display value={display}></Display>
			<Keypad onPress={setDisplay} value={display}/>
		</div>
	);
}
