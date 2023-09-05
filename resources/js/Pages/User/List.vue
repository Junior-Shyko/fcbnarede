<script setup>
import { ref, reactive } from "vue";
import api from "@/Services/server";

import LayoutApp from '@/Layouts/LayoutApp.vue';

const props = ref({
  
});
const state = reactive({
  posts: [],
  isLike: '',
  itemsPerPage: 5,
  headers: [
    {
      title: 'Conhecido',
      align: 'start',
      sortable: false,
      key: 'nick',
    },
    { title: 'CPF', align: 'end', key: 'cpf' },
    { title: 'Dt. Niver', align: 'end', key: 'birth_date' },
    { title: 'E-mail', align: 'end', key: 'email' },
    { title: 'Nome Completo', align: 'end', key: 'name' },

    { title: 'Ação', key: 'actions', sortable: false, width: '16%' },
  ],
  desserts : [
   
  ],
  search: '',
})

const getUsers = () => {
  api.get('api/user/list')
  .then( res => {
    console.log({res})
    console.log('desserts ', state.desserts)
    state.desserts = res.data
  })
  .catch(err => {
    console.log('catch ', err)
  })
}

getUsers();
</script>
<template>
  <LayoutApp title="Post">
    <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4" :elevation="2" width="100%"
      border rounded>
      <v-text-field
        v-model="state.search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-data-table 
        v-model:items-per-page="state.itemsPerPage"
        :headers="state.headers"
        :items="state.desserts"
        :search="state.search"
        item-value="name">
        <template v-slot:item.actions="{ item }">
          <v-btn size="small" variant="text" @click="editItem(item.raw)">
            <v-icon icon="fas fa-edit" title="Editar Usuario"></v-icon>
          </v-btn>
          <v-btn size="small" color="error" variant="text" @click="editItem(item.raw)">
            <v-icon icon="fas fa-trash" title="Excluir Usuario"></v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-sheet>

  </LayoutApp>
</template>
<script>
export default {
  data() {
    return {

    }
  },
}
</script>
<style lang="">
    
</style>