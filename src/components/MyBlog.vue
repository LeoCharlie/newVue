<template>
<div>
    <h2>
        标题是{{name}}
        <MyButton :name="name"/>
    </h2>
</div>
</template>

<script type="text/ecmascript-6">
import MyButton from './MyButton'

export default {
    components:{
        MyButton
    },
    props:["name"]
}
</script>

<style scoped>


</style>
