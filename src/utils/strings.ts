const LIMIT = 50;
export const shortenTitle = (text: string) => (text.length > LIMIT ? `${text.slice(0, LIMIT)}...` : text);
