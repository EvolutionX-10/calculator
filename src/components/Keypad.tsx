import { Key } from './Key';
export function Keypad({
	onPress,
	value,
}: {
	onPress: React.Dispatch<React.SetStateAction<string>>;
	value: string;
}) {
	return (
		<div className="grid grid-cols-4 gap-2 gap-x-5">
			<Key
				value="Ac"
				press={onPress}
				onClick={() => onPress('0')}
				current={value}
			></Key>
			<Key
				value="⌫"
				press={onPress}
				current={value}
				onClick={() =>
					onPress(
						value.length > 1 ? value.slice(0, -1) : '0'
					)
				}
			></Key>
			<Key
				value="/"
				className="bg-blue-200 pb-1 text-blue-500"
				press={onPress}
				current={value}
			></Key>
			<Key
				value="*"
				className="t bg-blue-200 pt-2 text-blue-500"
				press={onPress}
				current={value}
			></Key>
			<Key
				value="7"
				press={onPress}
				current={value}
				className="text-blue-500"
			></Key>
			<Key
				value="8"
				press={onPress}
				current={value}
				className="text-blue-500"
			></Key>
			<Key
				value="9"
				press={onPress}
				current={value}
				className="text-blue-500"
			></Key>
			<Key
				value="-"
				className="bg-blue-200 pb-2 text-blue-500"
				press={onPress}
				current={value}
			></Key>
			<Key
				value="4"
				press={onPress}
				current={value}
				className="text-blue-500"
			></Key>
			<Key
				value="5"
				press={onPress}
				current={value}
				className="text-blue-500"
			></Key>
			<Key
				value="6"
				press={onPress}
				current={value}
				className="text-blue-500"
			></Key>
			<Key
				value="+"
				className="bg-blue-200 pb-2 text-blue-500"
				press={onPress}
				current={value}
			></Key>
			<Key
				value="1"
				press={onPress}
				current={value}
				className="text-blue-500"
			></Key>
			<Key
				value="2"
				press={onPress}
				current={value}
				className="text-blue-500"
			></Key>
			<Key
				value="3"
				press={onPress}
				current={value}
				className="text-blue-500"
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
					onPress(result);
				}}
				current={value}
			></Key>
			<Key
				value="0"
				className="col-span-2 w-full text-blue-500"
				press={onPress}
				current={value}
			></Key>
			<Key
				value="."
				press={onPress}
				current={value}
				className="text-blue-500"
			></Key>
		</div>
	);
}
