<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <transition name="move" mode="out-in"><router-view></router-view></transition>

    </div>
</template>

<script>
    import header from './header.vue';
    import sidebar from './sidebar.vue';
    export default {
        components:{
            'vHead':header,
            'vSidebar':sidebar
        }
    }

</script>
<style>
    @import "../../../static/css/admin.css";
</style>
