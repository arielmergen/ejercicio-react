export const formatNumber = (number = 0, decimals = 2, iso) => {
    const arsformat = new Intl.NumberFormat(iso, { minimumFractionDigits: decimals }).format(number);
    return arsformat.toString();
};

export const numberWithCommas = (number) => {
    return number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
