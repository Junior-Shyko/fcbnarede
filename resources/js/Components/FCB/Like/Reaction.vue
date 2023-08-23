<script setup>
import { ref, reactive } from "vue";
import api from "@/Services/server";

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
    <div v-if="props.reaction == 'like'">
        <v-btn class="m-2">       
            <v-icon v-if="isLikes" icon="fas fa-thumbs-up" @click="likePost($page.props.auth.user.id, props.post_id)" />
            <v-icon v-else icon="far fa-thumbs-up" @click="likePost($page.props.auth.user.id, props.post_id)" />
        </v-btn>

        <label class="m-6"> {{ props.count }} {{ props.count == 1 || props.count == 0 ? 'Curtida' : 'Curtidas' }}</label>
    </div>
    <div v-if="props.reaction == 'heart'">        
        <v-icon  icon="far fa-heart" @click="likePost($page.props.auth.user.id, props.post_id)" />
       
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>