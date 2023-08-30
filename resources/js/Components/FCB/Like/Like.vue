<script setup>
import { ref, reactive } from "vue";
import api from "@/Services/server";
import { Link, router } from "@inertiajs/vue3";

const state = reactive({
    posts: [],
    isLike: false
})
const props = defineProps({
    likeUser: Boolean,
    post_id: Number,
    reaction: String,
    count: Number
});

const isLikes = ref(props.likeUser)

const emit = defineEmits(['reload-posts'])

const likePost = (user, post) => {
    
    //Alterando valor para mudar o icone
    isLikes.value ? isLikes.value = false : isLikes.value = true
   
    const postData = { user_id: user, post_id: post }
    api.post('api/like/add', postData)
    .then(res => {
        //Emit para atualizar o valor de likeUser
        emit("reload-posts", true)
    })
    .catch(err => {
        console.log(err.response.data.error)
    })
}

</script>

<template>
    <div class="justify-center">
        <v-btn variant="text" v-if="props.reaction == 'like'"
            @click="likePost($page.props.auth.user.id, props.post_id)">
            <v-icon v-if="isLikes" icon="fas fa-thumbs-up" />
            <v-icon v-else icon="far fa-thumbs-up" />
        </v-btn>
        <v-divider></v-divider>
        <div  class="mb-8" >
            <Link variant="text">
                {{ count }} amou
            </Link>
        </div>  
    </div>

</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>