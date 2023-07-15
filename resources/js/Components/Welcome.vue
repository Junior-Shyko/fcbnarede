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
                    <v-row no-gutters color="">
                      <v-col class="text-h2 d-flex justify-center" cols="12">
                        <v-avatar class="mt-5" size="54">
                          <v-img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          ></v-img>
                        </v-avatar>
                      </v-col>
                      <v-col class="text-h2 d-flex justify-center" cols="12">
                        <v-list-item
                          class="grey-darken-4"
                          title="Junior Oliveira"
                          subtitle="franciscoanto@gmail.com"
                        ></v-list-item>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-list-item>
              </v-list>
              <v-divider></v-divider>
              <v-col class="text-h2 d-flex justify-center" cols="12">
                <v-list item-type="divider">
                  <v-list-item
                    class="grey-darken-4 mb-2 py-5"
                    title="Marcus Obrien"
                    subtitle="Network Engineer"
                    density="compact"
                  ></v-list-item>
                  <v-divider></v-divider>
                  <v-list-item
                    class="grey-darken-4 mb-2 py-5"
                    title="Marcus Obrien"
                    subtitle="Network Engineer"
                  ></v-list-item>

                  <v-list-item class="grey-darken-4 mb-2 py-5">
                    <v-btn variant="text" color="#5c65c0"> Ver perfil </v-btn>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-sheet>

            <v-divider></v-divider>
            <div class="mt-4">
              <v-card title="Sugestões de amizade">
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
                    <v-file-input clearable label="Anexar imagem" variant="outlined"></v-file-input>
                  </v-col>
                  <v-col cols="6" class="d-flex justify-end align-self-center">
                    <v-btn color="#413b6b" class="text-white">
                      Publicar
                    </v-btn>
                  </v-col>
                 
                </v-row>
              </v-card-text>
            </v-card>
           </div>
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="3">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
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
  }),
};
</script>