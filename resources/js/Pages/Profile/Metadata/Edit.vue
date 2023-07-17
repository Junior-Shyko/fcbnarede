<script setup>
import { ref } from 'vue';
import LayoutApp from '@/Layouts/LayoutApp.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import InputError from '@/Components/InputError.vue';

const props = defineProps({
    user: Object
});

const metadata_cpf = ref(null);

</script>

<template>
  <LayoutApp>

    <!-- {{ console.log(typeof user) }} -->

    <v-sheet color="#EEEEEE" rounded class="p-2">
        <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
                <div class="col-span-6 sm:col-span-4">
            <InputLabel for="cpf" value="Digite seu cpf" />
            <TextInput
                id="cpf"
                ref="metadata_cpf"
                v-model="user.cpf"
                type="text"
                class="mt-1 block w-full"
            />
            <InputError :message="user.cpf" class="mt-2" />
        </div>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">

                <div class="col-span-6 sm:col-span-4">
            <InputLabel for="cpf" value="Digite seu cpf" />
            <TextInput
                id="cpf"
                ref="metadata_cpf"
                v-model="user.cpf"
                type="text"
                class="mt-1 block w-full"
            />
            <InputError :message="user.cpf" class="mt-2" />
        </div>
            </v-col>
        </v-row>
        

        <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
                <div class="col-span-6 sm:col-span-4">
            <InputLabel for="cpf" value="Digite seu cpf" />
            <TextInput
                id="cpf"
                ref="metadata_cpf"
                v-model="user.cpf"
                type="text"
                class="mt-1 block w-full"
            />
            <InputError :message="user.cpf" class="mt-2" />
        </div>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">

                <div class="col-span-6 sm:col-span-4">
            <InputLabel for="cpf" value="Digite seu cpf" />
            <TextInput
                id="cpf"
                ref="metadata_cpf"
                v-model="user.cpf"
                type="text"
                class="mt-1 block w-full"
            />
            <InputError :message="user.cpf" class="mt-2" />
        </div>
            </v-col>
        </v-row>

    </v-sheet>
    
    </LayoutApp>
</template>

<script>
export default {
    data: () => {
        return {
           
        }
    }
}
</script>

<style>

</style>