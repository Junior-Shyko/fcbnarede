<template>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" color="blue-grey-lighten-4">
        <v-card>
            <v-sheet :height="65" >
                <div class="d-flex justify-center pt-4">
                    <h3 class="text-xl" >Boaz na rede</h3>
                </div>
            </v-sheet>
            <v-layout>
                
            <v-navigation-drawer
                permanent
                color="blue-grey-lighten-4"
            >
                <v-list nav>
               
                  <v-list-item prepend-icon="fas fa-rss" title="Feed" value="inbox"
                    color="primary"
                    variant="plain"
                    :to="route('dashboard')"
                    >
                  </v-list-item>
               
                <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors" value="supervisors"></v-list-item>
                <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main style="height: 250px"></v-main>
            </v-layout>
        </v-card>
      </v-navigation-drawer>
  
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
  
      <v-main>
        <!--  -->
        <slot />
      </v-main>
    </v-app>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import { Link } from '@inertiajs/vue3';
    const drawer = ref(null)
  </script>
  
  <script>
    export default {
      data: () => ({ drawer: null }),
    }
  </script>