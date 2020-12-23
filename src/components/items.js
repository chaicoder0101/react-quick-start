import React from 'react';

export default function items(props) {
	return (
		<div>
			<p>{props.items.map((item) => item.item)}</p>
			<p>{props.children}</p>
		</div>
	);
}
