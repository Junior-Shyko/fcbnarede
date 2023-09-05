<script setup>
import NavBarAppVue from "@/Components/NavBarApp.vue";
import SideLeft from "@/Components/FCB/System/SideLeft.vue";
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <div>
    <Head title="Editar Usuario" />
    <div class="min-h-screen bg-gray-100">
        <NavBarAppVue />
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <v-app id="">
                <v-main class="bg-[#F3F4F6]">
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="3">
                                <SideLeft />
                            </v-col>
                            <v-col cols="12" sm="9">
                                <main>
                                    <slot />
                                </main>
                            </v-col>
                        </v-row>
                        
                    </v-container>
                </v-main>
            </v-app>
        </div>
    </div>
    </div>

        
</template>

<script>
export default {

}
</script>

<style>

</style>