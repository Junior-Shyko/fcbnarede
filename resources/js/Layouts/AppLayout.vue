<script setup>
import { ref } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";
import ProfileFeedVue from "@/Components/FCB/Feed/ProfileFeed.vue";
import NavBarAppVue from "@/Components/NavBarApp.vue";

defineProps({
  title: String,
});

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
  router.put(
    route("current-team.update"),
    {
      team_id: team.id,
    },
    {
      preserveState: false,
    }
  );
};

const logout = () => {
  router.post(route("logout"));
};
</script>

<template>
  <div>
    <Head :title="title" />
    <div class="min-h-screen bg-gray-100">
      <NavBarAppVue />
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <v-app id="inspire">
          <v-main class="bg-[#F3F4F6]">
            <v-container>
              <v-row>
                <v-col cols="12" sm="3">
                 <ProfileFeedVue />
                </v-col>
                <v-col cols="12" xs="12" sm="6">
                <main>
                    <slot />
                </main>
                </v-col>

                <v-col cols="12" xs="12" sm="3">
                    <v-card class="mx-auto">
        <v-row justify="center">
          <v-img src="/logo/avisos.png" height="200px"></v-img>
        </v-row>
        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Mural de Avisos</v-card-title>
        <v-list :items="items"></v-list>
        <div class="d-flex justify-center">
          <v-btn variant="text" color="#5c65c0" class="mb-3">Ver todos</v-btn>
        </div>
        </v-card>

      <v-card class="mx-auto mt-3">
        <v-row justify="center">
          <v-img src="/logo/aniversario.png" height="200px"></v-img>
        </v-row>
        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Aniversariantes do mês</v-card-title>
        <v-list :items="niver"></v-list>
        <div class="d-flex justify-center">
          <v-btn variant="text" color="#5c65c0" class="mb-3">Ver todos</v-btn>
        </div>
      </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-main>
        </v-app>
      </div>
      <!-- Page Content -->

    </div>
  </div>
</template>