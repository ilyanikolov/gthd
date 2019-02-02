<template>
  <div class="home uk-flex uk-flex-column">
    <div class="uk-section uk-section-default uk-text-left">
      <div class="uk-container uk-flex uk-flex-between uk-flex-middle">
        <h1 class="uk-h1 uk-margin-remove">{{ filter | capitalize }} things.</h1>
        <div class="actions">
          <button
            class="uk-icon-button uk-button-primary uk-icon uk-margin-right smaller-font"
            uk-icon="icon: refresh"
            @click="refreshThings()"
          ></button>
          <button
            class="uk-icon-button uk-button-primary uk-icon smaller-font"
            uk-icon="icon: plus"
            @click="startEditing()"
          ></button>
        </div>
      </div>
    </div>

    <div class="uk-section uk-section-muted uk-flex-1">
      <div class="uk-container">
        <div class="uk-child-width-1-4@m uk-grid-small uk-grid-match" uk-grid>
          <div v-for="(row, index) of things" :key="index" class>
            <div
              class="uk-card uk-card-default uk-card-body uk-text-left uk-inline-clip uk-transition-toggle"
            >
              <h3 class="uk-card-title">{{ row.title }}</h3>
              <p>{{ row.description }}</p>

              <div class="uk-overlay-default uk-position-cover" v-if="row.completed">
                <div class="uk-position-center">
                  <div class="uk-transition-slide-top-small">
                    <h4 class="uk-margin-remove">This thing is completed</h4>
                  </div>
                  <div class="uk-transition-slide-bottom-small uk-margin">
                    <div class="uk-h4">
                      <ul class="uk-iconnav uk-flex uk-flex-center">
                        <li class="uk-margin-right">
                          <a href="#" uk-icon="icon: trash"></a>
                        </li>
                        <li>
                          <a href="#" uk-icon="icon: forward" @click="toggleCompleted(row)"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-else
                class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary"
              >
                <div class="uk-h4 uk-margin-remove">
                  <ul class="uk-iconnav uk-flex uk-flex-right">
                    <li class="uk-margin-right">
                      <a href="#" uk-icon="icon: trash" @click="removeThing(row.id)"></a>
                    </li>
                    <li class="uk-margin-right">
                      <a href="#" uk-icon="icon: file-edit" @click="startEditing(row)"></a>
                    </li>
                    <li>
                      <a href="#" uk-icon="icon: check" @click="toggleCompleted(row)"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>

        <h3>Add new thing</h3>
        <!-- <hr> -->
        <div class="uk-form-stacked uk-margin-medium-top">
          <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text">Title</label>
            <div class="uk-form-controls">
              <input
                v-model="thing.title"
                class="uk-input"
                id="form-horizontal-text"
                type="text"
                placeholder="Thing title"
              >
            </div>
          </div>
          <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text">Description</label>
            <div class="uk-form-controls">
              <textarea
                v-model="thing.description"
                class="uk-textarea"
                id="form-horizontal-text"
                placeholder="Thing description"
                rows="4"
              ></textarea>
            </div>
          </div>
          <!-- <hr> -->
          <div class="uk-margin-medium-top uk-flex uk-flex-right">
            <button
              class="uk-button uk-button-default uk-margin-medium-right uk-width-1-1"
              @click="cancelEditing()"
            >Cancel</button>
            <button
              class="uk-button uk-button-primary uk-width-1-1"
              :disabled="saveDisabled"
              @click="saveEditing()"
            >Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      mode: "new",
      thing: {
        title: "Vel orci porta non pulvinar.",
        description:
          "Pretium fusce id velit ut tortor pretium. Mattis nunc sed blandit libero volutpat. "
      }
    };
  },
  computed: {
    ...mapGetters({
      filter: "filter",
      things: "things",
      user: "user"
    }),
    saveDisabled() {
      return !this.thing.title || !this.thing.description;
    }
  },
  filters: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  },
  created() {
    if (this.user) {
      this.refreshThings();
    }
  },
  methods: {
    refreshThings() {
      this.$store.dispatch("getThings").then(res => {
        UIkit.notification(res, {
          pos: "top-right",
          status: "success"
        });
      });
    },
    saveEditing() {
      const action = this.mode === "new" ? "createThing" : "updateThing";
      const thing = Object.assign({}, this.thing);

      this.$store.dispatch(action, thing).then(res => {
        UIkit.notification(res, {
          pos: "top-right",
          status: "success"
        });

        this.closeOffcanvas();
        this.resetThing();
      });
    },
    startEditing(thing) {
      if (thing) {
        this.mode = "edit";
        this.thing = Object.assign({}, thing);
      } else {
        this.mode = "new";
      }

      this.showOffcanvas();
    },
    cancelEditing() {
      this.resetThing();
      // const el = document.getElementById("offcanvas-flip");
      this.closeOffcanvas();
    },
    toggleCompleted(thing) {
      thing.completed = !thing.completed;

      this.$store.dispatch("updateThing", thing).then(res => {
        UIkit.notification(res, {
          pos: "top-right",
          status: "success"
        });
      });
    },
    removeThing(id) {
      this.$store.dispatch("removeThing", id).then(res => {
        UIkit.notification(res, {
          pos: "top-right",
          status: "success"
        });
      });
    },
    resetThing() {
      Object.keys(this.thing).forEach(key => {
        this.thing[key] = "";
      });
    },
    showOffcanvas() {
      UIkit.offcanvas("#offcanvas-flip").show();
    },
    closeOffcanvas() {
      UIkit.offcanvas("#offcanvas-flip").hide();
    }
  }
};
</script>

<style lang="scss">
.home {
  height: 100%;
}

#offcanvas-flip .uk-offcanvas-bar {
  width: 90%;
  max-width: 450px;
}

.smaller-font {
  svg {
    transform: scale(0.85);
  }
}
</style>
