<script setup>
import { ref } from 'vue';
import { Link, router } from '@inertiajs/vue3';
</script>

<template>
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
                      <v-col class="text-h2 d-flex justify-center bg-primary" cols="12">
                        <v-avatar size="54" class="m-2">
                          <v-img
                            :src="$page.props.auth.user.profile_photo_url"
                            :alt="$page.props.auth.user.name"
                          ></v-img>
                        </v-avatar>
                      </v-col>
                      <v-col class="text-h2 d-flex justify-center" cols="12">
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
                      <v-list-item-title>Total de Grupos: </v-list-item-title>
                    </v-list-item-action>
                  </template>
                  <v-list-item-action end>
                    <v-chip color="primary"> 03 </v-chip>
                  </v-list-item-action>
                </v-list-item>

                <v-list-item value="access">
                  <template v-slot:prepend>
                    <v-list-item-action start>
                      <v-list-item-title>Ultimo Acesso: </v-list-item-title>
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
                      <v-btn size="small"><v-icon icon="fas fa-plus" /> </v-btn>
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
                      <v-btn size="small"><v-icon icon="fas fa-plus" /> </v-btn>
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
                      <v-btn size="small"><v-icon icon="fas fa-plus" /> </v-btn>
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
                      <v-btn size="small"><v-icon icon="fas fa-plus" /> </v-btn>
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

          <v-col cols="12" sm="6">
            <div class="border-t-4 border-t-[#1c0b2b] rounded-md">
              <v-card class="mx-auto mb-5">
                <template v-slot:prepend>
                  <v-avatar
                    color="grey-darken-3"
                    image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-avatar>
                </template>
                <template v-slot:title>
                  <v-textarea
                    name="input-7-1"
                    variant="filled"
                    label="Digite o que está pensando"
                    auto-grow
                    clearable
                    clear-icon="fas fa-circle-xmark"
                    rows="3"
                    row-height="20"
                  ></v-textarea>
                </template>

                <v-card-text>
                  <v-row justify="space-between">
                    <v-col cols="6">
                      <v-file-input
                        clearable
                        label="Anexar imagem"
                        variant="outlined"
                      ></v-file-input>
                    </v-col>
                    <v-col
                      cols="6"
                      class="d-flex justify-end align-self-center"
                    >
                      <v-btn color="#413b6b" class="text-white">
                        Publicar
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </div>
            
            <v-card class="mt-3">
              <v-row>
                <v-col cols="12" class="d-flex ml-2 mt-2">
                  <v-avatar color="info" >
                    <v-img
                      src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                    ></v-img>
                  </v-avatar>
                  <v-list-item
                    class="text-black"
                    title="Marcus Obrien"
                    subtitle="Publicado: 18h"
                  ></v-list-item>
                </v-col>
                <v-col cols="12">
                  <v-card class="mx-auto">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                      height="200px"
                      cover
                    ></v-img>

                    <v-card-title> Top western road trips </v-card-title>

                    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

                    <v-card-actions>
                      <v-row justify="space-between">
                        <v-btn class="m-2">
                        <v-icon icon="far fa-heart" /> 
                        <label class="ml-1"> 54 </label>
                        </v-btn>
                        <v-btn class="m-2">
                          <v-icon icon="fas fa-share-nodes" />
                        
                        </v-btn>
                      </v-row>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>

          

          

           

          </v-col>

          <v-col cols="12" sm="3" class="justify-center">
            <v-card class="mx-auto">
              <v-row justify="center">
                <v-img src="/logo/avisos.png" height="200px"></v-img>
              </v-row>
              <v-divider class="mx-4 mb-1"></v-divider>

              <v-card-title>Mural de Avisos</v-card-title>
              <v-list :items="items"></v-list>
              <div class="d-flex justify-center">
                <v-btn variant="text" color="#5c65c0" class="mb-3"
                  >Ver todos</v-btn
                >
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
                <v-btn variant="text" color="#5c65c0" class="mb-3"
                  >Ver todos</v-btn
                >
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
    items: [
      {
        title: "Aviso 01",
        value: 1,
      },
      {
        title: "Aviso 02",
        value: 2,
      },
      {
        title: "Aviso 03",
        value: 3,
      },
    ],
    niver: [
      {
        title: "10 - João Pedro",
        value: 1,
      },
      {
        title: "16 - William Correa",
        value: 2,
      },
      {
        title: "29 - Maria Clara",
        value: 3,
      },
    ],
  }),
};
</script>