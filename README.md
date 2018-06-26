# CODERS-LOGGER
The Coders-Logger is a easy way to write beautiful logging information in the your terminal.

### Installation
```sh
# Using Node Package Manager
npm i -S coders-logger

# Using Yarn
yarn add coders-logger
```

## Example of normal log
```js
//This is in JavaScript

const logger = require('coders-logger');

logger.success('Text');
logger.error('Text');
logger.alert('Text');
logger.warning('Text');
logger.debug('Text');
```

## Example of custom log

```js
//This is in Javascript
const logger = require('coders-logger');

logger.custom.success('Title', 'Text');
logger.custom.error('Title', 'Text');
logger.custom.alert('Title', 'Text');
logger.custom.warning('Title', 'Text');
logger.custom.debug('Title', 'Text');
```

### Author
* **Dev4m1** - [Coderslight](https://coderslight.com)