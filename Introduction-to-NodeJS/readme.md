# What is NodeJS?

- JavaScript Runtime (NOT a language or a framework);
- Built on the V8 JavaScript Engine (Same as Google Chrome);
- Written in C++;
- Esentially allows us to run JavaScript code on the server;

## Why Use Node?

- Fast, efficient and highly scalable;
- Event driven, non-blocking I/O mdoel;
- Popular in the industry;
- Same language on the front and back end (JS);

## Non-Blocking I/O

- Works on a single thread using non-blocking I/O calls;
- Supports tens of thousands concurrent connections;
- Optimizes throughput & scalability in apps with many I/O operations;
- All of this makes Node.js apps very fas & efficient;

## Node's Event Loop:

- Single Threaded;
- Supports concurrency via events & callbacks;
- EventEmitter class is used to bind events and listeners;

## Best types of the projects for Node:

- REST API & Microservices;
- Real Time Services (Char, Live Updates);
- CRUD Apps - Blogs, Shopping Carts, Social Networks;
- Tools & Utilities;

- Short Answer: Anything that is not CPU intensive;

## NPM - Node Package Manager:

- Install 3rd party packages (frameworks, libraries, tools, etc);
- Packages get stored in the "node_modules" folder;
- All dependencies are listed in a "package.json" file;
- NPM scripts can be created to run certain tasks such as run a server;

Examples:

- Generates a package.json file:
  ```shell
  npm init
  ```
- Installs a package locally:
  ```shell
  npm install express
  ```
- Install a package globally:
  ```shell
  npm install -g nodemon
  ```

## Node Modules:

- Node Core Modules (path, fs, http, etc);
- 3rd party modules/packages installed via NPM;
- Custom modules (files);
  Example:

```javascript
const path = require(`path`);
const myFile = require(`./myFile`);
```
