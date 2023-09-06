<h1>Unique Array By Key</h1>
unique array helps you to filter your array easy and fast

<h2>Examples</h2>
```js
const unique = require('unique-array-by-key');

const array = [
    {
        lang: "javascript",
        id: 1
    },
    {
        lang: "typescript",
        id: 2
    },
    {
        lang: "php",
        id: 3
    },
    {
        lang: "c++",
        id: 2
    }
]

unique(array, "id");
// [
//     {
//         lang: "javascript",
//         id: 1
//     },
//     {
//         lang: "typescript",
//         id: 2
//     },
//     {
//         lang: "php",
//         id: 3
//     },
// ]

```

for unique a nested array key

```js
const unique = require('unique-array-by-key');

const array = [
    {
        lang: "javascript",
        id: 1,
        data: {
            code: "foo"
        }
    },
    {
        lang: "typescript",
        id: 2,
        data: {
            code: "foo"
        }
    },
    {
        lang: "php",
        id: 3,
        data: {
            code: "bar"
        }
    },
    {
        lang: "c++",
        id: 2,
        data: {
            code: "baz"
        }
    }
]

unique(array, "data.code");
// [
//     {
//         lang: "javascript",
//         id: 1,
//         data: {
//             code: "foo"
//         }
//     },
//     {
//         lang: "php",
//         id: 3,
//         data: {
//             code: "bar"
//         }
//     },
//     {
//         lang: "c++",
//         id: 2,
//         data: {
//             code: "baz"
//         }
//     }
// ]

```

## Usage

#### `require('unique-array')( array, key )`
Return unique elements of an input array.