<template>
    <div
        class="home flex justify-center align-center mt-[-120px] overflow-hidden"
    >
        <div class="images imagem">
            <img
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
        <div class="backdrop reverse absolute w-full h-[580px] self-end"></div>
        <img class="absolute w-2/10" src="@/assets/imgs/design.svg" />
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

    img {
        height: 12.5rem;
    }
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
