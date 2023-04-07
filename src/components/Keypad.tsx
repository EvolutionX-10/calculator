import { Key } from './Key';
export function Keypad({
	onPress,
	value,
	result,
	onEqual,
}: {
	onPress: React.Dispatch<React.SetStateAction<string>>;
	value: string;
	result: string;
	onEqual: React.Dispatch<React.SetStateAction<string>>;
}) {
	let newresult: string;
	const backspace =
		value.length > 1 ? value.slice(0, -1) : '0';
	const update = (value: string) => {
		try {
			newresult = eval(value);
		} catch {
			newresult = result;
		}
		if (+value === +newresult) onEqual('');
		else onEqual(newresult);
	};
	return (
		<div className="grid grid-cols-4 gap-2 gap-x-5">
			<Key
				value="Ac"
				press={onPress}
				onClick={() => [onPress('0'), onEqual('')]}
				current={value}
			></Key>
			<Key
				value="⌫"
				press={onPress}
				current={value}
				onClick={() => [
					onPress(backspace),
					update(backspace),
				]}
			></Key>
			<Key
				value="/"
				className="bg-blue-200 pb-1 text-blue-500"
				press={onPress}
				current={value}
				result={update}
			></Key>
			<Key
				value="*"
				className="t bg-blue-200 pt-2 text-blue-500"
				press={onPress}
				current={value}
				result={update}
			></Key>
			<Key
				value="7"
				press={onPress}
				current={value}
				className="text-blue-500"
				result={update}
			></Key>
			<Key
				value="8"
				press={onPress}
				current={value}
				className="text-blue-500"
				result={update}
			></Key>
			<Key
				value="9"
				press={onPress}
				current={value}
				className="text-blue-500"
				result={update}
			></Key>
			<Key
				value="-"
				className="bg-blue-200 pb-2 text-blue-500"
				press={onPress}
				current={value}
				result={update}
			></Key>
			<Key
				value="4"
				press={onPress}
				current={value}
				className="text-blue-500"
				result={update}
			></Key>
			<Key
				value="5"
				press={onPress}
				current={value}
				className="text-blue-500"
				result={update}
			></Key>
			<Key
				value="6"
				press={onPress}
				current={value}
				className="text-blue-500"
				result={update}
			></Key>
			<Key
				value="+"
				className="bg-blue-200 pb-2 text-blue-500"
				press={onPress}
				current={value}
				result={update}
			></Key>
			<Key
				value="1"
				press={onPress}
				current={value}
				className="text-blue-500"
				result={update}
			></Key>
			<Key
				value="2"
				press={onPress}
				current={value}
				className="text-blue-500"
				result={update}
			></Key>
			<Key
				value="3"
				press={onPress}
				current={value}
				className="text-blue-500"
				result={update}
			></Key>
			<Key
				className="row-span-2 h-full bg-blue-500 text-white shadow-cus"
				value="="
				press={onPress}
				onClick={() => {
					let result;
					try {
						result = eval(value);
					} catch {
						alert('Invalid Expression');
						result = '0';
					}
					onEqual('');
					onPress(result);
				}}
				current={value}
			></Key>
			<Key
				value="0"
				className="col-span-2 w-full text-blue-500"
				press={onPress}
				current={value}
				result={update}
			></Key>
			<Key
				value="."
				press={onPress}
				current={value}
				className="text-blue-500"
				result={update}
			></Key>
		</div>
	);
}
