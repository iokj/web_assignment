<template>
  <div class="home">
    <br>
    <sui-card>
      <sui-image src="https://www.kingarthurflour.com/sites/default/files/recipe_legacy/48-3-large.jpg" />
      <sui-card-content>
        <sui-card-header>Kristy</sui-card-header>
        <sui-card-meta>Joined in 2013</sui-card-meta>
        <sui-card-description
          >Kristy is an art director living in New York.</sui-card-description
        >
      </sui-card-content>
      <sui-card-content extra>
        <sui-icon name="user" />
        22 Friends
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
  // @ is an alias to /src


  export default {
    name: 'Home'

  }
</script>

<style>
  #segment {
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    height: 300px;
    text-align: left;

  }
</style>