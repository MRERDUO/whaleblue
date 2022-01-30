<template>
    <div class="loginPage">
        <loginContent-module></loginContent-module>
    </div>
</template>

<script>
import headerModule from '../components/headerModule.vue'
import footerModule from '../components/footerModule.vue'
import LoginContentModule from '../components/loginContent-module.vue'

export default {
    components: { 
        headerModule,
        footerModule,
        "loginContent-module":LoginContentModule
    },
    name:'loginPage',
    data(){
        return{}
    }
}
</script>

<style scoped>
    
</style>