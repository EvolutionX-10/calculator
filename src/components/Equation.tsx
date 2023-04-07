export function Equation({ value }: { value: string }) {
	return (
		<div className="w-full overflow-x-auto p-2 text-right text-5xl tracking-wide dark:text-white">
			{value}
		</div>
	);
}
