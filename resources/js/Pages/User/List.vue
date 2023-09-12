<script setup>
import { ref, reactive, onMounted } from "vue";
import api from "@/Services/server";
import moment from "moment"
import { createToast } from 'mosha-vue-toastify';
import LayoutDashboard from "@/Layouts/LayoutDashboard.vue";
import 'mosha-vue-toastify/dist/style.css';

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
  dialogDelete : false,
  idItem: Number
})

const toast = (titToast, descToast, typeToast) => {
  createToast({
    title: titToast,
    description: descToast
  },
    {
      showIcon: true,
      position: 'top-center',
      type: typeToast,
      transition: 'zoom',
    })
}

const deleteItem = (item) => {
  state.dialogDelete = true
  state.idItem = item.user_id
}

const closedDelete = () => {
  state.dialogDelete = false
}

const desactive = () => {
  api.post('api/user/desactive/'+state.idItem)
  .then(res => {
    console.log({res})
    toast('Sucesso', 'Usuário desativado', 'success')
    getUsers()
    state.dialogDelete = false
    state.idItem = null;
  })
  .catch(err => {
    console.log(err)
  })
}

const getUsers = () => {
  api.get('api/user/list')
  .then( res => {
    state.desserts = res.data
   
  })
  .catch(err => {
    console.log('catch ', err)
  })
}

onMounted(() => {
  getUsers();
})
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
      <v-dialog v-model="state.dialogDelete" max-width="400px">
          <v-card>
            <v-card-title class="text-red-darken-3">
              EXCLUSÃO ou DESATIVAÇÃO
            </v-card-title>
            <v-card-text>
              <div class="text-justify">
                <p>
                  <v-icon icon="fas fa-circle-info" color="error"></v-icon>
                  A <strong>EXCLUSÃO</strong> removerá de forma definitiva o usuário e a <strong>DESATIVAÇÃO</strong> fará que o usuário não apareca na lista de membros,
                  mas podendo ser restaurado posteriormente quando necessário.
                </p>
              {{ state.idItem }}
              </div>
            </v-card-text>
            <v-card-actions class="justify-between">
              <v-btn variant="tonal"  @click="closedDelete" >Desistir</v-btn>
              <v-btn color="error" variant="outlined" @click="desactive">Desativar</v-btn>
              <v-btn color="error" variant="tonal">Excluir</v-btn>
            </v-card-actions>            
          </v-card>
        </v-dialog>
    </v-sheet>

  </LayoutDashboard>1501159648
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