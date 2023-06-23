<script>
export default {
    props:{
        Pokemon: Object
    },
}
</script>
<template>
    <div class="content d-flex flex-direction align-center" :style="{ backgroundColor: Pokemon.color }">
        <img :src="Pokemon.imageUrl" :alt="Pokemon.name" class="margin-bottom">
        <div class="margin-bottom color-white">{{ Pokemon.number }}</div>
        <h4 class="margin-bottom color-white">{{ Pokemon.name }}</h4>
        <div class="margin-bottom color-grey">{{ Pokemon.type1 }}</div>
    </div>
</template>
<style lang="scss" scoped>
    .content{
        width: 100%;
        img{
            margin-top: 10px;
            width: 100px;
            height: 100px;
            background-color: #fff;
            border-radius: 50%;
        }
        .color-grey{
            color: grey;
        }
    }
</style>