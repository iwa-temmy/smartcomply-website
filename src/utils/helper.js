export const CurrencySign = '₦';
export const formatAmount = num => {
    if (num) {
        const initial = parseFloat(num).toFixed(0);
        return initial.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
};