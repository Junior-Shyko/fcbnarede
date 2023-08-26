<script setup>
import { ref, reactive } from "vue";
import api from "@/Services/server";
import { Link, router } from "@inertiajs/vue3";

const state = reactive({
    posts: [],
    isLike: false
})

const isLikes = ref(false)

const emit = defineEmits(['reload-posts'])


const props = defineProps({
    user_id: Number,
    post_id: Number,
    reaction: String,
    count: Number
});

const likePost = (user, post) => {
    //Alterando valor para mudar o icone
    isLikes.value ? isLikes.value = false : isLikes.value = true

    const postData = { user_id: user, post_id: post }
    api.post('api/like/add', postData)
        .then(res => {
            //Emit para fazer um reload nos posts
            emit("reload-posts", true)
            console.log(isLikes.value)
        })
        .catch(err => {
            console.log(err.response.data.error)

        })
}

const myLike = (postId, userId) => {
    //userId é o usuario de quem está logado
    api.get('api/like/all/post/' + postId)
        .then(res => {
            //Verificando se já curtiu o post
            res.data.forEach(element => {
                if (element.user_id == userId && element.post_id == postId) {
                    isLikes.value = true
                }
            });
        })
        .catch(err => {
            console.error(err)
        })
}
//PASSANDO PARAMETROS PARA FUNCAO
myLike(props.post_id, props.user_id);
</script>

<template>
    <v-row class="justify-space-between">
        <v-btn 
            class="m-2"
            variant="text"
            v-if="props.reaction == 'like'"
            @click="likePost($page.props.auth.user.id, props.post_id)" 
        >
        <v-icon v-if="isLikes" icon="fas fa-thumbs-up"/>
        <v-icon v-else icon="far fa-thumbs-up"/>
    </v-btn>

    <v-btn class="m-2">
        <v-icon v-if="isLikes" icon="fas fa-heart"
            @click="likePost($page.props.auth.user.id, props.post_id)" />
        <v-icon v-else icon="far fa-heart" @click="likePost($page.props.auth.user.id, props.post_id)" />
    </v-btn>

    <v-btn class="m-2" variant="text">
        <v-icon v-if="isLikes" icon="fas fa-share"
            @click="likePost($page.props.auth.user.id, props.post_id)" />
        <v-icon v-else icon="fas fa-share" @click="likePost($page.props.auth.user.id, props.post_id)" />
    </v-btn>
    
    <v-divider></v-divider>
    <Link class="mb-3" :href="route('post' , props.post_id)" >
       <v-btn variant="text">
        <label class="text-xs"> 
            {{props.count}} {{ props.count == 1 || props.count == 0 ? 'Curtida' : 'Curtidas' }}
        </label>    
       </v-btn>
    </Link>

    <Link class="mb-3" :href="route('post' , props.post_id)" >
       <v-btn variant="text">
        <label class="text-xs"> 
            {{props.count}} {{ props.count == 1 || props.count == 0 ? 'Curtida' : 'Curtidas' }}
        </label>    
       </v-btn>
    </Link>
        <label class="text-xs mt-2 mr-4"> 
           Compartilhar
        </label> 
    </v-row>
   
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>