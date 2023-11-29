<template>
    <div class="tool-bar">
        <div>
            <img alt="Stream Vibe logo" src="../assets/logo.png" />
        </div>
        <div>
            <nav class="bg-red">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
            </nav>
        </div>
        <div>
            <MagnifyingGlassIcon class="h-6 w-6 text-blue-500" />
            <BellIcon class="h-6 w-6 text-blue-500" />
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/vue/24/solid";

@Options({
    components: {
        MagnifyingGlassIcon,
        BellIcon,
    },
})
export default class TopBar extends Vue {}
</script>

<style scoped lang="scss">
.toolbar {
    display: flex;
    width: 100%;
    padding: 30px 162px;
    justify-content: space-between;
    align-items: center;
}
nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
