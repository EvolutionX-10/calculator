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
	const commoncss =
		' box-border h-16 w-16 rounded-2xl text-3xl backdrop-blur-lg';
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
				className={
					'bg-blue-200 text-blue-500 dark:bg-blue-700 dark:text-blue-300' +
					commoncss
				}
				press={onPress}
				current={value}
				result={update}
			></Key>
			<Key
				value="*"
				className={
					'bg-blue-200 pt-3 text-blue-500 dark:bg-blue-700 dark:text-blue-300' +
					commoncss
				}
				press={onPress}
				current={value}
				result={update}
			></Key>
			<Key
				value="7"
				press={onPress}
				current={value}
				className={
					'bg-white text-blue-500 dark:bg-gray-800' +
					commoncss
				}
				result={update}
			></Key>
			<Key
				value="8"
				press={onPress}
				current={value}
				className={
					'bg-white text-blue-500 dark:bg-gray-800' +
					commoncss
				}
				result={update}
			></Key>
			<Key
				value="9"
				press={onPress}
				current={value}
				className={
					'bg-white text-blue-500 dark:bg-gray-800' +
					commoncss
				}
				result={update}
			></Key>
			<Key
				value="-"
				className={
					'bg-blue-200 text-blue-500 dark:bg-blue-700 dark:text-blue-300' +
					commoncss
				}
				press={onPress}
				current={value}
				result={update}
			></Key>
			<Key
				value="4"
				press={onPress}
				current={value}
				className={
					'bg-white text-blue-500 dark:bg-gray-800' +
					commoncss
				}
				result={update}
			></Key>
			<Key
				value="5"
				press={onPress}
				current={value}
				className={
					'bg-white text-blue-500 dark:bg-gray-800' +
					commoncss
				}
				result={update}
			></Key>
			<Key
				value="6"
				press={onPress}
				current={value}
				className={
					'bg-white text-blue-500 dark:bg-gray-800' +
					commoncss
				}
				result={update}
			></Key>
			<Key
				value="+"
				className={
					'bg-blue-200 text-blue-500 dark:bg-blue-700 dark:text-blue-300' +
					commoncss
				}
				press={onPress}
				current={value}
				result={update}
			></Key>
			<Key
				value="1"
				press={onPress}
				current={value}
				className={
					'bg-white text-blue-500 dark:bg-gray-800' +
					commoncss
				}
				result={update}
			></Key>
			<Key
				value="2"
				press={onPress}
				current={value}
				className={
					'bg-white text-blue-500 dark:bg-gray-800' +
					commoncss
				}
				result={update}
			></Key>
			<Key
				value="3"
				press={onPress}
				current={value}
				className={
					'bg-white text-blue-500 dark:bg-gray-800' +
					commoncss
				}
				result={update}
			></Key>
			<Key
				className="dark:bg-blue row-span-2 box-border h-full w-16 rounded-2xl bg-blue-500 text-3xl text-white shadow-cus backdrop-blur-lg dark:shadow-none"
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
				className="col-span-2 box-border h-16 w-full rounded-2xl bg-white text-3xl text-blue-500 backdrop-blur-lg dark:bg-gray-800"
				press={onPress}
				current={value}
				result={update}
			></Key>
			<Key
				value="."
				press={onPress}
				current={value}
				className={
					'bg-white text-blue-500 dark:bg-gray-800' +
					commoncss
				}
				result={update}
			></Key>
		</div>
	);
}
