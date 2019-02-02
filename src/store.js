import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

import {
  ls,
  crypto,
  uuid
} from "./utils";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    paths: [
      'user'
    ],
  })],
  state: {
    user: null,
    users: [

    ],
    things: [{
      id: uuid.custom(),
      title: 'Fringilla urna porttitor rhoncus dolor.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      completed: false
    }, {
      id: uuid.custom(),
      title: 'Lorem donec massa sapien faucibus et molestie ac.',
      description: 'Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit.',
      completed: false
    }, {
      id: uuid.custom(),
      title: 'Elementum curabitur vitae nunc sed.',
      description: 'Luctus accumsan tortor posuere ac ut consequat semper viverra nam.',
      completed: true
    }, ],
    filter: 'all'
  },

  actions: {
    signinUser: (context, data) => {
      return new Promise((resolve, reject) => {
        context.dispatch("getUsers").then(() => {
          const user = context.state.users.find(
            row => row.username === data.username
          );

          if (user) {
            const credentials = crypto.encrypt(data.password);

            if (user.hash === credentials) {
              context.commit('SIGNIN', user);
            } else {
              reject('Wrong credentials');
            }

            resolve(user);
          } else {
            reject('Couldn\'t find your account, sorry');
          }
        });
      });
    },
    signupUser: (context, data) => {
      return new Promise((resolve, reject) => {
        context.dispatch("getUsers").then(() => {
          const user = context.state.users.find(
            row => row.username === data.username
          );

          if (!user) {
            const newUser = {
              id: Math.random()
                .toString(36)
                .slice(2, 12)
            };

            newUser.name = data.name;
            newUser.username = data.username;
            newUser.hash = crypto.encrypt(data.password);

            context.commit("SIGNUP", newUser);

            resolve('Signup successful');
          } else {
            reject('Account with same username already exist');
          }
        });
      });
    },
    signOut: (context) => {
      return new Promise(resolve => {
        context.commit('SIGNOUT');
        resolve('See you later.');
      });
    },
    getUsers: context => {
      const users = ls.get("USERS");

      context.commit("USERS_UPDATED", users);
    },
    getThings: (context) => {
      const things = ls.get('THINGS');

      return new Promise(resolve => {
        context.commit('THINGS_UPDATED', things);
        resolve('Things list updated.');
      });

    },
    createThing: (context, data) => {
      const thing = Object.assign({}, data);

      thing.id = uuid.custom();
      thing.completed = false;
      thing.user_id = context.state.user.id;

      return new Promise((resolve) => {
        context.commit('CREATE_THING', thing);
        resolve('New thing added to your list.');
      });

    },
    updateThing: (context, data) => {
      return new Promise((resolve) => {
        context.commit('UPDATE_THING', data);

        resolve('Thing edits saved.');
      });
    },
    removeThing: (context, id) => {
      return new Promise((resolve) => {
        context.commit('REMOVE_THING', id);
        resolve('Thing removed from your list.')
      });
    },
    changeFilter: (context, data) => {
      const filters = ['all', 'active', 'completed'];

      if (filters.indexOf(data) < 0) {
        return;
      }

      context.commit('CHANGE_FILTER', data);
    },
  },

  mutations: {
    SIGNIN: (state, data) => {
      state.user = data;
    },
    SIGNUP: (state, data) => {
      state.users.push(data);

      ls.set('USERS', state.users);
    },
    SIGNOUT: (state) => {
      state.user = null;
    },
    USERS_UPDATED: (state, data) => {
      state.users = data;
    },
    CHANGE_FILTER: (state, data) => {
      state.filter = data;
    },
    THINGS_UPDATED: (state, data) => {
      state.things = data;
    },
    CREATE_THING: (state, data) => {
      state.things.unshift(data);

      ls.set('THINGS', state.things);
    },
    UPDATE_THING: (state, data) => {
      const index = state.things.findIndex(row => row.id === data.id);

      state.things.splice(index, 1, data);

      ls.set('THINGS', state.things);
    },
    REMOVE_THING: (state, id) => {
      const index = state.things.findIndex(row => row.id === id);

      state.things.splice(index, 1);

      ls.set('THINGS', state.things);
    }

  },

  getters: {
    user: state => state.user,
    filter: state => state.filter,
    things: (state) => {
      return state.things.filter(item => {
        if (state.user) {
          return item.user_id === state.user.id;
        } else {
          return false;
        }
      }).filter(item => {
        if (state.filter === 'active') {
          return !item.completed;
        } else if (state.filter === 'completed') {
          return item.completed;
        } else {
          return true;
        }
      });
    },
  }
});