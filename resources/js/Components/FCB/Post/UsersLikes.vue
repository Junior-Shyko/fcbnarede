<script setup>
const props = defineProps({
    usersLikes: Object,
    titleReaction: String,
    iconReaction: String,
    colorReaction: String,
    userAuth: Number
});
</script>

<template>
<v-row>
    <v-col cols="12" xs="12" sm="12">
       
        <v-list-subheader>
            {{titleReaction}}
            <v-btn @click="addLike">
                <v-icon :icon="`far ${iconReaction}`" class="mb-2" :color="colorReaction"></v-icon>
            </v-btn>
        </v-list-subheader>
        <div v-for="(item , index) in usersLikes">
            <v-list-item value="Curtidas" color="primary" :key="index">
                <template v-slot:prepend>
                    <v-avatar :image="`https://cdn.vuetifyjs.com/images/lists/${index+2}.jpg`"></v-avatar>
                </template>
                <v-list-item-title v-text="item.user.name"></v-list-item-title>
            </v-list-item>
        </div>
    </v-col>
</v-row>
</template>

<script>
export default {

}
</script>

<style lang="">
    
</style>
