### Shared Logic Between Services

<br/>

![Application](/img/pic-12-01.png?raw=true)

<br/>

### Options for Code Sharing

<br/>

![Application](/img/pic-12-02.png?raw=true)

<br/>

![Application](/img/pic-12-03.png?raw=true)

<br/>

### NPM Organizations

<br/>

![Application](/img/pic-12-04.png?raw=true)

<br/>

npmjs --> create organization

<br/>

![Application](/img/pic-12-05.png?raw=true)

<br/>

### Publishing NPM Modules

    $ cd app
    $ mkdir common
    $ cd common/
    $ npm init -y

<br/>

    $ git init
    $ git add .
    $ git commit -m "initial commit"

<br/>

    $ npm login
    $ npm publish --acces public

<br/>

### Project Setup

    $ tsc --init
    $ npm install --save-dev typescript del-cli

<br/>

**tsconfig.json**

    "declaration": true
    "outDir": "./build"

<br/>

    $ npm run build

<br/>

### An Easy Publish Command

<br/>

    $ npm version patch
    $ npm run build

<br/>

### Relocating Shared Code

```
auth/src/errors copy to common/src/errors
auth/src/middlewares copy to common/src/middlewares
```

    $ npm install --save \
    express \
    express-validator \
    cookie-session \
    jsonwebtoken \
    @types/cookie-session \
    @types/express \
    @types/jsonwebtoken

<br/>

    $ tsc

<br/>

    $ npm run publish

<br/>

### Updating Import Statements

    $ cd auth
    $ npm install --save @adi-microservices/common

<br/>

### Updating the Common Module

    $ cd auth
    $ npm update @adi-microservices/common

---

<br/>