<template>
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-3">
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
                          title="Marcus Obrien"
                          subtitle="Network Engineer"
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

                <v-list-item
                  class="grey-darken-4 mb-2 py-5"
                >
                <v-btn variant="text" color="#5c65c0">
                  Ver perfil
                </v-btn>
                </v-list-item>
              </v-list>

              </v-col>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="6">
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