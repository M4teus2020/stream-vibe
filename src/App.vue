<template>
    <TopBar />
    <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TopBar from "@/components/TopBar.vue"; // @ is an alias to /src

@Options({
    components: {
        TopBar,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
    font-family: "Manrope", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    // background: var(--black-08, #141414);
}
</style>
