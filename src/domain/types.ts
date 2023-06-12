import { TailwindClass } from "./tailwind";

export type EditEvent = EditText

export function EditEvent(newText: string): EditText {
	return { contentTag: "text", newText }
}


interface EditText { contentTag: 'text', newText: string; }

export type WebContent = Text;

export interface Text {
	contentTag: 'text',
	content: string;
	classes: TailwindClass[]

}

export function Text(s: string, classes: TailwindClass[] = []): Text {
	return { content: s, contentTag: 'text', classes };
}

