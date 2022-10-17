<script>


  export default {
      // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Reddito Homepage',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Reddito um site para possibilitar a acessibilidade de receitas culinárias de forma simples e intuitiva. E promover o compartilhamento de receitas.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~/static/img/logo-da-pag.png' }
    ]
  },
  }
</script>

<template>
  <VueNavbar></VueNavbar>
  <p>hello</p>
</template>