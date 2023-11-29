<template>
    <div class="home flex justify-center align-center">
        <div class="images imagem">
            <img
                v-for="i in 36"
                :src="require(`@/assets/imgs/movies/movie (${i}).png`)"
                :key="i"
            />
        </div>
        <div class="flex justify-center align-center">
            <img
                class="vector absolute"
                src="@/assets/imgs/design.svg"
                alt=""
                srcset=""
            />
        </div>
    </div>
</template>
<script lang="ts"></script>

<style scoped lang="scss">
.images {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 10px;
}
</style>
