<template>
  <div class="auth">
    <div
      class="uk-section uk-section-primary padding uk-flex uk-flex-middle uk-flex-right"
      uk-height-viewport
    >
      <div class="uk-heading-hero uk-text-right uk-text-muted">
        <div>Get</div>
        <div>
          <span class="transparent">Sh</span>it
        </div>
        <div>Done</div>
      </div>
    </div>
    <div
      class="uk-section uk-section-default padding uk-flex uk-flex-middle uk-flex-center"
      uk-height-viewport
    >
      <div class="auth-form" @keyup.ctrl.enter="signin()">
        <transition-group name="test2">
          <div class="signin-form" v-if="mode === 'signin'" key="one">
            <div class="heading uk-margin-medium">
              <h1 class="uk-heading-divider uk-text-left">Sign in</h1>
            </div>
            <div class="content">
              <div class="uk-margin">
                <input class="uk-input" type="text" v-model="username" placeholder="Username">
              </div>
              <div class="uk-margin">
                <input class="uk-input" type="password" v-model="password" placeholder="Password">
              </div>
            </div>
            <div class="actions uk-margin-medium-top">
              <div class="uk-margin">
                <button @click="signin()" class="uk-button uk-button-primary uk-width-1-1">Sign in</button>
              </div>
              <div class="uk-margin">
                <button
                  class="uk-button uk-button-default uk-text-muted uk-width-1-1"
                  @click="mode = 'signup'"
                >Don't have an account?</button>
              </div>
            </div>
          </div>
          <div class="signup-form" @keyup.ctrl.enter="signup()" key="two" v-else>
            <div class="heading uk-margin-medium">
              <h1 class="uk-heading-divider uk-text-left">Sign up</h1>
            </div>
            <div class="content">
              <div class="uk-margin">
                <input class="uk-input" type="text" v-model="name" placeholder="Name">
              </div>
              <div class="uk-margin">
                <input class="uk-input" type="text" v-model="username" placeholder="Username">
              </div>
              <div class="uk-margin">
                <input class="uk-input" type="password" v-model="password" placeholder="Password">
              </div>
            </div>
            <div class="actions uk-margin-medium-top">
              <div class="uk-margin">
                <button @click="signup()" class="uk-button uk-button-primary uk-width-1-1">Sign up</button>
              </div>
              <div class="uk-margin">
                <button
                  class="uk-button uk-button-default uk-text-muted uk-width-1-1"
                  @click="mode = 'signin'"
                >Already have an account?</button>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "auth",
  data() {
    return {
      mode: "signin",
      username: "",
      name: "",
      password: "",
      pconfirm: ""
    };
  },
  created() {
    const $app = document.getElementById("app");
    $app.classList.add("navbar-hidden");
  },
  destroyed() {
    const $app = document.getElementById("app");
    $app.classList.remove("navbar-hidden");
  },
  methods: {
    signin() {
      const user = {
        username: this.username,
        password: this.password
      };

      if (!user.password || !user.username) {
        UIkit.notification("Wrong username or password", {
          pos: "top-right",
          status: "warning"
        });
        return;
      }

      this.$store
        .dispatch("signinUser", user)
        .then(res => {
          UIkit.notification(`Hello, ${res.name}`, {
            pos: "top-right",
            status: "success"
          });

          this.username = this.password = "";

          this.$router.replace("/");
        })
        .catch(err => {
          UIkit.notification(err, { pos: "top-right", status: "danger" });
        });
    },
    signup() {
      const user = {
        name: this.name,
        username: this.username,
        password: this.password
      };

      if (!user.password || !user.username || !user.name) {
        UIkit.notification("Wrong name, username or password", {
          pos: "top-right",
          status: "warning"
        });

        return;
      }

      this.$store
        .dispatch("signupUser", user)
        .then(res => {
          UIkit.notification(res, { pos: "top-right", status: "success" });

          this.name = this.username = this.password = "";
          this.$router.replace("/");
        })
        .catch(err => {
          UIkit.notification(err, { pos: "top-right", status: "danger" });
        });
    }
  }
};
</script>

<style lang="scss">
.auth {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;

  &-form {
    width: 100%;
    max-width: 400px;
  }

  .padding {
    padding: 30px 90px;
  }

  .transparent {
    opacity: 0.2;
  }
}

.test2-enter-to,
.test2-leave {
  transform: translate(0, 0);

  transition: all 0.4s ease;
  opacity: 1;
}
.test2-enter,
.test2-leave-to {
  position: absolute;
  transform: translate(100%, 0);
  transition: all 0.4s ease;
  opacity: 0;
}
</style>
