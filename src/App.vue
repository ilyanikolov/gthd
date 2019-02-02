<template>
  <div id="app">
    <!-- navbar -->
    <nav class="uk-navbar-container uk-margin uk-light" id="navbar">
      <div class="uk-container">
        <div class="uk-navbar">
          <div class="uk-navbar-left">
            <a class="uk-navbar-item uk-logo" href="#">Things.</a>
          </div>
          <div class="uk-navbar-center" v-if="user">
            <ul class="uk-navbar-nav">
              <li
                :class="{'uk-active': row.key === filter}"
                v-for="(row, index) of filters"
                :key="index"
                @click="changeFilter(row.key)"
              >
                <a href="#">{{row.value}}</a>
              </li>
            </ul>
          </div>
          <div class="uk-navbar-right" v-if="user">
            <div class="uk-navbar-item">
              <ul class="uk-grid-small uk-grid" uk-grid>
                <li class="uk-first-column">
                  <a
                    class="uk-icon-button uk-icon"
                    href="#"
                    uk-icon="icon: sign-out"
                    @click="signOut()"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- routes -->
    <div id="content">
      <transition name="test">
        <router-view></router-view>
      </transition>
    </div>

    <!-- tile -->
    <div id="tile"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app",
  data() {
    return {
      filters: [
        {
          key: "all",
          value: "All"
        },
        {
          key: "active",
          value: "Active"
        },
        {
          key: "completed",
          value: "Completed"
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
      filter: "filter"
    })
  },
  methods: {
    changeFilter(val) {
      this.$store.dispatch("changeFilter", val);
    },
    signOut() {
      this.$store.dispatch("signOut").then(res => {
        UIkit.notification(res, {
          pos: "top-right",
          status: "success"
        });
        this.$router.replace("/auth");
      });
    }
  },
  watch: {
    $route(to, from) {
      const $tile = document.getElementById("tile");
      $tile.classList.remove("active");
      $tile.classList.add("active");
      setTimeout(function() {
        $tile.classList.remove("active");
      }, 800);
      // console.log({ from, to });
    }
  }
};
</script>


<style lang="scss">
* {
  box-sizing: border-box;
  outline: none;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
}

#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;

  padding-top: 80px;

  transition: padding 0.2s linear 0.6s;
  &.navbar-hidden {
    padding-top: 0;
    #navbar {
      transform: translateY(-100%);
    }
  }
}

#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 998;

  transition: transform 0.4s cubic-bezier(0, 0.5, 0.5, 1) 0.6s;
  &.hidden {
    transform: translateY(-100%);
  }
}

#content {
  height: 100%;
}

.test-enter-to,
.test-leave {
  transition: opacity 0.4s ease 1.2s;
  opacity: 1;
}
.test-enter,
.test-leave-to {
  transition: opacity 0.4s ease;
  opacity: 0;
}
#tile {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  // height: 0;
  // height: 150vh;
  background-color: #179c52;
  transition: transform 0.4s ease-in-out;
  transform: scaleY(0);
  transform-origin: top center;

  z-index: 999;

  &.active {
    transition: transform 0.6s ease-in-out;
    transform-origin: bottom center;
    transform: scaleY(1);
  }
}
</style>
