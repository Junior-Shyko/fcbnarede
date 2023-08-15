<script setup>
import LayoutApp from '@/Layouts/LayoutApp.vue';
const props = defineProps({
    post: Object,
    users: Object
});
</script>

<template lang="">
   <LayoutApp title="Post">
   <v-row>
    {{ users }}
    <v-col cols="12" xs="9" sm="9">
    <v-card
    class="mx-auto"
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      Postado em: {{post.created_at}}
    </v-card-subtitle>

    <v-card-text>
      <div>{{post.description}}</div>
    </v-card-text>

    <v-card-actions>
      <v-row>
        <v-col cols="12" xs="12">
            <v-btn variant="tonal"
         
            >
            Compartilhar
            <v-icon
            icon="fas fa-share-alt" class="mb-1"></v-icon>
            </v-btn>
        </v-col>
        <v-col cols="12"  class="d-flex justify-between" >
            <v-list density="compact">
      <v-list-subheader>
        Curtidas
        <v-icon icon="far fa-thumbs-up"
        class="mb-2" color="info">
        </v-icon>
    

      </v-list-subheader>
      <v-list-item
        value="Curtidas"
        color="primary"
      >
        <template v-slot:prepend>
          <v-avatar image="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-avatar>
        </template>

        <v-list-item-title v-text="`Paulo Sergio`"></v-list-item-title>
      </v-list-item>
    </v-list>

    <v-list density="compact">
      <v-list-subheader>Amou
        <v-icon icon="far fa-heart"
        class="mb-1" color="error">
        </v-icon>
      </v-list-subheader>
      <v-list-item
        value="Curtidas"
        color="primary"
      >
        <template v-slot:prepend>
     
            <v-avatar image="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-avatar>
        
            <v-list-item-title v-text="`Ana Paula da Silva`"></v-list-item-title>
     
        </template>
        
      </v-list-item>
      <v-list-item
        value="Curtidas"
        color="primary"
      >
        <template v-slot:prepend>
     
            <v-avatar image="https://cdn.vuetifyjs.com/images/lists/3.jpg"></v-avatar>
            <v-list-item-title v-text="`Amou`"></v-list-item-title>
     
        </template>
        
      </v-list-item>
      <v-list-item
        value="Curtidas"
        color="primary"
      >
        <template v-slot:prepend>
     
            <v-avatar image="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-avatar>
            <v-list-item-title v-text="`Amou`"></v-list-item-title>
     
        </template>
        
      </v-list-item>
    </v-list>
            

    

    </v-col>

       
      </v-row>
      
    </v-card-actions>
  </v-card>
   </v-col>
   <v-col cols="12" xs="3" sm="3">
    <v-sheet
            elevation="4"
            height="200"
            width="100%"          
          ></v-sheet>
    </v-col>
   </v-row>
   </LayoutApp>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>