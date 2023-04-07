import { Result } from './Result';
import { Equation } from './Equation';

export function Display({
	value,
	result,
}: {
	value: string;
	result: string;
}) {
	return (
		<div className="relative flex h-56 w-full flex-col items-center justify-center">
			<Equation value={value} />
			<Result value={result} />
		</div>
	);
}
