<script setup>
import { ref, reactive, watch } from "vue";
import api from "@/Services/server";
import moment from "moment"
import LayoutApp from '@/Layouts/LayoutApp.vue';
import LayoutDashboard from "@/Layouts/LayoutDashboard.vue";

const props = ref({
  
});
const state = reactive({
  posts: [],
  isLike: '',
  itemsPerPage: 10,
  headers: [
    {
      title: 'Conhecido',
      align: 'start',
      sortable: false,
      key: 'nick',
    },
    { title: 'CPF', align: 'center', key: 'cpf' },
    { title: 'Dt. Niver', align: 'center', key: 'birth_date' },
    { title: 'E-mail', align: 'center', key: 'email' },
    { title: 'Nome Completo', align: 'center', key: 'name' },

    { title: 'Ação', key: 'actions', align: 'center', sortable: false, width: '16%' },
  ],
  desserts : [
   
  ],
  search: '',
  dialogDelete : false
  
})

const deleteItem = () => {
  state.dialogDelete = true
}

const closedDelete = () => {
  state.dialogDelete = false
}

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
  <LayoutDashboard title="Post">
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
        <template v-slot:item.birth_date="{ item }">
          <label for="">{{ moment(item.birth_date).format("DD/MM/YYYY") }}</label>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn size="small" variant="text" @click="editItem(item.raw)">
            <v-icon icon="fas fa-edit" title="Editar Usuario"></v-icon>
          </v-btn>
          <v-btn size="small" color="error" variant="text" @click="deleteItem(item.raw)">
            <v-icon icon="fas fa-trash" title="Excluir Usuario"></v-icon>
          </v-btn>

          
        </template>
        
      </v-data-table>
      <v-dialog v-model="state.dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5 text-red-400" color="error">Deseja realmente fazer essa exclusão: </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div  class="d-flex justify-space-between">
                <v-btn color="blue-darken-1" variant="tonal"  @click="closedDelete" >Não</v-btn>
                <v-btn color="error" variant="tonal">Sim</v-btn>
              </div>
                <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-sheet>

  </LayoutDashboard>
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