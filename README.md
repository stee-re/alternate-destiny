# Alternate Destiny Website

This repository contains the source code for the [Alternate Destiny Website](https://put.address.here.com) website, built using [VitePress](https://vitepress.vuejs.org/).

Pages are written in Markdown and converted to a static site using VitePress static site generator using the default theme.

Configuration can be found in `.vitepress/config.mts`
All deployed MD files can be found in `src/`

## Installation

```sh
npm install
```

## Locally developing and testing

```sh
npm run start
```

## Building the static site locally and testing the bundle

```sh
npm run bundle
npm run preview
```

## Deployment

Each time a commit is pushed to the `main` branch, GitHub Actions will automatically build and deploy the site to GitHub Pages. The site will be available at:

```
https://put.address.here.com
```
