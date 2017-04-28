<template>
      <nav role="navigation" class="navbar navbar-inverse osahan-header" >
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <nuxt-link class="exotic navbar-brand flipInY animated" to="/" data-wow-duration="7s" style="visibility: visible; animation-duration: 7s; animation-name: flipInY;">
              <i class="fa fa-cog" aria-hidden="true"></i> NuxtStatic
            </nuxt-link>
          </div>
          <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li data-wow-duration="1s" class="flipInY animated" style="visibility: visible; animation-duration: 1s; animation-name: flipInY;">
                <nuxt-link :class="{ 'active': $route.name == 'index' }" to="/"><i class="fa fa-home"></i> Home</nuxt-link>
              </li>
              <li data-wow-duration="1s" class="flipInY animated" style="visibility: visible; animation-duration: 1s; animation-name: flipInY;">
                <nuxt-link :class="{ 'active': $route.name == 'about' }" to="/about">About</nuxt-link>
              </li>
              <li data-wow-duration="3s" style="visibility: visible; animation-duration: 3s; animation-name: flipInY;" class="flipInY animated">
                  <nuxt-link :class="{ 'active': $route.name == 'services' }" to="/services">Services</nuxt-link>
              </li>
              <li data-wow-duration="4s" style="visibility: visible; animation-duration: 4s; animation-name: flipInY;" class="dropdown flipInY animated">
                  <a href="#" :class="[ 'dropdown-toggle', { 'active': groupMenu == 'portfolio' } ]" data-toggle="dropdown">Portfolio <b class="caret"></b></a>
                  <ul data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: flipInY;" class="dropdown-menu flipInY animated">
                      <li>
                          <nuxt-link to="/portfolio/col1">1 Column Portfolio</nuxt-link>
                      </li>
                      <li>
                          <nuxt-link to="/portfolio/col2">2 Column Portfolio</nuxt-link>
                      </li>
                      <li>
                          <nuxt-link to="/portfolio/col3">3 Column Portfolio</nuxt-link>
                      </li>
                      <li>
                          <nuxt-link to="/portfolio/col4">4 Column Portfolio</nuxt-link>
                      </li>
                      <li>
                          <nuxt-link to="/portfolio/item">Single Portfolio Item</nuxt-link>
                      </li>
                  </ul>
              </li>
              <li data-wow-duration="5s" style="visibility: visible; animation-duration: 5s; animation-name: flipInY;" class="dropdown flipInY animated">
                  <a href="#" :class="[ 'dropdown-toggle', { 'active': groupMenu == 'blog' } ]" data-toggle="dropdown">Blog <b class="caret"></b></a>
                  <ul data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: flipInY;" class="dropdown-menu flipInY animated">
                      <li>
                          <nuxt-link to="/blog/home1">Blog Home 1</nuxt-link>
                      </li>
                      <li>
                          <nuxt-link to="/blog/home2">Blog Home 2</nuxt-link>
                      </li>
                      <li>
                          <nuxt-link to="/blog/post">Blog Post</nuxt-link>
                      </li>
                  </ul>
              </li>
              <li data-wow-duration="6s" style="visibility: visible; animation-duration: 6s; animation-name: flipInY;" class="dropdown flipInY animated">
                  <a href="#" :class="[ 'dropdown-toggle', { 'active': groupMenu == 'other-pages' }]" data-toggle="dropdown">Other Pages <b class="caret"></b></a>
                  <ul data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: flipInY;" class="dropdown-menu flipInY animated">
                      <li>
                          <nuxt-link to="/full-width">Full Width Page</nuxt-link>
                      </li>
                      <li>
                          <nuxt-link to="/sidebar">Sidebar Page</nuxt-link>
                      </li>
                      <li>
                          <nuxt-link to="/faq">FAQ</nuxt-link>
                      </li>
                      <li>
                          <nuxt-link to="/error-404">Error-404</nuxt-link>
                      </li>
                      <li>
                          <nuxt-link to="/pricing">Pricing Table</nuxt-link>
                      </li>
                  </ul>
              </li>
              <li data-wow-duration="7s" style="visibility: visible; animation-duration: 7s; animation-name: flipInY;" class="flipInY animated">
                  <nuxt-link :class="{ 'active': $route.name == 'contact' }" to="/contact">Contact</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
  export default {
    props: ['groupMenu'],
  }
</script>