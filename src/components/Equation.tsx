export function Equation({ eq }: { eq?: string }) {
	return (
		<div className="absolute right-0 top-0 p-3">
			{eq ?? ''}
		</div>
	);
}
