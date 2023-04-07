import './App.css';
import { Calculator } from './components/Calculator';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
	return (
		<>
			<Calculator />
			<Analytics />
		</>
	);
}
