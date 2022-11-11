<template>
  <v-app>
    <Alert/>
    <v-app-bar app
        dark
        prominent
      >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>  
        <v-toolbar-title>Personal Data</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        bottom
        temporary
        app
    >
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home-outline" title="Home" value="home" to="/"></v-list-item>
        <v-list-item prepend-icon="mdi-plus-circle-outline" title="Create" value="create" to="/create"></v-list-item>
      </v-list>
    </v-navigation-drawer>
      
      
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },

  data: () => ({
    drawer: false
  }),
}
</script>
