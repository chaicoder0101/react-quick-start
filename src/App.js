import './App.css';
import { useState } from 'react';
import Items from './components/items';

function App() {
	const [
		items,
		setItems
	] = useState({
		items : [
			{ item: 1, length: 32 },
			{ item: 2, length: 435 },
			{ item: 3, length: 65 }
		]
	});
	return (
		<div className='App'>
			<Items items={items.items}> Hello World !</Items>
		</div>
	);
}

export default App;
