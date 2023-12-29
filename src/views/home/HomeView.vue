<template>
    <div class="mt-[-120px]">
        <HomeBanner />
        <div
            class="flex flex-column justify-center align-center top-[-6rem] lg:top-[-4rem] relative gap-10 max-w-6xl m-auto px-4 md:px-16"
        >
            <div class="flex flex-column gap-3.5 text-center">
                <h1 class="text-3xl lg:text-6xl font-bold leading-normal">
                    The Best Streaming Experience
                </h1>
                <p class="lg:text-lg text-grey-600">
                    StreamVibe is the best streaming experience for watching
                    your favorite movies and shows on demand, anytime, anywhere.
                    <span class="hidden md:inline">
                        With StreamVibe, you can enjoy a wide variety of
                        content, including the latest blockbusters, classic
                        movies, popular TV shows, and more. You can also create
                        your own watchlists, so you can easily find the content
                        you want to watch.
                    </span>
                </p>
            </div>
            <button
                class="inline-flex gap-2 p-4 md:p-5 px-6 bg-red-450 rounded-lg flex align-center"
            >
                <PlayIcon class="w-6" /> Start Watching Now
            </button>
        </div>
    </div>
    <div class="mx-4">
        <div>
            <p class="text-2xl font-bold">
                Explore our wide variety of categories
            </p>
            <p class="text-sm text-grey-600 mt-3">
                Whether you're looking for a comedy to make you laugh, a drama
                to make you think, or a documentary to learn something new
            </p>
        </div>
        <div class="mt-10">
            <div class="flex gap-10 overflow-scroll">
                <div
                    v-for="category in [
                        'action',
                        'adventure',
                        'comedy',
                        'drama',
                        'horror',
                    ]"
                    :key="category"
                    class="border-2 border-black-150 rounded-[12px] p-5 bg-black-100 box-border"
                >
                    <div class="grid grid-cols-2 gap-1 w-[140px]">
                        <img
                            v-for="i in 4"
                            :src="
                                require(`@/assets/imgs/movies/${category} (${i}).png`)
                            "
                            :key="i"
                            class="rouded-lg"
                        />
                    </div>
                    <div class="dropdown" />
                    <div class="flex justify-between">
                        <p class="capitalize">{{ category }}</p>
                        <ArrowRightIcon class="w-5" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { PlayIcon, ArrowRightIcon } from "@heroicons/vue/24/solid";
import { defineComponent } from "vue";
import HomeBanner from "./components/HomeBanner.vue";

export default defineComponent({
    components: {
        HomeBanner,
        PlayIcon,
        ArrowRightIcon,
    },
    data() {
        return {};
    },
});
</script>

<style scoped lang="scss">
.dropdown:after {
    width: 193px;
    height: 210px;
    position: relative;
    left: -27.8px;
    top: -70px;
    background: linear-gradient(
        180deg,
        rgba(26, 26, 26, 0) 0%,
        #1a1a1a 101.79%
    );
}
</style>
