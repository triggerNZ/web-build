import {EditEvent, WebContent} from '@/app/types';
import {useEffect, useRef} from 'react';

export function EditContent(props: {
	content: WebContent;
	onEdit: (ev: EditEvent) => void;
}): JSX.Element {
	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		inputRef.current?.focus();
	});

	if (props.content.contentTag === 'text') {
		return (
			<input
				ref={inputRef}
				type="text"
				value={props.content.content}
				onClick={e => e.stopPropagation()}
				onChange={evt => props.onEdit(EditEvent(evt.target.value))}
			></input>
		);
	} else return <></>;
}
