<script>
export default {
    
}
</script>
<template>
    <div class="container d-flex align-start">
        <div class="blue">
            
        </div>
        <div class="red">
            
        </div>
        <div class="yellow">
    
        </div>
        <div class="green">
    
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .blue, .red, .yellow, .green{
        border: 3px solid #fff;
        margin-right: 10px;
        display: inline-block;
        border-radius: 50%;
    }
    .blue{
        width: 50px;
        height: 50px;
        background-color: blue;
    }

    .red, .yellow, .green{
        width: 30px;
        height: 30px;
    }
    .red{
        background-color: red;
    }
    .yellow{
        background-color: yellow;
    }
    .green{
        background-color: green;
    }
</style>