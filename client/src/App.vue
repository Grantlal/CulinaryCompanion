<template>
  <div class="page-container" style="height:100%;">
    <md-app>
      <md-app-toolbar
        class="md-primary"
        style="background-image: linear-gradient(to right, rgb(229, 247, 228), rgb(201, 250, 197));"
      >
        <md-button class="md-icon-button" id="leftMenuButton" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <md-button class="md-icon-button" v-if="menuVisible">
          <md-icon style="opacity: 0;">menu</md-icon>
        </md-button>
        <span id="title">Culinary Companion</span>
        <md-tabs>
      <md-tab id="tab-recipe" md-label="Recipes"></md-tab>
      <md-tab id="tab-Techniques" md-label="Techniques"></md-tab>
      <md-tab id="tab-profile" md-label="Profile"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
    </md-tabs>
      </md-app-toolbar>

      <md-app-drawer
        :md-active.sync="menuVisible"
        md-persistent="full"
        style="background-image: linear-gradient(to bottom left, rgb(229, 247, 228), rgb(201, 250, 197)); max-height:100%;"
      >
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Filters</span>
          
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-checkbox v-model="opt1" value="1" id="firstHamburger">Filter Option 1</md-checkbox>
            <h1>{{opt1}}</h1>
          </md-list-item>

          <md-list-item>
            <md-checkbox v-model="opt2" value="2">Filter Option 1</md-checkbox>
            <h1>{{opt2}}</h1>
          </md-list-item>

          <md-list-item>
            <md-checkbox v-model="opt3" value="3">Filter Option 1</md-checkbox>

            <h1>{{opt3}}</h1>
          </md-list-item>

          <md-list-item>
            <md-checkbox v-model="opt4" value="4">Filter Option 1</md-checkbox>

            <h1>{{opt4}}</h1>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content id="cont">
        <h4>{{recipeExample}}</h4>
        <md-button v-on:click.native="getRecipe()" class="md-raised">Find CHICKEN</md-button>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { UriBuilder } from "uribuilder";

export default {
  data() {
    return {
      array: [],
      boolean: false,
      string: null,
      novalue: null,
      disabled: true,
      obj1: { name: "obj1" },
      obj2: { name: "obj2" },
      obj: null,
      indeterminate: true,

      recipeExample: null,
      recipe1: null,
      menuVisible: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    getRecipe: async function(event) {
      try {
        //Saving this to know this call has worked :)
        // https://api.edamam.com/search?q=chicken&app_id=9a0c84a3&app_key=45bb00840fe3a634d119f86ff069c199
        const url = `http://localhost:8080/recipes`;
        const response = await fetch(url).then(resp => resp.json());
        console.log(response);
        this.recipeExample = response.firstRecipe;
        return response.firstRecipe;
      } catch (error) {
        this.recipeExample = "Error connecting to database.";
        console.error(error);
      }
    }
  },
  name: "app",
  components: {}
};
</script>

<style>
#title {
  min-height: 70px;
  font-size: 50px;
  line-height: 70px;
}
.md-checkbox {
  display: flex;
}

table {
  width: 100%;
  table-layout: fixed;

  th {
    text-align: left;
  }
}
.md-app {
  min-height: 350px;
  border: 1px solid rgba(#000, 0.12);
  width: 100%;
  height: 100%;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}



.el-menu,
body,
html {
  height: 100%;
}

.wrapper {
  position: relative;
}

footer,
div {
  display: block;
}

.container {
  padding-top: 70px;
  flex: 1;
}

.container,
.wrapper {
  height: 100%;
}

.menu {
  height: 100%;
  background-color: #eef1f6;
}

.content {
  padding-top: 25px;
  padding-right: 25px;
  padding-bottom: 125px;
  padding-left: 25px;
}

.footer {
  height: 120px;
  background-color: #324057;
  color: #a4aebd;
  width: 100%;
  z-index: 1000;
  margin-top: -120px;
  line-height: 1;
  font-size: 22px;
}
</style>