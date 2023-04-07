export function Key(props: iKey) {
	const value =
		props.current !== '0'
			? props.current + props.value
			: props.value;
	return (
		<button
			className={`${
				props.className ??
				'box-border h-16 w-16 rounded-2xl bg-white text-3xl backdrop-blur-lg'
			} hover:drop-shadow-xl`}
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
