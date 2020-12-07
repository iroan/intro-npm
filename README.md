My first public npm package project. Simplest NPM package (no dependencies on third-party packages.

# project structure:
```
➜  intro-npm git:(main) ✗ tree 
.
├── LICENSE
├── README.md
├── index.js // source code 
├── index.test.js // test file
└── package.json // used by npm or yarn

0 directories, 5 files
```
# dev 
1. local test: `npm install path(absolutly)`
1. publish: `npm publish --access public`

# usage
1. npm install @wangkaixuan/intro-npm
1. 
    ```js
    const myadd = require('@wangkaixuan/intro-npm');
    console.log('myadd:', myadd.add(1, 1));
    ```

1. simple usage
```js
➜  use-intro-npm1 npm init --yes
Wrote to /Users/wangkaixuan/playground/use-intro-npm1/package.json:

{
  "name": "use-intro-npm1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


➜  use-intro-npm1 npm install @wangkaixuan/intro-npm
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN use-intro-npm1@1.0.0 No description
npm WARN use-intro-npm1@1.0.0 No repository field.

+ @wangkaixuan/intro-npm@1.3.0
added 1 package from 1 contributor and audited 1 package in 2.471s
found 0 vulnerabilities

➜  use-intro-npm1 touch index.js
➜  use-intro-npm1 ls
index.js          node_modules      package-lock.json package.json
➜  use-intro-npm1 cat index.js  
const myadd = require('@wangkaixuan/intro-npm');
console.log('myadd:', myadd.add(1, 1));                                                                                                 
➜  use-intro-npm1 node index.js 
myadd: 2
```
# refer
1. [Creating and publishing scoped public packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
