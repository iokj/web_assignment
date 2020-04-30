<template>
  <div id="app">
    <div>
      <sui-menu inverted>
        
    <sui-menu-item ><sui-image src="favicon.ico" /></sui-menu-item>
    <router-link to="/contacts"><sui-menu-item>Contacts</sui-menu-item></router-link>
    <sui-menu-item position="right"><router-link to="/"><sui-button secondary><sui-icon name="user" /></sui-button></router-link></sui-menu-item>
  </sui-menu>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
