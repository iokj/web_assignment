<template>
  <div class="login">
    <br>
    <div id="segment">
      <br>
      <br>

      <sui-segments>
        <sui-segment raise>

          <sui-segment color="teal" aligned="left">
            <h1 is="sui-label" color="teal" ribbon id="ribbon" size="large">
              Login
            </h1>
            <!-- <sui-label attached="top left" color="teal" ribbon>Login</sui-label> -->
          </sui-segment>
          <sui-form>
            <sui-form-field>

              <label>User Account</label>
              <input placeholder="User Account" v-model="user" />
            </sui-form-field>
            <sui-form-field>
              <label>Password</label>
              <input type="password" placeholder="Password" v-model="pass" />
            </sui-form-field>

            <sui-button type="Login" @click="check()">Login</sui-button>
          </sui-form>
        </sui-segment>

        <docs-wireframe name="paragraph" />
      </sui-segments>
    </div>
    <br>
    <br>
    <br>
    <br>

    <transition name="fade">
      <sui-message v-if="visible" header="Wrong" content=" wrong username or password" dismissable
        @dismiss="handleDismiss" />
    </transition>




  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Login',
    data() {
      return {
        Users: [],
        user: '',
        pass: '',
        visible: false
      }

    },
    methods: {
      check() {
        this.Users.filter((user) => {
          var x = this.user.length;
          if (x == 0) {
            this.visible = true


          } else if (user.username.match(this.user) && user.password.match(this.pass)) {
            this.$router.replace({
              path: '/contacts'
            })
          } else {
            this.visible = true




          }

        })
      },
      handleDismiss() {
        this.visible = false;
        setTimeout(() => {
          this.visible = true;
        }, 2000);
      }
    },
    mounted() {
      axios.get('http://localhost:3000/users')
        .then((response) => {
          console.log(response.data)
          this.Users = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }

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