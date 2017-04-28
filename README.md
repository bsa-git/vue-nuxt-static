# vue-nuxtjs-static

> Nuxt.js project to create static sites

## About

This project uses [Nuxt.js](http://feathersjs.com). This is framework for server-rendered React applications.
I used a free template [Osahan - Free Responsive Business Bootstrap Template](https://graygrids.com/item/osahan-free-responsive-business-bootstrap-template/)
to demonstrate some of the features this framework.

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

2. Clone or download [vue-nuxt-static](https://github.com/bsa-git/vue-nuxt-static) project with git.

3. Install your dependencies

```bash
cd <project-name>
npm install # Or yarn install
```

4. Environment variables

Add file "env.js" to your project to set user environment variables. See the sample file "env.example.js".

5. Start your app

```bash
npm run dev
```

6. The application is now running on http://localhost:3000

## Production

```bash
npm run build
npm start
```

## Generate static project

```bash
npm run generate
```

When building your application it will generate the HTML of every of your routes to store it in a file.

Example:

```bash
-| pages/
----| about.vue
----| index.vue
```

Will generate:

```bash
-| dist/
----| about/
------| index.html
----| index.html
```

This way, you can host your generated web application on any static hosting!

## Help

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).