<template>
  <div class="page-container" style="height:100%;">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary andrew-nav">

          <md-button style="float:left:" class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <md-button class="md-icon-button" v-if="menuVisible">
            <md-icon style="opacity: 0;">menu</md-icon>
          </md-button>
          <span id="title">Cullinary Companion</span>

          <md-menu style="float:left:" md-size="medium" md-align-trigger>
            <md-button md-menu-trigger>Recipes</md-button>
            <md-menu-content>
              <md-menu-item>Advanced Search</md-menu-item>
              <md-menu-item v-on:click.native="data = 'asdf'">Browse</md-menu-item>
              <md-menu-item>Surprise Me!</md-menu-item>
            </md-menu-content>
          </md-menu>

          <md-menu md-size="medium" md-align-trigger>
            <md-button md-menu-trigger>Techniques</md-button>
            <md-menu-content>
              <md-menu-item>Advanced Search</md-menu-item>
              <md-menu-item v-on:click.native="data = 'asdf'">Browse</md-menu-item>
              <md-menu-item>Surprise Me!</md-menu-item>
            </md-menu-content>
          </md-menu>

          <md-menu md-size="medium" md-align-trigger>
            <md-button md-menu-trigger>Favorites</md-button>
            <md-menu-content>
              <md-menu-item>Advanced Search</md-menu-item>
              <md-menu-item v-on:click.native="data = 'asdf'">Browse</md-menu-item>
              <md-menu-item>Surprise Me!</md-menu-item>
            </md-menu-content>
          </md-menu>

          <div style="margin-left: auto; min-width: 300px; max-width:500px;">
		  <md-field style="min-width: 300px; max-width:500px;">
            <label>Search Recipes</label>
            <md-input v-model="query"></md-input>
          </md-field>
		  </div>
          <md-button 
		  class="md-raised"
            style="background-image: linear-gradient(to bottom left, rgb(229, 247, 228), rgb(201, 250, 197));"
          >GO!</md-button>
		  

          <md-menu md-size="medium" md-align-trigger>
            <md-button style="width: 100%;" md-menu-trigger>
              <md-icon
                style="border: 1px solid black; border-radius: 100%; height: 100%; width: 100%;"
              >person</md-icon>
            </md-button>
            <md-menu-content>
              <md-menu-item>Advanced Search</md-menu-item>
              <md-menu-item v-on:click.native="data = 'asdf'">Browse</md-menu-item>
              <md-menu-item>Surprise Me!</md-menu-item>
            </md-menu-content>
          </md-menu>
      </md-app-toolbar>


      <md-app-drawer
        :md-active.sync="menuVisible"
        md-persistent="full"
        style="width: 15%; min-width: min-content; max-width: 400px; background-image: linear-gradient(to bottom left, rgb(229, 247, 228), rgb(201, 250, 197)); max-height:100%;"
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
            <md-checkbox id="lactosebox" v-model="opt1">
              <label for="lactosebox" v-if="opt1" style="text-decoration: line-through;">Lactose</label>
              <label for="lactosebox" v-if="!opt1">Lactose</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="meatbox" v-model="opt2">
              <label for="meatbox" v-if="opt2" style="text-decoration: line-through;">Meats</label>
              <label for="meatbox" v-if="!opt2">Meats</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="peanutbox" v-model="opt3">
              <label for="peanutbox" v-if="opt3" style="text-decoration: line-through;">Nuts</label>
              <label for="peanutbox" v-if="!opt3">Nuts</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="diabeticbox" v-model="opt4">
              <label for="diabeticbox" v-if="opt4" style="text-decoration: line-through;">Diabetic</label>
              <label for="diabeticbox" v-if="!opt4">Diabetic</label>
            </md-checkbox>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content id="cont">
        <h4>{{recipeExample}}</h4>
        <md-button v-on:click.native="getRecipe()" class="md-raised">Find Chicken!!!</md-button>

        <RecipeCard></RecipeCard>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { UriBuilder } from "uribuilder";
import RecipeCard from "./components/RecipeCard.vue";

export default {
  data() {
    return {
      opt1: null,
      opt2: null,
      opt3: null,
      opt4: null,

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
        var url = `http://localhost:8080/recipes`;
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
  components: {
    RecipeCard
  }
};
</script>

<style>
.andrew-nav {
	display: flex;
  background-image: linear-gradient(
    to right,
    rgb(229, 247, 228),
    rgb(201, 250, 197)
  );
}

.md-theme-default {
  color: black !important;
  background-color: transparent !important;
}
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