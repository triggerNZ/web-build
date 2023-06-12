
export type EditEvent = EditText

export function EditEvent(newText: string):EditText {
	return {contentTag: "text", newText}
}


interface EditText {   contentTag: 'text', newText: string;}

export type WebContent = Text;

export interface Text {
    contentTag: 'text',
	content: string;
	classes: TailwindClass[]
	
}

export function Text(s: string, classes: TailwindClass[] = []): Text {
	return {content: s, contentTag: 'text', classes};
}


export type TailwindClass = TextClass;
export enum TextClass {
	Xs = "text-xs", Sm = "text-sm", Base = "text-base", Lg = "text-lg", Xl = "text-xl", Xl2 = "text-2xl", Xl3 = "text-3xl", Xl4 = "text-4xl", Xl5 = "text-5xl", Xl6 = "text-6xl", Xl7 = "text-7xl", XL8 = "text-8xl", XL9 = "text-9xl" 
}