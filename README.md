# modern-number-utils
A collection of modern utility functions for handling numbers in JavaScript and TypeScript .

## Installation

You can install modern-number-utils using npm:

```bash
 npm install modern-number-utils
```

## Usage


### convertToInt(data: any): number
Converts the input to an integer. Validates that the input is a valid number.
```javascript
import { convertToInt } from 'modern-number-utils';

const result = convertToInt('42');
console.log(result); // 42

```
### convertToTwoDecimalInt(data: any): number
Converts the input to a number with two decimal places. Validates that the input is a valid number.
```javascript
import { convertToTwoDecimalInt } from 'modern-number-utils';

const result = convertToTwoDecimalInt('42.123');
console.log(result); // 42.12


```
### randomNumberWithFixedLength(length: number): number
Generates a random number with the specified length (number of digits).
```javascript
import { randomNumberWithFixedLength } from 'modern-number-utils';

const result = randomNumberWithFixedLength(5);
console.log(result); // Random number with 5 digits




```


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.


## License

[MIT](https://choosealicense.com/licenses/mit/)