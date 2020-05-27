<template>
<div>
    <button @click="count++">点击了{{name}}--{{count}}次</button>
</div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            count:0
        }
    },
    props:["name"]
}
</script>

<style scoped>


</style>
