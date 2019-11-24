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
        <span id="title">Culinary Companion</span>

        <md-menu class="bc-trans" style="margin-left: 10px;" md-size="medium" md-align-trigger>
          <md-button md-menu-trigger>Recipes</md-button>
          <md-menu-content>
            <md-menu-item class="bc-white">Advanced Search</md-menu-item>
            <md-menu-item class="bc-white" v-on:click.native="data = 'asdf'">Browse</md-menu-item>
            <md-menu-item class="bc-white">Surprise Me!</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu class="bc-trans" md-size="medium" md-align-trigger>
          <md-button md-menu-trigger>Techniques</md-button>
          <md-menu-content>
            <md-menu-item class="bc-white">Advanced Search</md-menu-item>
            <md-menu-item class="bc-white" v-on:click.native="data = 'asdf'">Browse</md-menu-item>
            <md-menu-item class="bc-white">Surprise Me!</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu class="bc-trans" md-size="medium" md-align-trigger>
          <md-button md-menu-trigger>Favorites</md-button>
          <md-menu-content>
            <md-menu-item class="bc-white">Advanced Search</md-menu-item>
            <md-menu-item class="bc-white" v-on:click.native="data = 'asdf'">Browse</md-menu-item>
            <md-menu-item class="bc-white">Surprise Me!</md-menu-item>
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
          v-on:click.native="getRecipe()"
          style="background-image: linear-gradient(to bottom left, rgb(229, 247, 228), rgb(201, 250, 197));"
          >GO!</md-button
        >

        <md-menu class="bc-trans" md-size="medium" md-align-trigger>
          <md-button style="width: 100%;" md-menu-trigger>
            <md-icon style="border: 1px solid black; border-radius: 100%; height: 100%; width: 100%;">person</md-icon>
          </md-button>
          <md-menu-content>
            <md-menu-item class="bc-white">Account Settings</md-menu-item>
            <md-menu-item class="bc-white">Logout</md-menu-item>
          </md-menu-content>
        </md-menu>
      </md-app-toolbar>

      <md-app-drawer
        :md-active.sync="menuVisible"
        md-persistent="full"
        style="width: 15%; min-width: min-content; max-width: 400px; background-image: linear-gradient(to bottom left, rgb(229, 247, 228), rgb(201, 250, 197)); max-height:100%;"
      >
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Filter Out</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list class="bc-trans">
          <md-list-item md-expand>
            <span class="md-list-item-text">Diets</span>
            <md-list slot="md-expand" class="bc-trans hamburger-submenu">
              <md-list-item>
                <md-checkbox id="balancedbox" v-model="OPT__Balanced">
                  <label
                    @click="OPT__Balanced = !OPT__Balanced"
                    for="balancedbox"
                    v-if="OPT__Balanced"
                    class="clickable;"
                    ><b class="clickable;">Balanced</b></label
                  >
                  <label
                    @click="OPT__Balanced = !OPT__Balanced"
                    for="balancedbox"
                    v-if="!OPT__Balanced"
                    class="clickable;"
                    >Balanced</label
                  >
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="fodmapbox" v-model="OPT__FodmapFree">
                  <label
                    @click="OPT__FodmapFree = !OPT__FodmapFree"
                    for="fodmapbox"
                    v-if="OPT__FodmapFree"
                    class="clickable;"
                    ><b>Fodmap</b></label
                  >
                  <label
                    @click="OPT__FodmapFree = !OPT__FodmapFree"
                    for="fodmapbox"
                    v-if="!OPT__FodmapFree"
                    class="clickable;"
                    >Fodmap</label
                  >
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="glutenfreebox" v-model="OPT__GlutenFree">
                  <label
                    @click="OPT__GlutenFree = !OPT__GlutenFree"
                    for="glutenfreebox"
                    v-if="OPT__GlutenFree"
                    class="clickable;"
                    ><b>Gluten Free</b></label
                  >
                  <label
                    @click="OPT__GlutenFree = !OPT__GlutenFree"
                    for="glutenfreebox"
                    v-if="!OPT__GlutenFree"
                    class="clickable;"
                    >Gluten Free</label
                  >
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="highfiberbox" v-model="OPT__HighFiber">
                  <label
                    @click="OPT__HighFiber = !OPT__HighFiber"
                    for="highfiberbox"
                    v-if="OPT__HighFiber"
                    class="clickable;"
                    ><b class="clickable;">High-Fiber</b></label
                  >
                  <label
                    @click="OPT__HighFiber = !OPT__HighFiber"
                    for="highfiberbox"
                    v-if="!OPT__HighFiber"
                    class="clickable;"
                    >High-Fiber</label
                  >
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="highproteinbox" v-model="OPT__LowSugar">
                  <label
                    @click="OPT__LowSugar = !OPT__LowSugar"
                    for="lowsugarbox"
                    v-if="OPT__LowSugar"
                    class="clickable;"
                    ><b class="clickable;">High-Protein</b></label
                  >
                  <label
                    @click="OPT__LowSugar = !OPT__LowSugar"
                    for="lowsugarbox"
                    v-if="!OPT__LowSugar"
                    class="clickable;"
                    >High-Protein</label
                  >
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="ketobox" v-model="OPT__KetoFriendly">
                  <label
                    @click="OPT__KetoFriendly = !OPT__KetoFriendly"
                    for="ketobox"
                    v-if="OPT__KetoFriendly"
                    class="clickable;"
                    ><b>Keto</b></label
                  >
                  <label
                    @click="OPT__KetoFriendly = !OPT__KetoFriendly"
                    for="ketobox"
                    v-if="!OPT__KetoFriendly"
                    class="clickable;"
                    >Keto</label
                  >
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="kidneybox" v-model="OPT__kidneyFriendly">
                  <label
                    @click="OPT__kidneyFriendly = !OPT__kidneyFriendly"
                    for="kidneybox"
                    v-if="OPT__kidneyFriendly"
                    class="clickable;"
                    ><b>Kidney Friendly</b></label
                  >
                  <label
                    @click="OPT__kidneyFriendly = !OPT__kidneyFriendly"
                    for="kidneybox"
                    v-if="!OPT__kidneyFriendly"
                    class="clickable;"
                    >Kidney Friendly</label
                  >
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="kosherbox" v-model="OPT__Kosher">
                  <label @click="OPT__Kosher = !OPT__Kosher" for="kosherbox" v-if="OPT__Kosher" class="clickable;"
                    ><b>Kosher</b></label
                  >
                  <label @click="OPT__Kosher = !OPT__Kosher" for="kosherbox" v-if="!OPT__Kosher" class="clickable;"
                    >Kosher</label
                  >
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="lowfatbox" v-model="OPT__LowFat">
                  <label @click="OPT__LowFat = !OPT__LowFat" for="lowfatbox" v-if="OPT__LowFat" class="clickable;"
                    ><b>Low-Fat</b></label
                  >
                  <label @click="OPT__LowFat = !OPT__LowFat" for="lowfatbox" v-if="!OPT__LowFat" class="clickable;"
                    >Low-Fat</label
                  >
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="kbox" v-model="OPT__LowPotassium">
                  <label
                    @click="OPT__LowPotassium = !OPT__LowPotassium"
                    for="kbox"
                    v-if="OPT__LowPotassium"
                    class="clickable;"
                    ><b>Low-Potassium</b></label
                  >
                  <label
                    @click="OPT__LowPotassium = !OPT__LowPotassium"
                    for="kbox"
                    v-if="!OPT__LowPotassium"
                    class="clickable;"
                    >Low-Potassium</label
                  >
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="lowcarbbox" v-model="OPT__LowCarb">
                  <label @click="OPT__LowCarb = !OPT__LowCarb" for="lowcarbbox" v-if="OPT__LowCarb" class="clickable;" F
                    ><b class="clickable;">Low-Sugar</b></label
                  >
                  <label @click="OPT__LowCarb = !OPT__LowCarb" for="lowcarbbox" v-if="!OPT__LowCarb" class="clickable;"
                    >Low-Sugar</label
                  >
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="lowsodiumbox" v-model="OPT__LowSodium">
                  <label
                    @click="OPT__LowSodium = !OPT__LowSodium"
                    for="lowsodiumbox"
                    v-if="OPT__LowSodium"
                    class="clickable;"
                    ><b class="clickable;">Low-Sodium</b></label
                  >
                  <label
                    @click="OPT__LowSodium = !OPT__LowSodium"
                    for="lowsodiumbox"
                    v-if="!OPT__LowSodium"
                    class="clickable;"
                    >Low-Sodium</label
                  >
                </md-checkbox>
              </md-list-item>
            </md-list>
          </md-list-item>

          <md-list-item md-expand>
            <span class="md-list-item-text">Meats</span>
            <md-list slot="md-expand" class="bc-trans hamburger-submenu">
              <md-list-item>
                <md-checkbox id="porkbox" v-model="OPT__PorkFree">
                  <label @click="OPT__PorkFree = !OPT__PorkFree" for="porkbox" v-if="OPT__PorkFree" class="clickable;"
                    >Pork</label
                  >
                  <label @click="OPT__PorkFree = !OPT__PorkFree" for="porkbox" v-if="!OPT__PorkFree" class="clickable;"
                    >Pork</label
                  >
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="beefbox" v-model="OPT__BeefFree">
                  <label @click="OPT__BeefFree = !OPT__BeefFree" for="beefbox" v-if="OPT__BeefFree" class="clickable;"
                    >Beef</label
                  >
                  <label @click="OPT__BeefFree = !OPT__BeefFree" for="beefbox" v-if="!OPT__BeefFree" class="clickable;"
                    >Beef</label
                  >
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="chickenbox" v-model="OPT__ChickenFree">
                  <label
                    @click="OPT__ChickenFree = !OPT__ChickenFree"
                    for="chickenbox"
                    v-if="OPT__ChickenFree"
                    class="clickable;"
                    >Chicken</label
                  >
                  <label
                    @click="OPT__ChickenFree = !OPT__ChickenFree"
                    for="chickenbox"
                    v-if="!OPT__ChickenFree"
                    class="clickable;"
                    >Chicken</label
                  >
                </md-checkbox>
              </md-list-item>
            </md-list>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="alcoholFreebox" v-model="OPT__AlcoholFree">
              <label
                @click="OPT__AlcoholFree = !OPT__AlcoholFree"
                for="alcoholFreebox"
                v-if="OPT__AlcoholFree"
                class="clickable;"
                ><b>Alcohol Free</b>
              </label>
              <label
                @click="OPT__AlcoholFree = !OPT__AlcoholFree"
                for="alcoholFreebox"
                v-if="!OPT__AlcoholFree"
                class="clickable;"
                >Alcohol
              </label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="nutbox" v-model="OPT__NutFree">
              <label @click="OPT__NutFree = !OPT__NutFree" for="nutbox" v-if="OPT__NutFree" class="clickable;"
                >Nuts</label
              >
              <label @click="OPT__NutFree = !OPT__NutFree" for="nutbox" v-if="!OPT__NutFree" class="clickable;"
                >Nuts</label
              >
            </md-checkbox>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content id="cont">
        <div id="recipecards" v-for="rec in recipes" v-bind:key="rec.calories">
          <RecipeCard
            class="recipes"
            :title="rec.recipe.label"
            :dietLabels="rec.dietlabels"
            :instructions="rec.ingredientLines"
            :image="rec.recipe.image"
          ></RecipeCard>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { UriBuilder } from 'uribuilder';
import RecipeCard from './components/RecipeCard.vue';

export default {
  data() {
    return {
      OPT__AlcoholFree: false,
      OPT__PorkFree: false,
      OPT__BeefFree: false,
      OPT__ChickenFree: false,
      OPT__NutFree: false,
      OPT__CeleryFree: false,
      OPT__crustaceanFree: false,
      OPT__DairyFree: false,
      OPT__EggFree: false,
      OPT__FishFree: false,
      OPT__FodmapFree: false,
      OPT__GlutenFree: false,
      OPT__KetoFriendly: false,
      OPT__kidneyFriendly: false,
      OPT__Kosher: false,
      OPT__LowPotassium: false,
      OPT__LupineFree: false,
      OPT__MustardFree: false,
      OPT__LowFat: false,
      OPT__NoOilAdded: false,
      OPT__LowSugar: false,
      OPT__Paleo: false,
      OPT__PeanutFree: false,
      OPT__Pecatarian: false,
      OPT__PorkFree: false,
      OPT__RedMeatFree: false,
      OPT__SesameFree: false,
      OPT__ShellfishFree: false,
      OPT__SoyFree: false,
      OPT__SugarConscious: false,
      OPT__TreeNutFree: false,
      OPT__Vegan: false,
      OPT__Vegetarian: false,
      OPT__WheatFree: false,
      OPT__Balanced: false,
      OPT__HighFiber: false,
      OPT__HighProtein: false,
      OPT__LowCarb: false,
      OPT__LowFat: false,
      OPT__LowSodium: false,

      query: null,
      recipeExample: null,
      recipes: [],
      menuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    getRecipe: async function(event) {
      try {
        if (this.query !== null) {
          var param = '';
          if (this.OPT__AlcoholFree) param += `&health=alcohol-free`;
          if (this.OPT__PorkFree) param += `&excluded=pork`;
          if (this.OPT__BeefFree) param += `&excluded=beef`;
          if (this.OPT__ChickenFree) param += `&excluded=chicken`;
          if (this.OPT__NutFree) param += `&health=peanut-free&health=tree-nut-free`;
          if (this.OPT__CeleryFree) param += `&health=celery-free`;
          if (this.OPT__crustaceanFree) param += `&health=crustacean-free`;
          if (this.OPT__DairyFree) param += `&health=dairy-free`;
          if (this.OPT__EggFree) param += `&health=egg-free`;
          if (this.OPT__FishFree) param += `&health=fish-free`;
          if (this.OPT__FodmapFree) param += `&health=fodmap-free`;
          if (this.OPT__GlutenFree) param += `&health=gluten-free`;
          if (this.OPT__KetoFriendly) param += `&health=keto-friendly`;
          if (this.OPT__kidneyFriendly) param += `&health=kidney-friendly`;
          if (this.OPT__Kosher) param += `&health=kosher`;
          if (this.OPT__LowPotassium) param += `&health=low-potassium`;
          if (this.OPT__LupineFree) param += `&health=lupine-free`;
          if (this.OPT__MustardFree) param += `&health=mustard-free`;
          if (this.OPT__LowFat) param += `&health=low-fat`;
          if (this.OPT__NoOilAdded) param += `&health=no-oil-added`;
          if (this.OPT__LowSugar) param += `&health=low-sugar`;
          if (this.OPT__Paleo) param += `&health=paleo`;
          if (this.OPT__PeanutFree) param += `&health=peanut-free`;
          if (this.OPT__Pecatarian) param += `&health=pecatarian`;
          if (this.OPT__PorkFree) param += `&health=pork-free`;
          if (this.OPT__RedMeatFree) param += `&health=red-meat-free`;
          if (this.OPT__SesameFree) param += `&health=sesame-free`;
          if (this.OPT__ShellfishFree) param += `&health=shellfish-free`;
          if (this.OPT__SoyFree) param += `&health=soy-free`;
          if (this.OPT__SugarConscious) param += `&health=sugar-conscious`;
          if (this.OPT__TreeNutFree) param += `&health=tree-nut-free`;
          if (this.OPT__Vegan) param += `&health=vegan`;
          if (this.OPT__Vegetarian) param += `&health=vegetarian`;
          if (this.OPT__WheatFree) param += `&health=wheat-free`;
          if (this.OPT__Balanced) param += `&health=balanced`;
          if (this.OPT__HighFiber) param += `&health=high-fiber`;
          if (this.OPT__HighProtein) param += `&health=high-protein`;
          if (this.OPT__LowCarb) param += `&health=low-carb`;
          if (this.OPT__LowFat) param += `&health=low-fat-abs`;
          if (this.OPT__LowSodium) param += `&health=low-sodium`;
          //this.query = this.query.replace(/\s+/g, '');
          var url = `http://localhost:8080/recipes/?search=${String(this.query)}${String(param)}`;

          const response = await fetch(url).then(resp => resp.json());
          this.recipes = [];
          for (var index in response) {
            this.recipes.push(response[index]);
          }
          console.log('Recipes:');
          console.log(this.recipes);
        } else {
          this.recipeExample = 'Search is null';
        }
      } catch (error) {
        this.recipeExample = 'Error connecting to database.';
        console.error(error);
      }
    },
  },
  name: 'app',
  components: {
    RecipeCard,
  },
};
</script>

<style>
.clickable {
  cursor: pointer;
}

.hamburger-submenu {
  margin-left: 25px !important;
}

.bc-trans {
  background-color: transparent !important;
}
.bc-white {
  background-color: white !important;
}

.md-menu {
  background-color: white;
}

#recipecards {
  display: inline-block;
}

.recipes {
  display: inline-block;
  margin: 10px;
}

.recipes:hover {
  cursor: pointer;
}

.andrew-nav {
  display: flex;
  background-image: linear-gradient(to right, rgb(229, 247, 228), rgb(201, 250, 197));
}

.md-theme-default {
  color: black !important;
  background-color: transparent;
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
