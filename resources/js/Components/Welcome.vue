<script setup>
import { ref, reactive } from "vue";
import { Link, router } from "@inertiajs/vue3";
import api from "@/Services/server";

const state = reactive({
  posts: []
})


const showReaction = ref(false)


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

state.posts.forEach((s) => {
      s.show = false
})

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
              <Link :href="route('post' , item.id)">
              <v-card class="mx-auto">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
                <p class="m-5">
                  {{ item.description }}
                </p>
                <v-card-actions>
                  <!-- <v-row justify="space-between">
                    <v-btn class="m-2" @click="showReaction = !showReaction">
                      <v-icon icon="far fa-heart" />
                      <label class="ml-1 mt-1"> {{ item.heart }} </label>
                    </v-btn>
                    <v-btn class="m-2">
                      <v-icon icon="far fa-thumbs-up" @click="showReaction = !showReaction" />
                      <label class="ml-1 mt-1"> {{ item.like }} </label>
                    </v-btn>
                    <v-btn class="m-2" title="Compartilhar">
                      <v-icon icon="fas fa-share-nodes" /> <label class="mt-1">  </label>
                    </v-btn>
                  </v-row> -->
                

                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </Link>
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
    ],
    niver: [
      {
        title: "10 - João Pedro",
        value: 1,
      },
      {
        title: "16 - William Correa",
        value: 2,
      },
      {
        title: "29 - Maria Clara",
        value: 3,
      },
    ],
  }),
};
</script>