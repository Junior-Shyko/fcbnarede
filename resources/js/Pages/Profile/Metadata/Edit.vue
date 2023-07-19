<script setup>
import { ref } from "vue";
import { Link, router, useForm } from '@inertiajs/vue3';
import LayoutApp from "@/Layouts/LayoutApp.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import moment from 'moment';
import Dropdown from '@/Components/Dropdown.vue';

const props = defineProps({
  metadata: Object,
  parent: Object,
});

const metadata_cpf = ref(null);

const form = useForm({
    cpf: props.metadata.cpf,
    nick: props.metadata.nick,
    sex: props.metadata.sex,
    birth_date:  moment(props.metadata.birth_date).format('L')
});

const updatePassword = () => {
    form.patch('/user/update-user/' + props.parent.id,{
        preserveScroll: true,
        onSuccess: (e) => {
            alert('Alterado com sucesso')
        },
        onError: (e) => {
            console.log({e})
        },
    });
};

</script>

<template>
  <LayoutApp>

    <v-sheet color="#EEEEEE" rounded class="p-2">
        <form @submit.prevent="updatePassword">
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="6">
          <div class="col-span-6 sm:col-span-4">
            <InputLabel for="birth_date" value="Data de nascimento" />
            <TextInput
              id="birth_date"
              ref="metadata_birth_date"
              v-model="form.birth_date"
              type="text"
              class="mt-1 block w-full"
            />
            <InputError message="Obrigatório" class="mt-2" />
          </div>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6">
          <div class="col-span-6 sm:col-span-4">
            <InputLabel for="nick" value="Como você é conhecido?" />
            <TextInput
              id="nick"
              ref="metadata_nick"
              v-model="form.nick"
              type="text"
              class="mt-1 block w-full"
            />
            <InputError message="Obrigatório" class="mt-2" />
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12">
          <div class="col-span-6 sm:col-span-4">
            <InputLabel for="sex" value="Gênero" />
  
           
            <select name="" id=""
            v-model="form.sex"
            class="mt-1 bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm  w-full">
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
            </select>
            <InputError message="Obrigatório" class="mt-2" />
          </div>
        </v-col>
        <v-col cols="12" xs="12" sm="4" md="4">
          <div class="col-span-6 sm:col-span-4">
            <InputLabel for="cep" value="C.E.P" />
            <TextInput
              id="cep"
              ref="metadata_cep"
              v-model="form.cep"
              type="text"
              class="mt-1 block w-full"
            />
            <InputError :message="metadata.cep" class="mt-2" />
          </div>
        </v-col>
        <v-col cols="12" xs="12" sm="8" md="8">
          <div class="col-span-6 sm:col-span-4">
            <InputLabel for="address" value="Logradouro" />
            <TextInput
              id="address"
              ref="metadata_address"
              v-model="form.address"
              type="text"
              class="mt-1 block w-full"
            />
            <InputError :message="metadata.address" class="mt-2" />
          </div>
        </v-col>

        <v-col cols="12" xs="12" sm="6" md="6">
          <div class="col-span-6 sm:col-span-4">
            <InputLabel for="number" value="Logradouro" />
            <TextInput
              id="number"
              ref="metadata_number"
              v-model="form.number"
              type="text"
              class="mt-1 block w-full"
            />
            <InputError :message="metadata.number" class="mt-2" />
          </div>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6">
          <div class="col-span-6 sm:col-span-4">
            <InputLabel for="complement" value="Complemento" />
            <TextInput
              id="complement"
              ref="metadata_complement"
              v-model="form.complement"
              type="text"
              class="mt-1 block w-full"
            />
            <InputError :message="metadata.complement" class="mt-2" />
          </div>
        </v-col>

        <v-col cols="12" xs="12" sm="6" md="6">
          <div class="col-span-6 sm:col-span-4">
            <InputLabel for="city" value="Cidade" />
            <TextInput
              id="city"
              ref="metadata_city"
              v-model="form.city"
              type="text"
              class="mt-1 block w-full"
            />
            <InputError :message="metadata.city" class="mt-2" />
          </div>
        </v-col>

        <v-col cols="12" xs="12" sm="6" md="6">
          <div class="col-span-6 sm:col-span-4">
            <InputLabel for="state" value="Estado" />
            <TextInput
              id="state"
              ref="metadata_state"
              v-model="form.state"
              type="text"
              class="mt-1 block w-full"
            />
            <InputError :message="metadata.state" class="mt-2" />
          </div>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="12">
            <v-btn color="primary"  type="submit">Alterar</v-btn>
        </v-col>
      </v-row>
    </form>
    </v-sheet>
  </LayoutApp>
</template>

<script>

export default {
  data: () => {
    return {
        birth: ''
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
</style>