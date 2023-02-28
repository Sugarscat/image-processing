<script setup>
import { useDark, useToggle } from '@vueuse/core';
import IconLang from "@/web/components/icons/IconLang.vue";
import IconDark from "@/web/components/icons/IconDark.vue";
import IconLight from "@/web/components/icons/IconLight.vue";
import IconChange from "@/web/components/icons/IconChange.vue";
import IconCompress from "@/web/components/icons/IconCompress.vue";
import IconPromote from "@/web/components/icons/IconPromote.vue";
import IconAi from "@/web/components/icons/IconAi.vue";
import {menuView} from "@/web/utils";
import IconAbout from "@/web/components/icons/IconAbout.vue";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="side-menu side-menu-brief" id="sideMenu">
    <div class="menu-top">
      <button class="btn-menu" @click="menuView()">
        <div class="container">
          <input class="label-check" id="label-check" type="checkbox">
          <label for="label-check" class="hamburger-label">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <label></label></label></div>
      </button>
    </div>
    <div class="menu">
      <router-link to="/change">
        <IconChange/>
        <span style="margin: 5px">
          格式转换
        </span>
      </router-link>
      <router-link to="/compress">
        <IconCompress/>
        <span style="margin: 5px">
          体积压缩
        </span>
      </router-link>
      <router-link to="/promote">
        <IconPromote/>
        <span style="margin: 5px">
          画质提升
        </span>
      </router-link>
      <router-link to="/ai">
        <IconAi/>
        <span style="margin: 5px">
          AI画图
        </span>
      </router-link>
      <router-link to="/about">
        <IconAbout/>
        <span style="margin: 5px">
          关于
        </span>
      </router-link>
    </div>
    <div class="ui-config">
      <button @click="toggleDark()" class="btn-theme"><IconDark/><IconLight/></button>
      <button @click="choiceLang()" class="btn-choice-lang"><IconLang/></button>
    </div>
  </div>
  <div class="el-dialog-background" id="el-dialog-background" style="display: none">
    <div class="el-dialog-lang" id="el-dialog-lang">
      <div class="el-lang-header">
        {{ $t('lang') }}
        <button class="btn-lang-close" @click="closeLang"><icon-close/></button>
      </div>
      <div class="el-lang-content">
        <el-scrollbar height="250px">
          <ul>
            <li v-for="item in 20" :key="item">
              <el-button color="#549ced" :dark="isDark" plain>简体中文</el-button>
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import IconClose from "@/web/components/icons/IconClose.vue";
import {bodyWidth, menuView} from "@/web/utils";

export default {
  name: "AsideMenu",
  components: {IconClose},
  data(){
    return{

    }
  },
  created(){
    this.$nextTick(function(){
      window.addEventListener('resize', function (e) {
        let element = document.getElementById("label-check");
        if (bodyWidth > 1024)
            element.checked = true;
        else{
            element.checked = false;
          }
        menuView();
      }, false);
    })
  },
  methods:{
    choiceLang(){
      setTimeout(function (){
        document.getElementById("el-dialog-background").style.display = 'inline';
      }, 30)
    },
    closeLang(){
      document.getElementById("el-dialog-background").style.display = 'none';
    },
  }
}
</script>

<style scoped>
.side-menu {
  width: 200px;
  height: 100%;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0s ease-in-out;
  border-right: 1px solid var(--color-border2);
}

.side-menu-brief {
  width: 50px;
}

.side-menu .menu-top {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid var(--color-border2);
}

.side-menu .menu-top .btn-menu{
  width: 25px;
  height: 40px;
  position: absolute;
  right: 12px;
  background: rgba(0, 0, 0, 0);
  border: none;
}

/*label-check*/
.container {
  height: 40px;
  position: absolute;
  top: 0;
  left: -1px;
}

.label-check {
  display: none;
}

.hamburger-label {
  width: 25px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
  position: absolute;
  padding-top: 10px;
}

.hamburger-label div {
  width: 25px;
  height: 2px;
  background-color: var(--color-fill);
  position: absolute;
  border-radius: 1px;
}

.line1 {
  transition: all .3s;
}

.line2 {
  margin: 8px 0 0 0;
  transition: 0.3s;
}

.line3 {
  margin: 16px 0 0 0;
  transition: 0.3s;
}

#label-check:checked + .hamburger-label .line1 {
  transform: rotate(-47.5deg) scaleX(-.53) translate(10px, -1px);
}

#label-check:checked + .hamburger-label .line3 {
  transform: rotate(47.5deg) scaleX(-.53) translate(10px, 1px);
}

#label-check:checked + .hamburger-label .line2 {
  width: 21px;
}
/*label-check end*/

.side-menu .menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.side-menu .menu a {
  height: 40px;
  width: 150px;
  border-radius: 3px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 0s ease-in-out;
}

.side-menu .menu span {
  display: inline;
}

.ui-config {
  position: absolute;
  bottom: 20px;
}

.btn-theme {
  width: 25px;
  height: 25px;
  background: rgba(0, 0, 0, 0);;
  border: none;
  cursor: pointer;
  margin: 10px;
}

.icon-light{
  display: none;
  transition: all 0.35s ease-in-out;
}

.icon-dark {
  transition: all 0.35s ease-in-out;
}

.dark .icon-dark {
  display: none;
}

.dark .icon-light {
  display: inline;
}

.btn-choice-lang {
  width: 25px;
  height: 25px;
  background: rgba(0, 0, 0, 0);;
  border: none;
  cursor: pointer;
  margin: 10px;
}

.el-dialog-lang {
  width: 300px;
  height: 300px;
  background-color: var(--color-background-soft);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 10px;
}

.el-lang-header {
  height: 30px;
  border-bottom: 1px solid var(--color-border2);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}

.btn-lang-close {
  width: 16px;
  height: 16px;
  background: rgba(0, 0, 0, 0);
  border: none;
  margin: 5px;
  cursor: pointer;
}

.el-lang-content ul{
  display: flex;
  justify-content: center;
  flex-flow: wrap;
}

.el-lang-content li {
  height: 32px;
  width: 88px;
  margin: 5px 10px;
}

/*side-menu-brief*/
.side-menu-brief .menu a{
  width: 40px;
  justify-content: center;
}

.side-menu-brief .menu span{
  display: none;
}
</style>
