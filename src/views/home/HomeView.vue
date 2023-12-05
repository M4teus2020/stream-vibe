<template>
    <div class="mt-[-120px]">
        <div
            class="flex justify-center align-center overflow-hidden h-[500px] select-none md:h-max"
        >
            <div class="grid grid-cols-9 gap-2 pt-2.5 flex-none">
                <img
                    class="h-[9rem] lg:h-[13rem]"
                    v-for="i in 36"
                    :src="require(`@/assets/imgs/movies/movie (${i}).png`)"
                    :key="i"
                />
            </div>
            <img
                class="absolute w-full h-full h-[500px] md:h-[600px] lg:h-[800px] blend"
                src="@/assets/imgs/background.png"
            />
            <div
                class="backdrop absolute w-full h-[400px] md:h-[580px] self-start"
            ></div>
            <div
                class="backdrop absolute w-full h-[400px] md:h-[580px] self-end rotate-180 mb-[-10px]"
            ></div>
            <div
                class="absolute p-28 md:p-20 max-w-[450px] lg:max-w-[580px] shrink"
            >
                <img src="@/assets/imgs/design.svg" />
            </div>
        </div>
        <div
            class="flex flex-column justify-center align-center top-[-4rem] relative gap-20 max-w-6xl m-auto px-6 md:px-16"
        >
            <div class="flex flex-column gap-3.5 text-center">
                <h1 class="text-3xl lg:text-6xl font-bold leading-normal">
                    The Best Streaming Experience
                </h1>
                <p class="text-lg text-center">
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
</template>
<script lang="ts">
import { PlayIcon } from "@heroicons/vue/24/solid";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        PlayIcon,
    },
    data() {
        return {};
    },
});
</script>

<style scoped lang="scss">
.backdrop {
    background: linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0) 100%);
}

.blend {
    background: url(../../assets/imgs/background.png);
    background-blend-mode: overlay;
    mix-blend-mode: overlay;
}
</style>
