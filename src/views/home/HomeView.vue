<template>
    <div class="mt-[-120px]">
        <div class="flex justify-center align-center overflow-hidden">
            <div class="images imagem">
                <img
                    class="h-[10rem] lg:h-[12.5rem]"
                    v-for="i in 36"
                    :src="require(`@/assets/imgs/movies/movie (${i}).png`)"
                    :key="i"
                />
            </div>
            <img
                class="absolute w-full h-full blend"
                src="@/assets/imgs/background.png"
            />
            <div class="backdrop absolute w-full h-[580px] self-start"></div>
            <div
                class="backdrop reverse absolute w-full h-[580px] self-end"
            ></div>
            <div class="absolute p-20 max-w-[450px] lg:max-w-[600px] shrink">
                <img src="@/assets/imgs/design.svg" />
            </div>
        </div>
        <div></div>
    </div>
</template>
<script lang="ts"></script>

<style scoped lang="scss">
.images {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 0.625rem;
    padding-top: 10px;
    flex-shrink: 0;
}

.backdrop {
    background: linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0) 100%);
    &.reverse {
        transform: rotate(180deg);
    }
}

.blend {
    background: url(../../assets/imgs/background.png);
    background-blend-mode: overlay;
    mix-blend-mode: overlay;
}
</style>
