<script setup>
import LayoutApp from '@/Layouts/LayoutApp.vue';
import api from '@/Services/server';
import { Link, router } from '@inertiajs/vue3';
import { ref, reactive } from "vue";
import UsersLikes from "@/Components/FCB/Post/UsersLikes.vue"
import moment from 'moment';
import 'moment/dist/locale/pt-br'

const props = defineProps({
  post: Object,
  users: Object
});

const usersLikes = ref([])

const userLikes = () => {
  api.get('api/like/all/post/' + props.post.id)
  .then(res => {
    console.log({res})
    usersLikes.value = res.data
  })
  .catch( err => {
    console.log({err})
  })
}

userLikes();

</script>

<template lang="">
   <LayoutApp title="Post">
   <v-row>
   <v-col cols="12">
    <v-sheet
      elevation="2"
      class="mx-auto"
      rounded="rounded"
    >
      <v-btn :href="route('dashboard')">
        <v-icon icon="fas fa-arrow-left" class="mb-1"></v-icon> Voltar

      </v-btn>
    </v-sheet>
   </v-col>
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
      Postado à {{ moment([props.post.created_at]).toNow(true)}}
    </v-card-subtitle>

    <v-card-text>
      <div>{{post.description}}</div>
    </v-card-text>

    <v-card-actions>
      <v-row>
        <v-col cols="12" xs="12">
          <v-btn variant="tonal">
            Compartilhar
            <v-icon icon="fas fa-share-alt" class="mb-1 ml-2"></v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12" xs="12" sm=12 md="6">
          <v-list density="compact">
            <UsersLikes 
              :usersLikes="usersLikes"
              titleReaction="Curtidas"
              iconReaction="fa-thumbs-up"
              colorReaction="info" 
              :userAuth="$page.props.auth.user.id" />     
          </v-list>
        </v-col>

        <v-col cols="12" xs="12" sm=12 md="6">
          <v-list density="compact">
            <UsersLikes
              :usersLikes="usersLikes"
              titleReaction="Amou"
              iconReaction="fa-heart"
              colorReaction="error" 
              :userAuth="$page.props.auth.user.id"/>     
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