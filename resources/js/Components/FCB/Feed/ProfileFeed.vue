<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>