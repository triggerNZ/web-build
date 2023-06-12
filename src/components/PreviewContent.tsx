import {WebContent} from '@/app/types';

interface Props {
	content: WebContent;
	onStartEditing: () => void;
}

export function PreviewContent(props: Props): JSX.Element {
	if (props.content.contentTag === 'text') {
		return (
			<span
				autoFocus
				onClick={e => {
					e.stopPropagation();
					props.onStartEditing();
				}}
			>
				{props.content.content}
			</span>
		);
	} else return <></>;
}
