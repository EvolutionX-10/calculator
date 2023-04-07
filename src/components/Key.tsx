export function Key(props: iKey) {
	return (
		<button
			className={`key ${props.className} hover:drop-shadow-xl`}
			onClick={
				props.onClick
					? props.onClick
					: () =>
							props.press(
								props.current !== '0'
									? props.current + props.value
									: props.value
							)
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
	current: string;
}
