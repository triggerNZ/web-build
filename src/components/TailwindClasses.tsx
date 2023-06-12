import {TailwindClass} from '@/app/types';

interface Props {
	classes: TailwindClass[];
	setClasses: (cs: TailwindClass[]) => void;
}

export function TailwindClasses(props: Props): JSX.Element {
	return <form>
        <label>Text Size:
            <select>
                
            </select>
        </label>
    </form>;
}
