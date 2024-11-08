// Define a type for each country option
export interface CountryOption {
    value: string;    // Country code (e.g., 'US')
    label: string;    // Country name (e.g., 'United States')
    flag: string;     // Country flag emoji or icon
}

export const countries = [
    { value: 'US', label: 'United States', flag: 'US' },
    { value: 'CA', label: 'Canada', flag: 'CA' },
    { value: 'GB', label: 'United Kingdom', flag: 'GB' },
    { value: 'FR', label: 'France', flag: 'FR' },
    { value: 'DE', label: 'Germany', flag: 'DE' },
    { value: 'VN', label: 'Vietnam', flag: 'VN' },
    // Add more countries as needed
];