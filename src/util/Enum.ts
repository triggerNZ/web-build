class Enum {
    static enumStringValues<E>(enumObject: object): E[] {
        return Object.keys(enumObject).filter((item) => {
            return isNaN(Number(item));
        }).map(it => it as E);
    }
}