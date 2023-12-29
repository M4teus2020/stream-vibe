<template>
    <div
        class="flex justify-center align-center overflow-hidden h-[500px] select-none md:h-max"
    >
        <div class="grid grid-cols-9 gap-2 pt-2.5 flex-none mt-20 md:mt-0">
            <img
                class="h-[9rem] lg:h-[13rem]"
                v-for="i in 36"
                :src="require(`@/assets/imgs/movies/movie (${i}).png`)"
                :key="i"
            />
        </div>
        <img
            class="absolute w-full h-[500px] md:h-[600px] lg:h-[800px] blend"
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
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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
    background: url(@/assets/imgs/background.png);
    background-blend-mode: overlay;
    mix-blend-mode: overlay;
}
</style>
