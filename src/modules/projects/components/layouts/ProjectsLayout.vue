<template>
    <div class="flex flex-col">
        <top-menu />
        <main class="flex">
            <side-menu />
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup lang="ts">
import SideMenu from '@/modules/common/components/SideMenu.vue';
import TopMenu from '@/modules/common/components/TopMenu.vue';


</script>
