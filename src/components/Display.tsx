import { Result } from './Result';
import { Equation } from './Equation';

export function Display({
	value,
	eq,
}: {
	value: string;
	eq?: string;
}) {
	return (
		<div className="relative flex h-56 w-full items-center justify-center">
			<Equation eq={eq} />
			<Result value={value} />
		</div>
	);
}
