<template>
    <nav class="navbar container mx-auto p-7 flex justify-between">
        <div class="w-1/4">
            <img alt="Stream Vibe logo" src="@/assets/imgs/logo.png" />
        </div>
        <ul
            class="flex justify-center align-center gap-1 px-1.5 py-4 bg-black-60 border-4 border-black-120 rounded-[12px]"
        >
            <li v-bind:key="route.name" v-for="route in $router.getRoutes()">
                <router-link
                    :to="route.path"
                    class="rounded-[8px] px-[24px] py-[14px] transition hover:bg-black-150"
                    active-class="bg-black-100"
                >
                    {{ formatRouteName(route.name?.toString() ?? "") }}
                </router-link>
            </li>
        </ul>
        <ul class="w-1/4 flex justify-end align-center gap-4">
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
        return {};
    },
    methods: {
        formatRouteName(name: string) {
            return name
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
        },
    },
});
</script>

<style scoped lang="scss"></style>
