<script setup>
import { ref, reactive } from "vue";
import { Link, router, useForm } from '@inertiajs/vue3';
import LayoutApp from "@/Layouts/LayoutApp.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import MessageText from "@/Components/MessageText.vue";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import moment from 'moment';
import api from "@/Services/server";
import ListPhone from "./ListPhone.vue";

const props = defineProps({
  metadata: Object,
  parent: Object,
  modelValue: String
});

const metadata_cpf = ref(null)

const searchCep = ref(false)

const form = useForm({
  cpf: props.metadata.cpf,
  nick: props.metadata.nick,
  sex: props.metadata.sex,
  birth_date: moment(props.metadata.birth_date, "DD/MM/YYYY"),
  cep: props.metadata.cep,
  address: props.metadata.address,
  number: props.metadata.number,
  complement: props.metadata.complement,
  district: props.metadata.district,
  city: props.metadata.city,
  state: props.metadata.state,
  marital_status: props.metadata.marital_status,
  birth_date: props.metadata.birth_date,

});

const updatePassword = () => {
  form.patch('/user/update-user/' + props.parent.id, {
    preserveScroll: true,
    onSuccess: (e) => {
      //alert('Alterado com sucesso')
      toast('Sucesso', 'Seus dados foram atualizados');
    },
    onError: (e) => {
      console.log({ e })
    },
  });
};

const consultaCep = (cep) => {
  searchCep.value = true
  axios.get('https://brasilapi.com.br/api/cep/v1/' + cep)
    .then(function (response) {
      // handle success
      console.log(response.data);
      form.address = response.data.street
      form.district = response.data.neighborhood
      form.city = response.data.city
      form.state = response.data.state
      searchCep.value = false
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

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
const state = reactive({
  maskPhone: "",
  phones: [],
  dialogModel: false,
  dialogModelStore: false,
  idPhone: ""
})

const showDialogEditPhone = (number) => {
 state.dialogModelStore = true;
 state.maskPhone = number;
}

function savePhone(value) {
  //verificando se tem número
  if (state.maskPhone == "") {
    toast('Error', 'O número é obrigatório', 'danger');
    return;
  }
  const dataPhone = { number: state.maskPhone, user_id: props.parent.id }
  api.post('api/phone/store', dataPhone)
    .then(res => {
      console.log(res.data)

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
  <LayoutApp>
    <v-sheet color="#EEEEEE" rounded class="p-2">
      <form @submit.prevent="updatePassword">
        <v-row>
          <v-col cols="12" xs="12" sm="6" md="6">
            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="birth_date" value="Data de nascimento" />
              <TextInput id="birth_date" ref="metadata_birth_date" v-model="form.birth_date" type="text"
                class="mt-1 block w-full" />
              <InputError message="Obrigatório" class="mt-2" />
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6">
            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="nick" value="Como você é conhecido?" />
              <TextInput id="nick" ref="metadata_nick" v-model="form.nick" type="text" class="mt-1 block w-full" />
              <InputError message="Obrigatório" class="mt-2" />
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" xs="12" sm="4" md="4">
            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="sex" value="Gênero" />
              <select name="" id="" v-model="form.sex"
                class="mt-1 bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm  w-full">
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
              <InputError message="Obrigatório" class="mt-2" />
            </div>
          </v-col>

          <v-col cols="12" xs="12" sm="4" md="4">
            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="cpf" value="C.P.F" />
              <TextInput id="cpf" ref="metadata_cpf" v-model="form.cpf" type="text" class="mt-1 block w-full" />
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="4" md="4">
            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="marital_status" value="Estado Civil" />
              <select name="" id="marital_status" v-model="form.marital_status"
                class="mt-1 bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm  w-full">
                <option value="Solteiro">Solteiro</option>
                <option value="Casado">Casado</option>
                <option value="Separado">Separado</option>
                <option value="Divorciado">Divorciado</option>
                <option value="Viúvo">Viúvo</option>
              </select>
            </div>
          </v-col>

          <v-col cols="12" xs="12" sm="4" md="4">
            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="cep" value="C.E.P" />
              <TextInput id="cep" ref="metadata_cep" v-model="form.cep" type="text" class="mt-1 block w-full"
                v-on:blur="consultaCep(form.cep)" />
              <MessageText message="Procurando endereço" v-show="searchCep" color="text-teal-darken-3" class="mt-2" />
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="8" md="8">
            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="address" value="Logradouro" />
              <TextInput id="address" ref="metadata_address" v-model="form.address" type="text"
                class="mt-1 block w-full" />
            </div>
          </v-col>

          <v-col cols="12" xs="12" sm="6" md="6">
            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="number" value="Número" />
              <TextInput id="number" ref="metadata_number" v-model="form.number" type="number"
                class="mt-1 block w-full" />
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6">
            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="complement" value="Complemento" />
              <TextInput id="complement" ref="metadata_complement" v-model="form.complement" type="text"
                class="mt-1 block w-full" />
            </div>
          </v-col>

          <v-col cols="12" xs="12" sm="12" md="12">
            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="district" value="Bairro" />
              <TextInput id="district" ref="metadata_district" v-model="form.district" type="text"
                class="mt-1 block w-full" />
            </div>
          </v-col>

          <v-col cols="12" xs="12" sm="6" md="6">
            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="city" value="Cidade" />
              <TextInput id="city" ref="metadata_city" v-model="form.city" type="text" class="mt-1 block w-full" />
            </div>
          </v-col>

          <v-col cols="12" xs="12" sm="6" md="6">
            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="state" value="Estado" />
              <TextInput id="state" ref="metadata_state" v-model="form.state" type="text" class="mt-1 block w-full" />
            </div>
          </v-col>
          <v-divider></v-divider>
          <v-col cols="12">
            <v-btn color="primary" type="submit">Alterar</v-btn>
          </v-col>
        </v-row>
      </form>
    </v-sheet>

    <v-row>
      <v-divider></v-divider>
      <v-col cols="12" xs="12" sm="6" md="6">
        <v-btn class="m-2" v-bind="props">
          <v-icon icon="far fa-plus" />
          <label class="ml-1" @click="state.dialogModelStore = true"> Adicionar telefone </label>
        </v-btn>
        <v-dialog  v-model="state.dialogModelStore" transition="dialog-top-transition">
          <template v-slot:default="{ isActive }">
            <v-card>
              <v-toolbar color="primary" title="Cadastrar"></v-toolbar>
              <v-card-text>
                <v-col cols="12" xs="12" sm="12" md="12">
                  <v-text-field label="Número do telefone" required variant="outlined" prepend-icon="fas fa-phone"
                    v-mask-phone.br v-model="state.maskPhone"></v-text-field>
                </v-col>

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
      <v-col cols="12" xs="12" sm="6" md="6">
        <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 
        shadow-lg space-y-3 hover:bg-slate-500 hover:ring-[#5c65c0]">
          <div class="flex items-center space-x-3">
            <svg class="h-6 w-6 stroke-sky-500 group-hover:slate-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
            <h3 class="text-slate-900 group-hover:text-slate-500 text-sm font-semibold">Telefone(s) de contato:</h3>
          </div>

          <v-list lines="one">
            <v-list-item v-for="item in state.phones" :key="item.title" :title="item.number">
              <template v-slot:append>
                <v-row>
                  <v-col cols="12" xs="12" sm="12" md="12">
                    <v-btn 
                      color="text-slate-900"
                      icon="far fa-edit"
                      variant="text"
                      class="btn-phone-delete"
                      @click="showDialogEditPhone(item.number)"
                    ></v-btn>
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
  </LayoutApp>
</template>

<script>
import { createToast } from 'mosha-vue-toastify';
export default {
  data: () => {
    return {
      birth: '',
      maskPhone: ''
    };
  },
  created() {
    this.birth = this.dateTime(this.metadata.birth_date);
    this.metadata.birth_date = this.birth;
  },
  methods: {
    dateTime(value) {
      return moment(value).format('L');
    },

  },
};
</script>

<style>
.btn-phone-delete {
  font-size: 12px;
  padding: 2px;
  border-radius: 5px;
}
</style>