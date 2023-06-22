<script>
export default {
    
}
</script>
<template>
    <div class="pokeball d-flex justify-center align-center">
        <img src="../assets/clip-art-pokeball-png.jpg" alt="pokeball">
    </div>
</template>
<style lang="scss" scoped>
    .pokeball{
        width: 100vw;
        height: 100vh;

        img{
            width: 100px;
            height: 100px;
            animation: rotate 1s infinite linear;
        }
        @keyframes rotate{
            from{
                transform: rotate(0deg);
            }
            to{
                transform: rotate(360deg);
            }
        }
    }
</style>