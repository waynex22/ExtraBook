export const formattedNumber = (number) => {
    return number.toLocaleString().replace(/,/g, '.')
}