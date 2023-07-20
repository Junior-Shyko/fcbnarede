<script setup>
import { Link, router } from '@inertiajs/vue3';
</script>

<template>
    <v-sheet rounded="lg" min-height="268">
      <v-list>
        <v-list-item>
          <v-card>
            <v-row no-gutters justify="center">
              <v-col class="text-h2 d-flex justify-center bg-primary" cols="12">
                <v-avatar size="54" class="m-2">
                  <v-img
                    :src="$page.props.auth.user.profile_photo_url"
                    :alt="$page.props.auth.user.name"
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col class="text-h2 d-flex justify-center" cols="12">
                <v-list-item
                  class="grey-darken-4"
                  :title="$page.props.auth.user.name"
                  :subtitle="$page.props.auth.user.email"
                ></v-list-item>
              </v-col>
            </v-row>
          </v-card>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list item-type="divider">
        <v-list-item value="Grupos">
          <template v-slot:prepend>
            <v-list-item-action start>
              <v-list-item-title>Total de Grupos: </v-list-item-title>
            </v-list-item-action>
          </template>
          <v-list-item-action end>
            <v-chip color="primary"> 03 </v-chip>
          </v-list-item-action>
        </v-list-item>
  
        <v-list-item value="access">
          <template v-slot:prepend>
            <v-btn variant="text" :href="route('editar-usuario' , $page.props.auth.user.id)">
            <v-list-item-action start>
                  <v-list-item-title>
                  Editar Dados 
                </v-list-item-title>
            </v-list-item-action>
          </v-btn>
          </template>
          
        </v-list-item>
  
        <v-list-item value="name_gc">
          <template v-slot:prepend>
            <v-list-item-action start>
              <v-list-item-title>Nome do GC: </v-list-item-title>
            </v-list-item-action>
            <v-list-item-action end>
              <v-chip color="primary"> Emanuel </v-chip>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
  
        <div class="d-flex justify-center mt-4">
          <v-btn variant="text" color="#5c65c0">
            <Link :href="route('profile.show')"> Ver perfil </Link>
          </v-btn>
        </div>
      </v-list>
    </v-sheet>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  </style>