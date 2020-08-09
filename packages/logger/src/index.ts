/**
 * Checks if given value is null or undefined or whitespace string
 * @param {string?} value 
 */
exports.isNullOrWhitespace = (value: any) => value === undefined || value === null || !value.trim();
