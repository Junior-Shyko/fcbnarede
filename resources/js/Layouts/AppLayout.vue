<script setup>
import { ref } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";
import ApplicationMark from "@/Components/ApplicationMark.vue";
import Banner from "@/Components/Banner.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";

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
      <nav class="bg-white border-b border-gray-100">
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <!-- Logo -->
              <div class="shrink-0 flex items-center">
                <Link :href="route('dashboard')">
                  <ApplicationMark class="block h-9 w-auto" />
                </Link>
              </div>

              <!-- Navigation Links -->
              <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                <NavLink
                  :href="route('dashboard')"
                  :active="route().current('dashboard')"
                >
                  Dashboard
                </NavLink>
              </div>
            </div>

            <div class="hidden sm:flex sm:items-center sm:ml-6">
              <div class="ml-3 relative">
                <!-- Teams Dropdown -->
                <Dropdown
                  v-if="$page.props.jetstream.hasTeamFeatures"
                  align="right"
                  width="60"
                >
                  <template #trigger>
                    <span class="inline-flex rounded-md">
                      <button
                        type="button"
                        class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"
                      >
                        {{ $page.props.auth.user.current_team.name }}

                        <svg
                          class="ml-2 -mr-0.5 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                          />
                        </svg>
                      </button>
                    </span>
                  </template>

                  <template #content>
                    <div class="w-60">
                      <!-- Team Management -->
                      <template v-if="$page.props.jetstream.hasTeamFeatures">
                        <div class="block px-4 py-2 text-xs text-gray-400">
                          Manage Team
                        </div>

                        <!-- Team Settings -->
                        <DropdownLink
                          :href="
                            route(
                              'teams.show',
                              $page.props.auth.user.current_team
                            )
                          "
                        >
                          Team Settings
                        </DropdownLink>

                        <DropdownLink
                          v-if="$page.props.jetstream.canCreateTeams"
                          :href="route('teams.create')"
                        >
                          Create New Team
                        </DropdownLink>

                        <!-- Team Switcher -->
                        <template
                          v-if="$page.props.auth.user.all_teams.length > 1"
                        >
                          <div class="border-t border-gray-200" />

                          <div class="block px-4 py-2 text-xs text-gray-400">
                            Switch Teams
                          </div>

                          <template
                            v-for="team in $page.props.auth.user.all_teams"
                            :key="team.id"
                          >
                            <form @submit.prevent="switchToTeam(team)">
                              <DropdownLink as="button">
                                <div class="flex items-center">
                                  <svg
                                    v-if="
                                      team.id ==
                                      $page.props.auth.user.current_team_id
                                    "
                                    class="mr-2 h-5 w-5 text-green-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>

                                  <div>{{ team.name }}</div>
                                </div>
                              </DropdownLink>
                            </form>
                          </template>
                        </template>
                      </template>
                    </div>
                  </template>
                </Dropdown>
              </div>

              <!-- Settings Dropdown -->
              <div class="ml-3 relative">
                <Dropdown align="right" width="48">
                  <template #trigger>
                    <button
                      v-if="$page.props.jetstream.managesProfilePhotos"
                      class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                    >
                      <img
                        class="h-8 w-8 rounded-full object-cover"
                        :src="$page.props.auth.user.profile_photo_url"
                        :alt="$page.props.auth.user.name"
                      />
                    </button>

                    <span v-else class="inline-flex rounded-md">
                      <button
                        type="button"
                        class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"
                      >
                        {{ $page.props.auth.user.name }}

                        <svg
                          class="ml-2 -mr-0.5 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </button>
                    </span>
                  </template>

                  <template #content>
                    <!-- Account Management -->
                    <div class="block px-4 py-2 text-xs text-gray-400">
                      Manage Account
                    </div>

                    <DropdownLink :href="route('profile.show')">
                      Profile
                    </DropdownLink>

                    <DropdownLink
                      v-if="$page.props.jetstream.hasApiFeatures"
                      :href="route('api-tokens.index')"
                    >
                      API Tokens
                    </DropdownLink>

                    <div class="border-t border-gray-200" />

                    <!-- Authentication -->
                    <form @submit.prevent="logout">
                      <DropdownLink as="button"> Log Out </DropdownLink>
                    </form>
                  </template>
                </Dropdown>
              </div>
            </div>

            <!-- Hamburger -->
            <div class="-mr-2 flex items-center sm:hidden">
              <button
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                @click="showingNavigationDropdown = !showingNavigationDropdown"
              >
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    :class="{
                      hidden: showingNavigationDropdown,
                      'inline-flex': !showingNavigationDropdown,
                    }"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    :class="{
                      hidden: !showingNavigationDropdown,
                      'inline-flex': showingNavigationDropdown,
                    }"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <div
          :class="{
            block: showingNavigationDropdown,
            hidden: !showingNavigationDropdown,
          }"
          class="sm:hidden"
        >
          <div class="pt-2 pb-3 space-y-1">
            <ResponsiveNavLink
              :href="route('dashboard')"
              :active="route().current('dashboard')"
            >
              Dashboard
            </ResponsiveNavLink>
          </div>

          <!-- Responsive Settings Options -->
          <div class="pt-4 pb-1 border-t border-gray-200">
            <div class="flex items-center px-4">
              <div
                v-if="$page.props.jetstream.managesProfilePhotos"
                class="shrink-0 mr-3"
              >
                <img
                  class="h-10 w-10 rounded-full object-cover"
                  :src="$page.props.auth.user.profile_photo_url"
                  :alt="$page.props.auth.user.name"
                />
              </div>

              <div>
                <div class="font-medium text-base text-gray-800">
                  {{ $page.props.auth.user.name }}
                </div>
                <div class="font-medium text-sm text-gray-500">
                  {{ $page.props.auth.user.email }}
                </div>
              </div>
            </div>

            <div class="mt-3 space-y-1">
              <ResponsiveNavLink
                :href="route('profile.show')"
                :active="route().current('profile.show')"
              >
                Profile
              </ResponsiveNavLink>

              <ResponsiveNavLink
                v-if="$page.props.jetstream.hasApiFeatures"
                :href="route('api-tokens.index')"
                :active="route().current('api-tokens.index')"
              >
                API Tokens
              </ResponsiveNavLink>

              <!-- Authentication -->
              <form method="POST" @submit.prevent="logout">
                <ResponsiveNavLink as="button"> Log Out </ResponsiveNavLink>
              </form>

              <!-- Team Management -->
              <template v-if="$page.props.jetstream.hasTeamFeatures">
                <div class="border-t border-gray-200" />

                <div class="block px-4 py-2 text-xs text-gray-400">
                  Manage Team
                </div>

                <!-- Team Settings -->
                <ResponsiveNavLink
                  :href="
                    route('teams.show', $page.props.auth.user.current_team)
                  "
                  :active="route().current('teams.show')"
                >
                  Team Settings
                </ResponsiveNavLink>

                <ResponsiveNavLink
                  v-if="$page.props.jetstream.canCreateTeams"
                  :href="route('teams.create')"
                  :active="route().current('teams.create')"
                >
                  Create New Team
                </ResponsiveNavLink>

                <!-- Team Switcher -->
                <template v-if="$page.props.auth.user.all_teams.length > 1">
                  <div class="border-t border-gray-200" />

                  <div class="block px-4 py-2 text-xs text-gray-400">
                    Switch Teams
                  </div>

                  <template
                    v-for="team in $page.props.auth.user.all_teams"
                    :key="team.id"
                  >
                    <form @submit.prevent="switchToTeam(team)">
                      <ResponsiveNavLink as="button">
                        <div class="flex items-center">
                          <svg
                            v-if="
                              team.id == $page.props.auth.user.current_team_id
                            "
                            class="mr-2 h-5 w-5 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <div>{{ team.name }}</div>
                        </div>
                      </ResponsiveNavLink>
                    </form>
                  </template>
                </template>
              </template>
            </div>
          </div>
        </div>
      </nav>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <v-app id="inspire">
          <v-main class="bg-[#F3F4F6]">
            <v-container>
              <v-row>
                <v-col cols="12" sm="3">
                  <v-sheet rounded="lg" min-height="268">
                    <v-list>
                      <v-list-item>
                        <v-card>
                          <v-row no-gutters justify="center">
                            <v-col
                              class="text-h2 d-flex justify-center bg-primary"
                              cols="12"
                            >
                              <v-avatar size="54" class="m-2">
                                <v-img
                                  :src="$page.props.auth.user.profile_photo_url"
                                  :alt="$page.props.auth.user.name"
                                ></v-img>
                              </v-avatar>
                            </v-col>
                            <v-col
                              class="text-h2 d-flex justify-center"
                              cols="12"
                            >
                              <v-list-item
                                class="grey-darken-4"
                                :title="$page.props.auth.user.name"
                                :subtitle="$page.props.auth.user.email"
                              ></v-list-item>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-list-item>
                    </v-list>
                    <v-divider></v-divider>
                    <v-list item-type="divider">
                      <v-list-item value="Grupos">
                        <template v-slot:prepend>
                          <v-list-item-action start>
                            <v-list-item-title
                              >Total de Grupos:
                            </v-list-item-title>
                          </v-list-item-action>
                        </template>
                        <v-list-item-action end>
                          <v-chip color="primary"> 03 </v-chip>
                        </v-list-item-action>
                      </v-list-item>

                      <v-list-item value="access">
                        <template v-slot:prepend>
                          <v-list-item-action start>
                            <v-list-item-title
                              >Ultimo Acesso:
                            </v-list-item-title>
                          </v-list-item-action>
                        </template>
                        <v-list-item-action end>
                          <v-chip color="primary"> 15/07/2023 </v-chip>
                        </v-list-item-action>
                      </v-list-item>

                      <v-list-item value="name_gc">
                        <template v-slot:prepend>
                          <v-list-item-action start>
                            <v-list-item-title>Nome do GC: </v-list-item-title>
                          </v-list-item-action>
                          <v-list-item-action end>
                            <v-chip color="primary"> Emanuel </v-chip>
                          </v-list-item-action>
                        </template>
                      </v-list-item>
                      <v-divider></v-divider>

                      <div class="d-flex justify-center mt-4">
                        <v-btn variant="text" color="#5c65c0">
                          <Link :href="route('profile.show')">
                            Ver perfil
                          </Link>
                        </v-btn>
                      </div>
                    </v-list>
                  </v-sheet>

                  <v-divider></v-divider>
                  <div class="mt-4">
                    <v-card title="Cadastro recentemente">
                      <v-list>
                        <v-row
                          class="spacer"
                          no-gutters
                          style="margin-left: 5%; margin-right: 5%"
                        >
                          <v-col cols="2" sm="2" md="2">
                            <v-avatar color="surface-variant"></v-avatar>
                          </v-col>

                          <v-col cols="8" sm="2" md="7" class="ml-2">
                            <v-list-item-subtitle>
                              FRANCISCO ANTONIO
                            </v-list-item-subtitle>
                          </v-col>

                          <v-col cols="2" sm="2" md="2">
                            <v-btn size="small"
                              ><v-icon icon="fas fa-plus" />
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-list>

                      <v-list>
                        <v-row
                          class="spacer"
                          no-gutters
                          style="margin-left: 5%; margin-right: 5%"
                        >
                          <v-col cols="2" sm="2" md="2">
                            <v-avatar color="surface-variant">
                              <v-img
                                alt="Avatar"
                                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                              ></v-img>
                            </v-avatar>
                          </v-col>

                          <v-col cols="8" sm="2" md="7" class="ml-2">
                            <v-list-item-subtitle>
                              FRANCISCO ANTONIO
                            </v-list-item-subtitle>
                          </v-col>

                          <v-col cols="2" sm="2" md="2">
                            <v-btn size="small"
                              ><v-icon icon="fas fa-plus" />
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-list>

                      <v-list>
                        <v-row
                          class="spacer"
                          no-gutters
                          style="margin-left: 5%; margin-right: 5%"
                        >
                          <v-col cols="2" sm="2" md="2">
                            <v-avatar color="surface-variant"></v-avatar>
                          </v-col>

                          <v-col cols="8" sm="2" md="7" class="ml-2">
                            <v-list-item-subtitle>
                              FRANCISCO ANTONIO
                            </v-list-item-subtitle>
                          </v-col>

                          <v-col cols="2" sm="2" md="2">
                            <v-btn size="small"
                              ><v-icon icon="fas fa-plus" />
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-list>

                      <v-list>
                        <v-row
                          class="spacer"
                          no-gutters
                          style="margin-left: 5%; margin-right: 5%"
                        >
                          <v-col cols="2" sm="2" md="2">
                            <v-avatar color="surface-variant">
                              <v-img
                                alt="Avatar"
                                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                              ></v-img>
                            </v-avatar>
                          </v-col>

                          <v-col cols="8" sm="2" md="7" class="ml-2">
                            <v-list-item-subtitle>
                              FRANCISCO ANTONIO
                            </v-list-item-subtitle>
                          </v-col>

                          <v-col cols="2" sm="2" md="2">
                            <v-btn size="small"
                              ><v-icon icon="fas fa-plus" />
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-list>
                      <v-divider></v-divider>
                      <v-card-actions class="d-flex justify-center">
                        <v-btn color="#5c65c0">Ver Todas</v-btn>
                      </v-card-actions>
                    </v-card>
                  </div>
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