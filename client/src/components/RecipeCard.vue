<template>
  <div class="card-expansion">
    <md-card>
      <md-card-media>
        <img
          src="https://www.edamam.com/web-img/fd1/fd1afed1849c44f5185720394e363b4e.jpg"
          alt="People"
        />
      </md-card-media>

      <md-card-header>
        <div class="md-title">Chicken Gravy</div>
        <div class="md-subhead">Low-Carb, Low-Sugar</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button v-if="fav" v-model="favorite" @click="favorite">
              <md-icon>star_border</md-icon>
            </md-button>
            <md-button v-if="!fav" v-model="favorite" @click="favorite">
              <md-icon>star</md-icon>
            </md-button>
            <md-button>View</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            <p>4 cups chicken bones and wings</p>
            <p>2 tablespoons unsalted butter, softened</p>
            <p>2 tablespoons all-purpose flour</p>
            <p>4 cups homemade bruce and eric bromberg's chicken stock, or store-bought low-sodium chicken stock</p>
            <p>1 tablespoon fresh thyme leaves</p>
            <p>Coarse salt and freshly ground black pepper</p>
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "CardExpansion",
  data () {
	  return {
		  fav: true
	  }
  },
  methods: {
	  favorite() {
		  this.fav = !this.fav;
	  }
  }
};
</script>

<style scoped>
.card-expansion {
	max-height: auto;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>