export function Result({ value }: { value: string }) {
	return (
		<div className="w-full rounded-t-3xl bg-slate-100 p-2 text-right text-5xl tracking-wide overflow-x-scroll">
			{value}
		</div>
	);
}
