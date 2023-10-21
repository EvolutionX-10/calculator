import { useState } from 'react';
import { Display } from './Display';
import { Keypad } from './Keypad';

export function Calculator() {
	const [display, setDisplay] = useState('0');
	const [result, setResult] = useState('');

	return (
		<div className="flex w-85 flex-col items-center justify-center rounded-3xl bg-purple-100 p-3 shadow-cus dark:shadow-lg dark:shadow-[#5f3989] backdrop-blur-3xl dark:bg-gray-900">
			<Display value={display} result={result}></Display>
			<Keypad
				onPress={setDisplay}
				value={display}
				result={result}
				onEqual={setResult}
			/>
		</div>
	);
}
