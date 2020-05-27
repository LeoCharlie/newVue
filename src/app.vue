<template>
<div>
    <MyBlog v-for="blog in blogs" :key="blog.id" :name="blog.name"/>
</div>
</template>

<script type="text/ecmascript-6">
import MyBlog from "./components/MyBlog"
export default {
    components:{
        MyBlog
    },
    data(){
        return{
            blogs:[
                {id:1,name:"blog1"},
                {id:2,name:"blog2"},
                {id:3,name:"blog3"},
            ]
        }
    }
}
</script>

<style scoped>


</style>
