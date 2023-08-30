<script setup>
import { ref, reactive } from "vue";
import api from "@/Services/server";
import { Link, router } from "@inertiajs/vue3";

const state = reactive({
    posts: []
})
const props = defineProps({
    heartUser: Boolean,
    post_id: Number,
    reaction: String,
    count: Number
});

const isHeart = ref(props.heartUser)

const emit = defineEmits(['reload-posts'])


const heartPost = (user, post) => {
    //Alterando valor para mudar o icone
    isHeart.value ? isHeart.value = false : isHeart.value = true
    const postData = { user_id: user, post_id: post }
    api.post('api/heart/add', postData)
        .then(res => {
            //Emit para fazer um reload nos posts
            emit("reload-posts", true)
            // console.log(isHeart.value)
        })
        .catch(err => {
            console.log(err.response.data.error)

        })
}

</script>

<template>
    <div class="justify-center">
        <v-btn variant="text" v-if="props.reaction == 'heart'" @click="heartPost($page.props.auth.user.id, props.post_id)">
            <v-icon v-if="isHeart" icon="fas fa-heart" />
            <v-icon v-else icon="far fa-heart" />
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