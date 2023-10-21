import { MdBackspace } from 'react-icons/md';

export function Key(props: iKey) {
	const value =
		props.current !== '0'
			? props.current + props.value
			: props.value;
	return (
		<button
			className={`${
				props.className ??
				'box-border flex h-16 w-16 items-center justify-center rounded-2xl bg-fuchsia-50 text-3xl backdrop-blur-lg text-fuchsia-500 dark:bg-fuchsia-700 dark:text-fuchsia-300'
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
			{props.icon ? <MdBackspace className='text-fuchsia-500 dark:text-fuchsia-200'/> : props.value}
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
	icon?: true;
}
