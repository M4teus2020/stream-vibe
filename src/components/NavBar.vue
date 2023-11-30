<template>
    <nav
        class="navbar container mx-auto p-7 flex justify-between relative z-10"
    >
        <div class="ls:w-1/4 sm:w-2/6">
            <img alt="Stream Vibe logo" src="@/assets/imgs/logo.png" />
        </div>
        <ul
            class="flex shrink justify-center align-center gap-1 px-1.5 py-4 bg-black-60 border-4 border-black-120 rounded-[12px]"
            v-if="!isMobile"
        >
            <li v-bind:key="route.name" v-for="route in $router.getRoutes()">
                <router-link
                    :to="route.path"
                    class="rounded-[8px] px-[24px] py-[14px] transition hover:bg-black-150 whitespace-nowrap"
                    active-class="bg-black-100"
                >
                    {{ formatRouteName(route.name?.toString() ?? "") }}
                </router-link>
            </li>
        </ul>
        <ul class="w-1/4 flex justify-end align-center gap-4" v-if="!isMobile">
            <li>
                <MagnifyingGlassIcon class="w-6" />
            </li>
            <li>
                <BellIcon class="w-6" />
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/vue/24/solid";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        MagnifyingGlassIcon,
        BellIcon,
    },
    data() {
        return {
            isMobile: false as boolean,
        };
    },
    methods: {
        formatRouteName(name: string) {
            return name
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
        },
    },
    mounted() {
        window.onresize = () => {
            this.isMobile = window.innerWidth < 1024;
        };
    },
});
</script>

<style scoped lang="scss"></style>
