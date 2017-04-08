<template>
  <div id="app">
  <menus></menus>
  </div>
</template>

<script>

import menus  from './components/Menus.vue'

export default {
  name: 'app',
  data(){
    return{
            msg:'1111'
    }
  },
  components: { menus }
}
</script>

<style scope lang="sass">
 @import '../sass/app.sass'

</style>
