import { TextClass } from '@/domain/types';
import { TailwindClass } from '@/domain/types';
import { Enum } from '@/util/Enum';

interface Props {
    classes: TailwindClass[];
    setClasses: (cs: TailwindClass[]) => void;
}

export function TailwindClasses(props: Props): JSX.Element {
    const textClasses = Enum.enumStringValues<TextClass>(TextClass);
    const noneSelected = props.classes
    return <form>
        <label>Text Size:
            <select>
                <option></option>
                {
                    textClasses.map(e => {
                        return <option value={e}>{e}</option>
                    })
                }
            </select>
        </label>
    </form>;
}
