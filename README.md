# vue-nuxt-static

> Nuxt.js project for creating universal [Vue.js](https://vuejs.org) Applications

## About

This project uses [Nuxt.js](https://nuxtjs.org/). Nuxt.js is a framework for creating Universal [Vue.js](https://vuejs.org) Applications.

Its main scope is UI rendering while abstracting away the client/server distribution.

Our goal is to create a framework flexible enough so that you can use it as a main project base or in addition to your current project based on Node.js.

Nuxt.js presets all the configuration needed to make your development of a Vue.js Application Server Rendered more enjoyable.

In addition, we also provide another deployment option called: nuxt generate. It will build a Static Generated Vue.js Application. We believe that option could be the next big step in the development of Web Applications with microservices.

As a framework, Nuxt.js comes with a lot of features to help you in your development between the client side and the server side such as Asynchronous Data, Middleware, Layouts, etc.


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