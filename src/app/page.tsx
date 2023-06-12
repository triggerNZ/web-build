'use client';

import { PreviewContent } from '@/components/PreviewContent';
import { EditEvent, TailwindClass, Text, WebContent } from '../domain/types';
import { Dispatch, SetStateAction, useState } from 'react';
import { EditContent } from '@/components/EditContent';
import { TailwindClasses } from '@/components/TailwindClasses';

interface State {
	content: WebContent;
	editing: boolean;
}

function onEdit(evt: EditEvent, modState: Dispatch<SetStateAction<State>>) {
	if (evt.contentTag === 'text') {
		modState(s => {
			switch (s.content.contentTag) {
				case 'text':
					return { ...s, content: Text(evt.newText) };
			}
		});
	}
}

function setClasses(
	classes: TailwindClass[],
	modState: Dispatch<SetStateAction<State>>,
) {
	modState(s => ({ ...s, content: { ...s.content, classes } }));
}

export default function Home() {
	const [state, modState] = useState<State>({
		content: Text('Hello, World!'),
		editing: false,
	});

	return (
		<main className="min-h-screen flex flex-col">
			<div className="h-12 bg-green-200"></div>
			<div className="flex flex-row flex-grow">
				<div className="w-12 bg-pink-200"></div>
				<div
					className="w-1/2 p-4"
					onClick={e => {
						console.log('clicked outside');
						modState(s => ({ ...s, editing: false }));
					}}
				>
					{state.editing ? (
						<EditContent
							content={state.content}
							onEdit={e => onEdit(e, modState)}
						/>
					) : (
						<PreviewContent
							content={state.content}
							onStartEditing={() => modState(s => ({ ...s, editing: true }))}
						/>
					)}
				</div>
				<div className="w-1/2 bg-orange-300">
					<TailwindClasses
						classes={state.content.classes}
						setClasses={cs => setClasses(cs, modState)}
					/>
				</div>
			</div>
		</main>
	);
}
