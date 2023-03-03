<script setup>

</script>

<template>
  <div class="main-content">
    <aside id="aside">
      <aside-menu/>
    </aside>
    <div v-show="isLoading" class="v-loading" id="loading">
      <Loading/>
    </div>
    <main v-show="main" id="main">
      <router-view/>
    </main>
  </div>
</template>

<script>
import AsideMenu from "@/web/components/AsideMenu.vue";
import Loading from "@/web/components/Loading.vue";
import router from "@/web/utils/router";
import {menuView} from "@/web/utils";

export default {
  components: { Loading,  AsideMenu},
  data(){
    return{
      isLoading: true,
      main: false,
    }
  },
  created(){
    this.$nextTick(function(){
      menuView();
      this.Loading();
    })
  },

  methods:{
    Loading() {
      router.beforeEach(() => {
        this.isLoading = true;
        this.main = false;
      })
      router.afterEach(() => {
        this.isLoading = false;
        this.main = true;
      })
    }
  }
}
</script>

<style scoped>
.main-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

aside {
  height: 100%;
}

.v-loading {
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  height: 100%;
}

@media (min-width: 1024px) {

}
</style>
