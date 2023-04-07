export function Key(props: iKey) {
	const value =
		props.current !== '0'
			? props.current + props.value
			: props.value;
	return (
		<button
			className={`key ${props.className} hover:drop-shadow-xl`}
			onClick={
				props.onClick
					? props.onClick
					: () => [
							props.press(value),
							props.result && props.result(value),
					  ]
			}
		>
			{props.value}
		</button>
	);
}

interface iKey {
	value: string;
	className?: string;
	onClick?: () => void;
	press: React.Dispatch<React.SetStateAction<string>>;
	result?: (value: string) => void;
	current: string;
}
