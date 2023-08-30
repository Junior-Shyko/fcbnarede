<script setup>
import { ref, reactive } from "vue";
import { Link, router } from "@inertiajs/vue3";
import api from "@/Services/server";
import Like from "@/Components/FCB/Like/Like.vue";
import Heart from "@/Components/FCB/Heart/Heart.vue";

const state = reactive({
  posts: [],
  isLike: ''
})

const likeUser = ref(false);
const heartUser = ref(false);

const getPosts = () => {
  api.get('api/post/todos')
    .then(res => {
      console.log(res)
      state.posts = res.data     
    })
    .catch(err => {
      console.log(err)
    })
}

getPosts();

function reloadPost()
{
  // getPosts();
  console.log('reload ' ,  heartUser.value)
  likeUser.value ? likeUser.value = false : likeUser.value = true
  heartUser.value ? heartUser.value = false : heartUser.value = true
  
}

const like = () => {
  console.log(iconLike)
  if(iconLike == 'fas fa-thumbs-up'){
    console.log('deixar de curtir')
    iconLike.value == 'far fa-thumbs-up'
  }
  console.log(iconLike)
}


</script>

<template>
  <div>
    <v-row>
      <v-col cols="12" xs="12" sm="12">
        <div class="border-t-4 border-t-[#1c0b2b] rounded-md">
          <v-card class="mx-auto mb-5">
            <template v-slot:prepend>
              <v-avatar color="grey-darken-3"
                image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-avatar>
            </template>
            <template v-slot:title>
              <v-textarea name="input-7-1" variant="filled" label="Digite o que está pensando" auto-grow clearable
                clear-icon="fas fa-circle-xmark" rows="3" row-height="20"></v-textarea>
            </template>
            <v-card-text>
              <v-row justify="space-between">
                <v-col cols="6">
                  <v-file-input clearable label="Anexar imagem" variant="outlined"></v-file-input>
                </v-col>
                <v-col cols="6" class="d-flex justify-end align-self-center">
                  <v-btn color="#413b6b" class="text-white"> Publicar </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
        <v-card class="mt-3" v-for="(item, index) in state.posts">

          <v-row :key="index">
            <v-col cols="12" class="d-flex ml-2 mt-2">
              <v-avatar color="info">
                <v-img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
              </v-avatar>
              <v-list-item class="text-black" :title="item.user.name"
                :subtitle="`${'Publicado em: ' + item.created_at}`"></v-list-item>
            </v-col>
            <v-col cols="12">
             
              <v-card class="mx-auto">
                <Link :href="route('post' , item.id)">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
                <p class="m-5">
                  {{ item.description }}
                </p>
              </Link>
               <div class="d-flex p-3">
                  <div v-for="(itemLikes, indexLikes) in item.likes">
                    <div v-if="(itemLikes.user_id == $page.props.auth.user.id)">
                      {{ likeUser = true }}                     
                    </div>                    
                  </div>
                 
                 

                    <div v-for="(itemHeart, indexHeart) in item.hearts">
                      <div v-if="(itemHeart.user_id == $page.props.auth.user.id)">
                        {{ heartUser = true }} 
                      </div>
                    </div>
                    <v-row  class="justify-space-between">
                      <Like
                      :likeUser="likeUser"
                      :post_id="item.id"
                      :count="item.like" 
                      reaction="like" 
                      @reload-posts="reloadPost" 
                    />
                    <Heart
                      :heartUser="heartUser"
                      :post_id="item.id"
                      :count="item.heart" 
                      reaction="heart" 
                      @reload-posts="reloadPost" 
                    />
                    </v-row>
                 
               </div>
              </v-card>
           
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
    items: [
      {
        title: "Aviso 01",
        value: 1,
      },
      {
        title: "Aviso 02",
        value: 2,
      },
      {
        title: "Aviso 03",
        value: 3,
      },
    ]
  }),
};
</script>