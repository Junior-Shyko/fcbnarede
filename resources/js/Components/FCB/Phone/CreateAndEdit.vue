<script setup>
import { ref, reactive } from "vue";
import api from "@/Services/server";
import { createToast } from 'mosha-vue-toastify';

const props = defineProps({
  parent: Object
});

const state = reactive({
  maskPhone: "",
  phones: [],
  dialogModel: false,
  dialogModelStore: false,
  idPhone: "",
  isEdit: false,
  idPhone: null,
  titleModal: 'Cadastrar'
})

const toast = (titToast, descToast, typeToast) => {
  createToast({
    title: titToast,
    description: descToast
  },
    {
      showIcon: 'true',
      position: 'top-center',
      type: typeToast,
      transition: 'zoom',
    })
}

const getPhone = () => {
  api.get('api/phone/user/' + props.parent.id)
    .then(res => {
      console.log(res)
      state.phones = res.data
    })
    .catch(err => {
      console.log({ err })
    });
}
//INICIANDO COM OS NÚMEROS EXISTENTES
getPhone();

const showDialogEditPhone = (number, id) => {
  state.dialogModelStore = true
  state.maskPhone = number
  state.isEdit = true
  state.idPhone = id
  state.titleModal = 'Alterar número'
}

function savePhone(value) {
  //verificando se tem número
  if (state.maskPhone == "") {
    toast('Error', 'O número é obrigatório', 'danger');   
    return;
  }
  const dataPhone = { number: state.maskPhone, user_id: props.parent.id }

  if(!state.isEdit) {
    api.post('api/phone/store', dataPhone)
    .then(res => {
      if (res.data.success == false) {
        toast('Error', 'Ocorreu um erro', 'danger');
        return;
      }
      toast('Sucesso', 'Seus dados foram atualizados', 'default');
      state.maskPhone = '';
      getPhone();
    })
    .catch(err => {
      console.log({ err })
    })
  }else{
    dataPhone.id = state.idPhone
    api.patch('api/phone/update', dataPhone)
    .then(res => {
      if (res.data.success == false) {
        toast('Error', 'Ocorreu um erro', 'danger');
        return;
      }
      toast('Sucesso', 'Seus dados foram atualizados', 'default');
      state.maskPhone = '';
      getPhone();
    })
    .catch(err => {
      console.log({ err })
    })
  }





}

const showDialogPhone = (number) => {
  state.dialogModel = true
  state.idPhone = number
}

const removePhone = () => {
  api.delete('api/phone/delete/' + state.idPhone)
    .then(res => {
      getPhone();
      state.dialogModel = false
      toast('Sucesso', 'Número de telefone excluído');
    })
    .cache(err => {
      toast('Erro', 'Ocorreu um erro inesperado');
    })
}
</script>
<template>
        <v-row class="mt-2">
      <v-divider></v-divider>
      <v-col cols="12" xs="12" sm="4" md="4">
        <v-btn class="m-2" v-bind="props" @click="state.dialogModelStore = true">
          <v-icon icon="far fa-plus" />
          <label class="ml-1"> Adicionar telefone </label>
        </v-btn>
        <v-dialog v-model="state.dialogModelStore" transition="dialog-top-transition" max-width="300px">
          <template v-slot:default="{ isActive }">
            <v-card>
              <v-toolbar color="primary" :title="state.titleModal"></v-toolbar>
              <v-card-text>
                <v-text-field label="Número do telefone" required variant="outlined" prepend-icon="fas fa-phone"
                  v-mask-phone.br v-model="state.maskPhone"></v-text-field>

              </v-card-text>
              <v-card-actions class="justify-space-between">
                <v-btn variant="text" @click="isActive.value = false">Sair</v-btn>
                <v-btn @click=savePhone($event)>
                  Salvar
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>

      </v-col>

      <v-col cols="12" xs="12" sm="8" md="8">
        <a href="#" class="group block rounded-lg p-6 bg-white ring-1 ring-slate-900/5 
        shadow-lg space-y-3 hover:bg-slate-500 hover:ring-[#5c65c0] ">
          <div class="flex items-center text-center space-x-0">
            <svg class="h-6 w-6 stroke-sky-500 group-hover:slate-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
            <h3 class="text-slate-900 group-hover:text-slate-500 text-sm font-semibold text-center">Telefone(s) de
              contato:</h3>
          </div>

          <v-list lines="one">
            <v-list-item v-for="item in state.phones" :key="item.title" :title="item.number">
              <template v-slot:append>
                <v-row>
                  <v-col cols="12" xs="12" sm="12" md="12">
                    <v-btn color="text-slate-900" icon="far fa-edit" variant="text" class="btn-phone-delete"
                      @click="showDialogEditPhone(item.number, item.id)"></v-btn>
                    <v-btn color="red-lighten-2" icon="fas fa-trash" variant="text" class="btn-phone-delete"
                      @click="showDialogPhone(item.id)"></v-btn>
                  </v-col>
                </v-row>

              </template>
            </v-list-item>
          </v-list>
        </a>
        <v-dialog v-model="state.dialogModel" width="auto">
          <v-card>
            <v-card-text class="text-red-darken-3">
              Deseja realmente excluir esse número?
            </v-card-text>
            <v-card-actions class="justify-between">
              <v-btn color="primary" @click="state.dialogModel = false">Não</v-btn>
              <v-btn color="primary" @click="removePhone">Sim</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>