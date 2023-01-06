export const handleNull = (value) => {
    if (value === null || value === undefined) {
        return null;
    } else {
        if (value.current === null || value.current === undefined) {
            return null;
        } else {
            return parseInt(value.current.value);
        }
    }
}
