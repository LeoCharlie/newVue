// import Vue from "vue" //导入的时候默认不带解析器
// import Vue from "vue/dist/vue.esm.js"//导入带解析器的版本
import Vue from "vue" //改完配置，起了别名，找的是带解析器的版本
import App from "./app.vue"

new Vue({
    el:"#root",
    // render:function(el){
    //     el(App)
    // },
    render: h=>h(App)
    // 这句代码完成如下操作
    // 第一步：把导入的App组件配置对象，在vue模板中解析为一个标签<App/>来注册使用
    // 第二步：把这标签在模板中进行渲染


    // 第二种方式
    // components:{
    //     App
    // },
    // template:"<App/>"
    // 会报错，因为vue默认不带解析器
    // 默认导入的是dist/vue.runtime.common.js这个版本
    // 需要导入带解析器的vue/dist/vue.esm.js版本
})