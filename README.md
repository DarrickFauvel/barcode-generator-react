# redTool

A mobile web app to help team members on the job at a nation-wide North American retail store with a red bullseye logo.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [Running this project locally](#running-this-project-locally)
  - [Live version](#live-version)
  - [From repo](#from-repo)
- [Dependencies](#dependencies)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

When a team member is scanning barcode labels with a store-issued mobile device, sometimes the label is damaged or obstructed and cannot be scanned. This is a big problem when the team member is picking a batch of orders and is under a time constraint to complete the batch on-time. ⌚

Since it takes too much time to print out a new label and only a few team members know how to print backroom shelf labels, a convenient tool is needed to generate a valid barcode on-the-spot.

Also, there are times when a grocery order requires multiple individual bananas, peaches, .etc with no attached barcodes. This is a problem when doing the final prep of an order where you must scan each individual item to complete the order. When no barcode is available, an available slow option is to manually type the DPCI code multiple times and maybe use copy-and-paste. 😟

Enter redTool! The web app that provides these simple features:

- Generate a valid scannable barcode instantly.
- Provide handy produce barcodes to help complete grocery batches more efficiently.
- ...and there is nothing to download and install. It's a web app!

### Screenshots

---

Home screen

<img src="https://raw.githubusercontent.com/DarrickFauvel/redtool/main/public/screenshots/00-home-screen.png" width="300" />

---

Barcode Generator screen

<img src="https://raw.githubusercontent.com/DarrickFauvel/redtool/main/public/screenshots/01-generator-screen.png" width="300" />

---

Produce Codes screen

<img src="https://raw.githubusercontent.com/DarrickFauvel/redtool/main/public/screenshots/02-produce-screen.png" width="300" />

---

Produce Codes - Barcode screen

<img src="https://raw.githubusercontent.com/DarrickFauvel/redtool/main/public/screenshots/02a-produce-modal-screen.png" width="300" />

### Links

- Code: [https://github.com/DarrickFauvel/redtool](https://github.com/DarrickFauvel/redtool)
- Live Site URL: [https://redtool.darrickdevelops.com/](https://redtool.darrickdevelops.com/)

## Running this project locally

### Live version

[redtool.darrickdevelops.com](https://redtool.darrickdevelops.com/)

### From repo:

1. Clone this project locally
1. Run `npm install` in your bash / command line
1. Run `npm run dev` in your bash / command line
1. Go to the local web address displayed in the terminal

## Dependencies

- react
- react-barcode
- react-dom
- react-router-dom
- @nanostores/react
- nanostores
- normalize.css

Dev dependencies

- @types/react
- @types/react-dom
- @vitejs/plugin-react
- @vitest/coverage-c8
- postcss
- postcss-preset-env
- vite
- vitest

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- React
- [React Barcode](https://github.com/kciter/react-barcode) - a barcode render package
- [Nanostores](https://github.com/nanostores/nanostores) - a tiny state manager
- [Vite](https://vitejs.dev/) - Superfast bundling tool
- [AWS Amplify](https://aws.amazon.com/amplify/) - CI/CD and web hosting
- [Namecheap](https://www.namecheap.com/) - Domain name service

### What I learned

I learned to use the React Barcode package on this project. It was fairly easy to use and I look forward to using more of its features. I also learned how to host this project on AWS Amplify and map the redtool sub-domain to it.

### Continued development

I would like to tap into the store web API so I don't have to manually add new produce items.

### Useful resources

- React Barcode [https://github.com/kciter/react-barcode](https://github.com/kciter/react-barcode)
- Adobe QR Code Generator [https://express.adobe.com/tools/qr-code-generator](https://express.adobe.com/tools/qr-code-generator)

## Author

- Darrick Develops - [darrickdevelops.com](https://darrickdevelops.com)
- LinkedIn - [https://www.linkedin.com/in/darrickfauvel](https://www.linkedin.com/in/darrickfauvel)
- GitHub - [https://github.com/DarrickFauvel](https://github.com/DarrickFauvel)
