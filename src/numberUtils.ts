export const convertToInt = (data: any): number => {
    if (isNaN(data)) {
        throw new Error('Invalid input: not a number');
    }
    if (data === null || data === undefined) {
        throw new Error('Invalid input: null or undefined');
    }

    if (typeof data === 'number') {
        data = data + '';
    }

    return +parseInt(data);
};

export const convertToTwoDecimalInt = (data: any): number => {
    if (isNaN(data)) {
        throw new Error('Invalid input: not a number');
    }
    if (data === null || data === undefined) {
        throw new Error('Invalid input: null or undefined');
    }

    if (typeof data === 'number') {
        data = data + '';
    }
    return +parseFloat(data).toFixed(2);
};

export const randomNumberWithFixedLength = (length: number): number => {
    if (length <= 0 || !Number.isInteger(length)) {
        throw new Error('Length must be a positive integer.');
    }
    return Math.floor(
        Math.pow(10, length - 1) +
        Math.random() * (9 * Math.pow(10, length - 1))
    );
};
