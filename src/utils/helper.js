// --- Helper Function for Currency Formatting ---
export const formatCurrency = (value) => {
    // Basic formatting, consider using Intl.NumberFormat for better localization
    return `$ ${value.toLocaleString('en-US')}`;
  };