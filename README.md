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

# refer
1. [Creating and publishing scoped public packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
