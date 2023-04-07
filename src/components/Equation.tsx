export function Equation({ value }: { value: string }) {
	return (
		<div className="w-full overflow-x-scroll rounded-t-3xl bg-slate-100 p-2 text-right text-5xl tracking-wide">
			{value}
		</div>
	);
}
