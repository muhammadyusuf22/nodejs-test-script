# Belajar Testing Node JS

## Yang Perlu diinstall

1. Mocha

    ```bash
    npm i mocha@3.0.0.0 --save-dev
    ```

2. pada package.json tambahkan seperti berikut pada bagian script :

    ```bash
    .....
    "scripts": {
        "test": "mocha **/*.test.js"
    },
    .....
    ```

    untuk menjalankan script test nya dengan cara menjalankan script berikut :
    ```bash
    npm test
    ```

    untuk menjalankan otomatis selama development berlangsung dengan cara :
    ```bash
    nodemon --exec 'npm start'
    ```

    atau menambahkan syntax berikut pada package.json :
    ```bash
    "scripts": {
        "test": "mocha **/*.test.js",
        "test-watch": "nodemon --exec \"npm test\""
    },
    ```

    dan untuk menjalankannya dengan perintah :
    ```bash
    npm run test-watch
    ```

### Catatan :
    "test": "mocha **/*.test.js" ---> Ini merupakan perintah test dan akan menjalankan semua File dengan ekstensi (.test.js)
    Jika ingin spesifik hanya satu file testing yang ingin dijalankan maka ganti menjadi seperti berikut :

    ```bash
    .....
    "scripts": {
        "test": "mocha **/utils.test.js"
    },
    .....
    ```

    Maka hanya akan menjalankan file utils.test.js
