export class Enum {
    static enumStringValues<E>(enumObject: any): E[] {
        return Object.keys(enumObject).filter((item) => {
            return isNaN(Number(item));
        }).map(it => enumObject[it] as E);
    }
}