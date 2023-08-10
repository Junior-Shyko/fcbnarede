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
import CreateAndEdit from "@/Components/FCB/Phone/CreateAndEdit.vue";

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
              <TextInput id="cep" ref="metadata_cep" v-model="form.cep" v-mask-cep type="text" class="mt-1 block w-full"
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

    <!-- modal para cadastrar o telefone -->
    <CreateAndEdit :parent="props.parent"/>
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