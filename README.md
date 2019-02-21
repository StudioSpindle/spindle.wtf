# Spindle.wtf [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)[![Build Status](https://travis-ci.org/StudioSpindle/spindle.wtf.svg?branch=master)](https://travis-ci.org/StudioSpindle/spindle.wtf)

## Usage

This app is based on [NodeJS](https://nodejs.org/en/) and uses [NextJS](https://nextjs.org/).

Advantages of Next.js are:
- Server-rendered by default
- Automatic code splitting for faster page loads
- Simple client-side routing (page based)
- Webpack-based dev environment which supports (HMR)
- Able to implement with Express or any other Node.js HTTP server
- Customizable with your own Babel and Webpack configurations

### Installation

Install all dependencies

```bash
$ npm i
```

### Start development server

```bash
$ npm run dev
```

Now the application can be visited navigating to `localhost:3000`. 

### Formatting

Formatting is done by [Prettier](https://prettier.io). 

To check any formatting errors run:
```bash 
$ npm run prettier:check
```

To fix these formatting errors use:
```bash 
$ npm run prettier:fix
```

### Deployment

Deployment is done via [ZEIT Now](https://zeit.co/docs).
