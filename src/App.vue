<template>
    <NavBar />
    <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
    components: {
        NavBar,
    },
});
</script>

<style lang="scss">
#app {
    font-family: "Manrope", sans-serif;
    color: #ffffff;
    background: var(--black-08, #141414);
}
</style>
