import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./AppLayout-1803925f.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "@inertiajs/vue3";
import "./ResponsiveNavLink-cc961511.js";
const _sfc_main$1 = {
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
    items: [
      {
        title: "Aviso 01",
        value: 1
      },
      {
        title: "Aviso 02",
        value: 2
      },
      {
        title: "Aviso 03",
        value: 3
      }
    ]
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_app = resolveComponent("v-app");
  const _component_v_main = resolveComponent("v-main");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_sheet = resolveComponent("v-sheet");
  const _component_v_list = resolveComponent("v-list");
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_avatar = resolveComponent("v-avatar");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_divider = resolveComponent("v-divider");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_textarea = resolveComponent("v-textarea");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_file_input = resolveComponent("v-file-input");
  const _component_v_card_title = resolveComponent("v-card-title");
  _push(ssrRenderComponent(_component_v_app, mergeProps({ id: "inspire" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_main, { class: "bg-[#F3F4F6]" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_container, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_row, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            sm: "3"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_sheet, {
                                  rounded: "lg",
                                  "min-height": "268"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_list, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_list_item, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(ssrRenderComponent(_component_v_card, null, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_row, {
                                                          "no-gutters": "",
                                                          color: ""
                                                        }, {
                                                          default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                            if (_push11) {
                                                              _push11(ssrRenderComponent(_component_v_col, {
                                                                class: "text-h2 d-flex justify-center",
                                                                cols: "12"
                                                              }, {
                                                                default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                  if (_push12) {
                                                                    _push12(ssrRenderComponent(_component_v_avatar, {
                                                                      class: "mt-5",
                                                                      size: "54"
                                                                    }, {
                                                                      default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                        if (_push13) {
                                                                          _push13(ssrRenderComponent(_component_v_img, {
                                                                            src: "https://cdn.vuetifyjs.com/images/john.jpg",
                                                                            alt: "John"
                                                                          }, null, _parent13, _scopeId12));
                                                                        } else {
                                                                          return [
                                                                            createVNode(_component_v_img, {
                                                                              src: "https://cdn.vuetifyjs.com/images/john.jpg",
                                                                              alt: "John"
                                                                            })
                                                                          ];
                                                                        }
                                                                      }),
                                                                      _: 1
                                                                    }, _parent12, _scopeId11));
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_v_avatar, {
                                                                        class: "mt-5",
                                                                        size: "54"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(_component_v_img, {
                                                                            src: "https://cdn.vuetifyjs.com/images/john.jpg",
                                                                            alt: "John"
                                                                          })
                                                                        ]),
                                                                        _: 1
                                                                      })
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 1
                                                              }, _parent11, _scopeId10));
                                                              _push11(ssrRenderComponent(_component_v_col, {
                                                                class: "text-h2 d-flex justify-center",
                                                                cols: "12"
                                                              }, {
                                                                default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                  if (_push12) {
                                                                    _push12(ssrRenderComponent(_component_v_list_item, {
                                                                      class: "grey-darken-4",
                                                                      title: "Junior Oliveira",
                                                                      subtitle: "franciscoanto@gmail.com"
                                                                    }, null, _parent12, _scopeId11));
                                                                  } else {
                                                                    return [
                                                                      createVNode(_component_v_list_item, {
                                                                        class: "grey-darken-4",
                                                                        title: "Junior Oliveira",
                                                                        subtitle: "franciscoanto@gmail.com"
                                                                      })
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 1
                                                              }, _parent11, _scopeId10));
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_col, {
                                                                  class: "text-h2 d-flex justify-center",
                                                                  cols: "12"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_avatar, {
                                                                      class: "mt-5",
                                                                      size: "54"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(_component_v_img, {
                                                                          src: "https://cdn.vuetifyjs.com/images/john.jpg",
                                                                          alt: "John"
                                                                        })
                                                                      ]),
                                                                      _: 1
                                                                    })
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(_component_v_col, {
                                                                  class: "text-h2 d-flex justify-center",
                                                                  cols: "12"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_list_item, {
                                                                      class: "grey-darken-4",
                                                                      title: "Junior Oliveira",
                                                                      subtitle: "franciscoanto@gmail.com"
                                                                    })
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_row, {
                                                            "no-gutters": "",
                                                            color: ""
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_col, {
                                                                class: "text-h2 d-flex justify-center",
                                                                cols: "12"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_avatar, {
                                                                    class: "mt-5",
                                                                    size: "54"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(_component_v_img, {
                                                                        src: "https://cdn.vuetifyjs.com/images/john.jpg",
                                                                        alt: "John"
                                                                      })
                                                                    ]),
                                                                    _: 1
                                                                  })
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(_component_v_col, {
                                                                class: "text-h2 d-flex justify-center",
                                                                cols: "12"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_list_item, {
                                                                    class: "grey-darken-4",
                                                                    title: "Junior Oliveira",
                                                                    subtitle: "franciscoanto@gmail.com"
                                                                  })
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_card, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_row, {
                                                          "no-gutters": "",
                                                          color: ""
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_col, {
                                                              class: "text-h2 d-flex justify-center",
                                                              cols: "12"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_avatar, {
                                                                  class: "mt-5",
                                                                  size: "54"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(_component_v_img, {
                                                                      src: "https://cdn.vuetifyjs.com/images/john.jpg",
                                                                      alt: "John"
                                                                    })
                                                                  ]),
                                                                  _: 1
                                                                })
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_v_col, {
                                                              class: "text-h2 d-flex justify-center",
                                                              cols: "12"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_list_item, {
                                                                  class: "grey-darken-4",
                                                                  title: "Junior Oliveira",
                                                                  subtitle: "franciscoanto@gmail.com"
                                                                })
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_list_item, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_row, {
                                                        "no-gutters": "",
                                                        color: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_col, {
                                                            class: "text-h2 d-flex justify-center",
                                                            cols: "12"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_avatar, {
                                                                class: "mt-5",
                                                                size: "54"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_v_img, {
                                                                    src: "https://cdn.vuetifyjs.com/images/john.jpg",
                                                                    alt: "John"
                                                                  })
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_v_col, {
                                                            class: "text-h2 d-flex justify-center",
                                                            cols: "12"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_list_item, {
                                                                class: "grey-darken-4",
                                                                title: "Junior Oliveira",
                                                                subtitle: "franciscoanto@gmail.com"
                                                              })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_col, {
                                        class: "text-h2 d-flex justify-center",
                                        cols: "12"
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_list, { "item-type": "divider" }, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(ssrRenderComponent(_component_v_list_item, {
                                                    class: "grey-darken-4 mb-2 py-5",
                                                    title: "Marcus Obrien",
                                                    subtitle: "Network Engineer",
                                                    density: "compact"
                                                  }, null, _parent9, _scopeId8));
                                                  _push9(ssrRenderComponent(_component_v_divider, null, null, _parent9, _scopeId8));
                                                  _push9(ssrRenderComponent(_component_v_list_item, {
                                                    class: "grey-darken-4 mb-2 py-5",
                                                    title: "Marcus Obrien",
                                                    subtitle: "Network Engineer"
                                                  }, null, _parent9, _scopeId8));
                                                  _push9(ssrRenderComponent(_component_v_list_item, { class: "grey-darken-4 mb-2 py-5" }, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_btn, {
                                                          variant: "text",
                                                          color: "#5c65c0"
                                                        }, {
                                                          default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                            if (_push11) {
                                                              _push11(` Ver perfil `);
                                                            } else {
                                                              return [
                                                                createTextVNode(" Ver perfil ")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_btn, {
                                                            variant: "text",
                                                            color: "#5c65c0"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Ver perfil ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_list_item, {
                                                      class: "grey-darken-4 mb-2 py-5",
                                                      title: "Marcus Obrien",
                                                      subtitle: "Network Engineer",
                                                      density: "compact"
                                                    }),
                                                    createVNode(_component_v_divider),
                                                    createVNode(_component_v_list_item, {
                                                      class: "grey-darken-4 mb-2 py-5",
                                                      title: "Marcus Obrien",
                                                      subtitle: "Network Engineer"
                                                    }),
                                                    createVNode(_component_v_list_item, { class: "grey-darken-4 mb-2 py-5" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_btn, {
                                                          variant: "text",
                                                          color: "#5c65c0"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Ver perfil ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_list, { "item-type": "divider" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_list_item, {
                                                    class: "grey-darken-4 mb-2 py-5",
                                                    title: "Marcus Obrien",
                                                    subtitle: "Network Engineer",
                                                    density: "compact"
                                                  }),
                                                  createVNode(_component_v_divider),
                                                  createVNode(_component_v_list_item, {
                                                    class: "grey-darken-4 mb-2 py-5",
                                                    title: "Marcus Obrien",
                                                    subtitle: "Network Engineer"
                                                  }),
                                                  createVNode(_component_v_list_item, { class: "grey-darken-4 mb-2 py-5" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, {
                                                        variant: "text",
                                                        color: "#5c65c0"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Ver perfil ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_list, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_row, {
                                                      "no-gutters": "",
                                                      color: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_col, {
                                                          class: "text-h2 d-flex justify-center",
                                                          cols: "12"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_avatar, {
                                                              class: "mt-5",
                                                              size: "54"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_img, {
                                                                  src: "https://cdn.vuetifyjs.com/images/john.jpg",
                                                                  alt: "John"
                                                                })
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_v_col, {
                                                          class: "text-h2 d-flex justify-center",
                                                          cols: "12"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_list_item, {
                                                              class: "grey-darken-4",
                                                              title: "Junior Oliveira",
                                                              subtitle: "franciscoanto@gmail.com"
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_divider),
                                        createVNode(_component_v_col, {
                                          class: "text-h2 d-flex justify-center",
                                          cols: "12"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list, { "item-type": "divider" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item, {
                                                  class: "grey-darken-4 mb-2 py-5",
                                                  title: "Marcus Obrien",
                                                  subtitle: "Network Engineer",
                                                  density: "compact"
                                                }),
                                                createVNode(_component_v_divider),
                                                createVNode(_component_v_list_item, {
                                                  class: "grey-darken-4 mb-2 py-5",
                                                  title: "Marcus Obrien",
                                                  subtitle: "Network Engineer"
                                                }),
                                                createVNode(_component_v_list_item, { class: "grey-darken-4 mb-2 py-5" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, {
                                                      variant: "text",
                                                      color: "#5c65c0"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Ver perfil ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_v_divider, null, null, _parent6, _scopeId5));
                                _push6(`<div class="mt-4"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_v_card, { title: "Sugestões de amizade" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_list, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_row, {
                                              class: "spacer",
                                              "no-gutters": "",
                                              style: { "margin-left": "5%", "margin-right": "5%" }
                                            }, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(ssrRenderComponent(_component_v_col, {
                                                    cols: "2",
                                                    sm: "2",
                                                    md: "2"
                                                  }, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_avatar, { color: "surface-variant" }, null, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_avatar, { color: "surface-variant" })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                  _push9(ssrRenderComponent(_component_v_col, {
                                                    cols: "8",
                                                    sm: "2",
                                                    md: "7",
                                                    class: "ml-2"
                                                  }, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_list_item_subtitle, null, {
                                                          default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                            if (_push11) {
                                                              _push11(` FRANCISCO ANTONIO `);
                                                            } else {
                                                              return [
                                                                createTextVNode(" FRANCISCO ANTONIO ")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_list_item_subtitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" FRANCISCO ANTONIO ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                  _push9(ssrRenderComponent(_component_v_col, {
                                                    cols: "2",
                                                    sm: "2",
                                                    md: "2"
                                                  }, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_btn, { size: "small" }, {
                                                          default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                            if (_push11) {
                                                              _push11(ssrRenderComponent(_component_v_icon, { icon: "fas fa-plus" }, null, _parent11, _scopeId10));
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_btn, { size: "small" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_col, {
                                                      cols: "2",
                                                      sm: "2",
                                                      md: "2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_avatar, { color: "surface-variant" })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "8",
                                                      sm: "2",
                                                      md: "7",
                                                      class: "ml-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_list_item_subtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" FRANCISCO ANTONIO ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "2",
                                                      sm: "2",
                                                      md: "2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_btn, { size: "small" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_row, {
                                                class: "spacer",
                                                "no-gutters": "",
                                                style: { "margin-left": "5%", "margin-right": "5%" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, {
                                                    cols: "2",
                                                    sm: "2",
                                                    md: "2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_avatar, { color: "surface-variant" })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "8",
                                                    sm: "2",
                                                    md: "7",
                                                    class: "ml-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_list_item_subtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" FRANCISCO ANTONIO ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "2",
                                                    sm: "2",
                                                    md: "2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, { size: "small" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_list, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_row, {
                                              class: "spacer",
                                              "no-gutters": "",
                                              style: { "margin-left": "5%", "margin-right": "5%" }
                                            }, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(ssrRenderComponent(_component_v_col, {
                                                    cols: "2",
                                                    sm: "2",
                                                    md: "2"
                                                  }, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_avatar, { color: "surface-variant" }, {
                                                          default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                            if (_push11) {
                                                              _push11(ssrRenderComponent(_component_v_img, {
                                                                alt: "Avatar",
                                                                src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                              }, null, _parent11, _scopeId10));
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_img, {
                                                                  alt: "Avatar",
                                                                  src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                                })
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                alt: "Avatar",
                                                                src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                              })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                  _push9(ssrRenderComponent(_component_v_col, {
                                                    cols: "8",
                                                    sm: "2",
                                                    md: "7",
                                                    class: "ml-2"
                                                  }, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_list_item_subtitle, null, {
                                                          default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                            if (_push11) {
                                                              _push11(` FRANCISCO ANTONIO `);
                                                            } else {
                                                              return [
                                                                createTextVNode(" FRANCISCO ANTONIO ")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_list_item_subtitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" FRANCISCO ANTONIO ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                  _push9(ssrRenderComponent(_component_v_col, {
                                                    cols: "2",
                                                    sm: "2",
                                                    md: "2"
                                                  }, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_btn, { size: "small" }, {
                                                          default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                            if (_push11) {
                                                              _push11(ssrRenderComponent(_component_v_icon, { icon: "fas fa-plus" }, null, _parent11, _scopeId10));
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_btn, { size: "small" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_col, {
                                                      cols: "2",
                                                      sm: "2",
                                                      md: "2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              alt: "Avatar",
                                                              src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "8",
                                                      sm: "2",
                                                      md: "7",
                                                      class: "ml-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_list_item_subtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" FRANCISCO ANTONIO ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "2",
                                                      sm: "2",
                                                      md: "2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_btn, { size: "small" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_row, {
                                                class: "spacer",
                                                "no-gutters": "",
                                                style: { "margin-left": "5%", "margin-right": "5%" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, {
                                                    cols: "2",
                                                    sm: "2",
                                                    md: "2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_img, {
                                                            alt: "Avatar",
                                                            src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "8",
                                                    sm: "2",
                                                    md: "7",
                                                    class: "ml-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_list_item_subtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" FRANCISCO ANTONIO ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "2",
                                                    sm: "2",
                                                    md: "2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, { size: "small" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_list, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_row, {
                                              class: "spacer",
                                              "no-gutters": "",
                                              style: { "margin-left": "5%", "margin-right": "5%" }
                                            }, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(ssrRenderComponent(_component_v_col, {
                                                    cols: "2",
                                                    sm: "2",
                                                    md: "2"
                                                  }, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_avatar, { color: "surface-variant" }, null, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_avatar, { color: "surface-variant" })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                  _push9(ssrRenderComponent(_component_v_col, {
                                                    cols: "8",
                                                    sm: "2",
                                                    md: "7",
                                                    class: "ml-2"
                                                  }, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_list_item_subtitle, null, {
                                                          default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                            if (_push11) {
                                                              _push11(` FRANCISCO ANTONIO `);
                                                            } else {
                                                              return [
                                                                createTextVNode(" FRANCISCO ANTONIO ")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_list_item_subtitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" FRANCISCO ANTONIO ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                  _push9(ssrRenderComponent(_component_v_col, {
                                                    cols: "2",
                                                    sm: "2",
                                                    md: "2"
                                                  }, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_btn, { size: "small" }, {
                                                          default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                            if (_push11) {
                                                              _push11(ssrRenderComponent(_component_v_icon, { icon: "fas fa-plus" }, null, _parent11, _scopeId10));
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_btn, { size: "small" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_col, {
                                                      cols: "2",
                                                      sm: "2",
                                                      md: "2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_avatar, { color: "surface-variant" })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "8",
                                                      sm: "2",
                                                      md: "7",
                                                      class: "ml-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_list_item_subtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" FRANCISCO ANTONIO ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "2",
                                                      sm: "2",
                                                      md: "2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_btn, { size: "small" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_row, {
                                                class: "spacer",
                                                "no-gutters": "",
                                                style: { "margin-left": "5%", "margin-right": "5%" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, {
                                                    cols: "2",
                                                    sm: "2",
                                                    md: "2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_avatar, { color: "surface-variant" })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "8",
                                                    sm: "2",
                                                    md: "7",
                                                    class: "ml-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_list_item_subtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" FRANCISCO ANTONIO ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "2",
                                                    sm: "2",
                                                    md: "2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, { size: "small" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_list, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_row, {
                                              class: "spacer",
                                              "no-gutters": "",
                                              style: { "margin-left": "5%", "margin-right": "5%" }
                                            }, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(ssrRenderComponent(_component_v_col, {
                                                    cols: "2",
                                                    sm: "2",
                                                    md: "2"
                                                  }, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_avatar, { color: "surface-variant" }, {
                                                          default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                            if (_push11) {
                                                              _push11(ssrRenderComponent(_component_v_img, {
                                                                alt: "Avatar",
                                                                src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                              }, null, _parent11, _scopeId10));
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_img, {
                                                                  alt: "Avatar",
                                                                  src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                                })
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                alt: "Avatar",
                                                                src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                              })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                  _push9(ssrRenderComponent(_component_v_col, {
                                                    cols: "8",
                                                    sm: "2",
                                                    md: "7",
                                                    class: "ml-2"
                                                  }, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_list_item_subtitle, null, {
                                                          default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                            if (_push11) {
                                                              _push11(` FRANCISCO ANTONIO `);
                                                            } else {
                                                              return [
                                                                createTextVNode(" FRANCISCO ANTONIO ")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_list_item_subtitle, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" FRANCISCO ANTONIO ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                  _push9(ssrRenderComponent(_component_v_col, {
                                                    cols: "2",
                                                    sm: "2",
                                                    md: "2"
                                                  }, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_btn, { size: "small" }, {
                                                          default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                            if (_push11) {
                                                              _push11(ssrRenderComponent(_component_v_icon, { icon: "fas fa-plus" }, null, _parent11, _scopeId10));
                                                            } else {
                                                              return [
                                                                createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_btn, { size: "small" }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_col, {
                                                      cols: "2",
                                                      sm: "2",
                                                      md: "2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              alt: "Avatar",
                                                              src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "8",
                                                      sm: "2",
                                                      md: "7",
                                                      class: "ml-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_list_item_subtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" FRANCISCO ANTONIO ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "2",
                                                      sm: "2",
                                                      md: "2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_btn, { size: "small" }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_row, {
                                                class: "spacer",
                                                "no-gutters": "",
                                                style: { "margin-left": "5%", "margin-right": "5%" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, {
                                                    cols: "2",
                                                    sm: "2",
                                                    md: "2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_img, {
                                                            alt: "Avatar",
                                                            src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "8",
                                                    sm: "2",
                                                    md: "7",
                                                    class: "ml-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_list_item_subtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" FRANCISCO ANTONIO ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "2",
                                                    sm: "2",
                                                    md: "2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, { size: "small" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_card_actions, { class: "d-flex justify-center" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_btn, { color: "#5c65c0" }, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`Ver Todas`);
                                                } else {
                                                  return [
                                                    createTextVNode("Ver Todas")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_btn, { color: "#5c65c0" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Ver Todas")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_list, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              class: "spacer",
                                              "no-gutters": "",
                                              style: { "margin-left": "5%", "margin-right": "5%" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  sm: "2",
                                                  md: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_avatar, { color: "surface-variant" })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "8",
                                                  sm: "2",
                                                  md: "7",
                                                  class: "ml-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item_subtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" FRANCISCO ANTONIO ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  sm: "2",
                                                  md: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, { size: "small" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              class: "spacer",
                                              "no-gutters": "",
                                              style: { "margin-left": "5%", "margin-right": "5%" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  sm: "2",
                                                  md: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_img, {
                                                          alt: "Avatar",
                                                          src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "8",
                                                  sm: "2",
                                                  md: "7",
                                                  class: "ml-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item_subtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" FRANCISCO ANTONIO ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  sm: "2",
                                                  md: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, { size: "small" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              class: "spacer",
                                              "no-gutters": "",
                                              style: { "margin-left": "5%", "margin-right": "5%" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  sm: "2",
                                                  md: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_avatar, { color: "surface-variant" })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "8",
                                                  sm: "2",
                                                  md: "7",
                                                  class: "ml-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item_subtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" FRANCISCO ANTONIO ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  sm: "2",
                                                  md: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, { size: "small" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              class: "spacer",
                                              "no-gutters": "",
                                              style: { "margin-left": "5%", "margin-right": "5%" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  sm: "2",
                                                  md: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_img, {
                                                          alt: "Avatar",
                                                          src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "8",
                                                  sm: "2",
                                                  md: "7",
                                                  class: "ml-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item_subtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" FRANCISCO ANTONIO ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  sm: "2",
                                                  md: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, { size: "small" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_divider),
                                        createVNode(_component_v_card_actions, { class: "d-flex justify-center" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, { color: "#5c65c0" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Ver Todas")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(`</div>`);
                              } else {
                                return [
                                  createVNode(_component_v_sheet, {
                                    rounded: "lg",
                                    "min-height": "268"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_row, {
                                                    "no-gutters": "",
                                                    color: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_col, {
                                                        class: "text-h2 d-flex justify-center",
                                                        cols: "12"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_avatar, {
                                                            class: "mt-5",
                                                            size: "54"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_img, {
                                                                src: "https://cdn.vuetifyjs.com/images/john.jpg",
                                                                alt: "John"
                                                              })
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_v_col, {
                                                        class: "text-h2 d-flex justify-center",
                                                        cols: "12"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_list_item, {
                                                            class: "grey-darken-4",
                                                            title: "Junior Oliveira",
                                                            subtitle: "franciscoanto@gmail.com"
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_divider),
                                      createVNode(_component_v_col, {
                                        class: "text-h2 d-flex justify-center",
                                        cols: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list, { "item-type": "divider" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item, {
                                                class: "grey-darken-4 mb-2 py-5",
                                                title: "Marcus Obrien",
                                                subtitle: "Network Engineer",
                                                density: "compact"
                                              }),
                                              createVNode(_component_v_divider),
                                              createVNode(_component_v_list_item, {
                                                class: "grey-darken-4 mb-2 py-5",
                                                title: "Marcus Obrien",
                                                subtitle: "Network Engineer"
                                              }),
                                              createVNode(_component_v_list_item, { class: "grey-darken-4 mb-2 py-5" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, {
                                                    variant: "text",
                                                    color: "#5c65c0"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Ver perfil ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_divider),
                                  createVNode("div", { class: "mt-4" }, [
                                    createVNode(_component_v_card, { title: "Sugestões de amizade" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              class: "spacer",
                                              "no-gutters": "",
                                              style: { "margin-left": "5%", "margin-right": "5%" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  sm: "2",
                                                  md: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_avatar, { color: "surface-variant" })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "8",
                                                  sm: "2",
                                                  md: "7",
                                                  class: "ml-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item_subtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" FRANCISCO ANTONIO ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  sm: "2",
                                                  md: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, { size: "small" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              class: "spacer",
                                              "no-gutters": "",
                                              style: { "margin-left": "5%", "margin-right": "5%" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  sm: "2",
                                                  md: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_img, {
                                                          alt: "Avatar",
                                                          src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "8",
                                                  sm: "2",
                                                  md: "7",
                                                  class: "ml-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item_subtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" FRANCISCO ANTONIO ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  sm: "2",
                                                  md: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, { size: "small" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              class: "spacer",
                                              "no-gutters": "",
                                              style: { "margin-left": "5%", "margin-right": "5%" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  sm: "2",
                                                  md: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_avatar, { color: "surface-variant" })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "8",
                                                  sm: "2",
                                                  md: "7",
                                                  class: "ml-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item_subtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" FRANCISCO ANTONIO ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  sm: "2",
                                                  md: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, { size: "small" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              class: "spacer",
                                              "no-gutters": "",
                                              style: { "margin-left": "5%", "margin-right": "5%" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  sm: "2",
                                                  md: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_img, {
                                                          alt: "Avatar",
                                                          src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "8",
                                                  sm: "2",
                                                  md: "7",
                                                  class: "ml-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item_subtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" FRANCISCO ANTONIO ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "2",
                                                  sm: "2",
                                                  md: "2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, { size: "small" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_divider),
                                        createVNode(_component_v_card_actions, { class: "d-flex justify-center" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, { color: "#5c65c0" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Ver Todas")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="border-t-4 border-t-[#1c0b2b] rounded-md"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_v_card, { class: "mx-auto mb-5" }, {
                                  prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_avatar, {
                                        color: "grey-darken-3",
                                        image: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                      }, null, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_avatar, {
                                          color: "grey-darken-3",
                                          image: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                        })
                                      ];
                                    }
                                  }),
                                  title: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_textarea, {
                                        name: "input-7-1",
                                        variant: "filled",
                                        label: "Digite o que está pensando",
                                        "auto-grow": "",
                                        clearable: "",
                                        "clear-icon": "fas fa-circle-xmark",
                                        rows: "3",
                                        "row-height": "20"
                                      }, null, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_textarea, {
                                          name: "input-7-1",
                                          variant: "filled",
                                          label: "Digite o que está pensando",
                                          "auto-grow": "",
                                          clearable: "",
                                          "clear-icon": "fas fa-circle-xmark",
                                          rows: "3",
                                          "row-height": "20"
                                        })
                                      ];
                                    }
                                  }),
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_card_text, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_row, { justify: "space-between" }, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(ssrRenderComponent(_component_v_col, { cols: "6" }, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_file_input, {
                                                          clearable: "",
                                                          label: "Anexar imagem",
                                                          variant: "outlined"
                                                        }, null, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_file_input, {
                                                            clearable: "",
                                                            label: "Anexar imagem",
                                                            variant: "outlined"
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                  _push9(ssrRenderComponent(_component_v_col, {
                                                    cols: "6",
                                                    class: "d-flex justify-end align-self-center"
                                                  }, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(ssrRenderComponent(_component_v_btn, {
                                                          color: "#413b6b",
                                                          class: "text-white"
                                                        }, {
                                                          default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                            if (_push11) {
                                                              _push11(` Publicar `);
                                                            } else {
                                                              return [
                                                                createTextVNode(" Publicar ")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent10, _scopeId9));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_btn, {
                                                            color: "#413b6b",
                                                            class: "text-white"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Publicar ")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_col, { cols: "6" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_file_input, {
                                                          clearable: "",
                                                          label: "Anexar imagem",
                                                          variant: "outlined"
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      cols: "6",
                                                      class: "d-flex justify-end align-self-center"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_btn, {
                                                          color: "#413b6b",
                                                          class: "text-white"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Publicar ")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_row, { justify: "space-between" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, { cols: "6" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_file_input, {
                                                        clearable: "",
                                                        label: "Anexar imagem",
                                                        variant: "outlined"
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    cols: "6",
                                                    class: "d-flex justify-end align-self-center"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, {
                                                        color: "#413b6b",
                                                        class: "text-white"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Publicar ")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, { justify: "space-between" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_file_input, {
                                                      clearable: "",
                                                      label: "Anexar imagem",
                                                      variant: "outlined"
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "6",
                                                  class: "d-flex justify-end align-self-center"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, {
                                                      color: "#413b6b",
                                                      class: "text-white"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Publicar ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(`</div>`);
                                _push6(ssrRenderComponent(_component_v_sheet, {
                                  "min-height": "70vh",
                                  rounded: "lg"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("div", { class: "border-t-4 border-t-[#1c0b2b] rounded-md" }, [
                                    createVNode(_component_v_card, { class: "mx-auto mb-5" }, {
                                      prepend: withCtx(() => [
                                        createVNode(_component_v_avatar, {
                                          color: "grey-darken-3",
                                          image: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                        })
                                      ]),
                                      title: withCtx(() => [
                                        createVNode(_component_v_textarea, {
                                          name: "input-7-1",
                                          variant: "filled",
                                          label: "Digite o que está pensando",
                                          "auto-grow": "",
                                          clearable: "",
                                          "clear-icon": "fas fa-circle-xmark",
                                          rows: "3",
                                          "row-height": "20"
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, { justify: "space-between" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_file_input, {
                                                      clearable: "",
                                                      label: "Anexar imagem",
                                                      variant: "outlined"
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  cols: "6",
                                                  class: "d-flex justify-end align-self-center"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, {
                                                      color: "#413b6b",
                                                      class: "text-white"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Publicar ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(_component_v_sheet, {
                                    "min-height": "70vh",
                                    rounded: "lg"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "justify-center"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_card, { class: "mx-auto" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_row, { justify: "center" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_img, {
                                              src: "/logo/logo-fcb.png",
                                              class: "m-5",
                                              height: "100px",
                                              width: "100px"
                                            }, null, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_img, {
                                                src: "/logo/logo-fcb.png",
                                                class: "m-5",
                                                height: "100px",
                                                width: "100px"
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_divider, { class: "mx-4 mb-1" }, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_card_title, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`Mural de Avisos`);
                                          } else {
                                            return [
                                              createTextVNode("Mural de Avisos")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_list, { items: _ctx.items }, null, _parent7, _scopeId6));
                                      _push7(`<div class="d-flex justify-center"${_scopeId6}>`);
                                      _push7(ssrRenderComponent(_component_v_btn, {
                                        variant: "text",
                                        color: "#5c65c0",
                                        class: "mb-3"
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`Ver todos`);
                                          } else {
                                            return [
                                              createTextVNode("Ver todos")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(`</div>`);
                                    } else {
                                      return [
                                        createVNode(_component_v_row, { justify: "center" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              src: "/logo/logo-fcb.png",
                                              class: "m-5",
                                              height: "100px",
                                              width: "100px"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_divider, { class: "mx-4 mb-1" }),
                                        createVNode(_component_v_card_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Mural de Avisos")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_list, { items: _ctx.items }, null, 8, ["items"]),
                                        createVNode("div", { class: "d-flex justify-center" }, [
                                          createVNode(_component_v_btn, {
                                            variant: "text",
                                            color: "#5c65c0",
                                            class: "mb-3"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Ver todos")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_card, { class: "mx-auto" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, { justify: "center" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            src: "/logo/logo-fcb.png",
                                            class: "m-5",
                                            height: "100px",
                                            width: "100px"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_divider, { class: "mx-4 mb-1" }),
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Mural de Avisos")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list, { items: _ctx.items }, null, 8, ["items"]),
                                      createVNode("div", { class: "d-flex justify-center" }, [
                                        createVNode(_component_v_btn, {
                                          variant: "text",
                                          color: "#5c65c0",
                                          class: "mb-3"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Ver todos")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_sheet, {
                                  rounded: "lg",
                                  "min-height": "268"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_row, {
                                                  "no-gutters": "",
                                                  color: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_col, {
                                                      class: "text-h2 d-flex justify-center",
                                                      cols: "12"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_avatar, {
                                                          class: "mt-5",
                                                          size: "54"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_img, {
                                                              src: "https://cdn.vuetifyjs.com/images/john.jpg",
                                                              alt: "John"
                                                            })
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_v_col, {
                                                      class: "text-h2 d-flex justify-center",
                                                      cols: "12"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_list_item, {
                                                          class: "grey-darken-4",
                                                          title: "Junior Oliveira",
                                                          subtitle: "franciscoanto@gmail.com"
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_divider),
                                    createVNode(_component_v_col, {
                                      class: "text-h2 d-flex justify-center",
                                      cols: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list, { "item-type": "divider" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item, {
                                              class: "grey-darken-4 mb-2 py-5",
                                              title: "Marcus Obrien",
                                              subtitle: "Network Engineer",
                                              density: "compact"
                                            }),
                                            createVNode(_component_v_divider),
                                            createVNode(_component_v_list_item, {
                                              class: "grey-darken-4 mb-2 py-5",
                                              title: "Marcus Obrien",
                                              subtitle: "Network Engineer"
                                            }),
                                            createVNode(_component_v_list_item, { class: "grey-darken-4 mb-2 py-5" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, {
                                                  variant: "text",
                                                  color: "#5c65c0"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Ver perfil ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_divider),
                                createVNode("div", { class: "mt-4" }, [
                                  createVNode(_component_v_card, { title: "Sugestões de amizade" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, {
                                            class: "spacer",
                                            "no-gutters": "",
                                            style: { "margin-left": "5%", "margin-right": "5%" }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "2",
                                                sm: "2",
                                                md: "2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_avatar, { color: "surface-variant" })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "8",
                                                sm: "2",
                                                md: "7",
                                                class: "ml-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_list_item_subtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" FRANCISCO ANTONIO ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "2",
                                                sm: "2",
                                                md: "2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, { size: "small" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, {
                                            class: "spacer",
                                            "no-gutters": "",
                                            style: { "margin-left": "5%", "margin-right": "5%" }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "2",
                                                sm: "2",
                                                md: "2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_img, {
                                                        alt: "Avatar",
                                                        src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "8",
                                                sm: "2",
                                                md: "7",
                                                class: "ml-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_list_item_subtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" FRANCISCO ANTONIO ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "2",
                                                sm: "2",
                                                md: "2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, { size: "small" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, {
                                            class: "spacer",
                                            "no-gutters": "",
                                            style: { "margin-left": "5%", "margin-right": "5%" }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "2",
                                                sm: "2",
                                                md: "2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_avatar, { color: "surface-variant" })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "8",
                                                sm: "2",
                                                md: "7",
                                                class: "ml-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_list_item_subtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" FRANCISCO ANTONIO ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "2",
                                                sm: "2",
                                                md: "2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, { size: "small" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, {
                                            class: "spacer",
                                            "no-gutters": "",
                                            style: { "margin-left": "5%", "margin-right": "5%" }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                cols: "2",
                                                sm: "2",
                                                md: "2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_img, {
                                                        alt: "Avatar",
                                                        src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "8",
                                                sm: "2",
                                                md: "7",
                                                class: "ml-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_list_item_subtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" FRANCISCO ANTONIO ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "2",
                                                sm: "2",
                                                md: "2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, { size: "small" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_divider),
                                      createVNode(_component_v_card_actions, { class: "d-flex justify-center" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, { color: "#5c65c0" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Ver Todas")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "border-t-4 border-t-[#1c0b2b] rounded-md" }, [
                                  createVNode(_component_v_card, { class: "mx-auto mb-5" }, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_avatar, {
                                        color: "grey-darken-3",
                                        image: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                      })
                                    ]),
                                    title: withCtx(() => [
                                      createVNode(_component_v_textarea, {
                                        name: "input-7-1",
                                        variant: "filled",
                                        label: "Digite o que está pensando",
                                        "auto-grow": "",
                                        clearable: "",
                                        "clear-icon": "fas fa-circle-xmark",
                                        rows: "3",
                                        "row-height": "20"
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, { justify: "space-between" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, { cols: "6" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_file_input, {
                                                    clearable: "",
                                                    label: "Anexar imagem",
                                                    variant: "outlined"
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                cols: "6",
                                                class: "d-flex justify-end align-self-center"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, {
                                                    color: "#413b6b",
                                                    class: "text-white"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Publicar ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(_component_v_sheet, {
                                  "min-height": "70vh",
                                  rounded: "lg"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "3",
                              class: "justify-center"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, { class: "mx-auto" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, { justify: "center" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          src: "/logo/logo-fcb.png",
                                          class: "m-5",
                                          height: "100px",
                                          width: "100px"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_divider, { class: "mx-4 mb-1" }),
                                    createVNode(_component_v_card_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Mural de Avisos")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list, { items: _ctx.items }, null, 8, ["items"]),
                                    createVNode("div", { class: "d-flex justify-center" }, [
                                      createVNode(_component_v_btn, {
                                        variant: "text",
                                        color: "#5c65c0",
                                        class: "mb-3"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Ver todos")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_sheet, {
                                rounded: "lg",
                                "min-height": "268"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_row, {
                                                "no-gutters": "",
                                                color: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, {
                                                    class: "text-h2 d-flex justify-center",
                                                    cols: "12"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_avatar, {
                                                        class: "mt-5",
                                                        size: "54"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_img, {
                                                            src: "https://cdn.vuetifyjs.com/images/john.jpg",
                                                            alt: "John"
                                                          })
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, {
                                                    class: "text-h2 d-flex justify-center",
                                                    cols: "12"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_list_item, {
                                                        class: "grey-darken-4",
                                                        title: "Junior Oliveira",
                                                        subtitle: "franciscoanto@gmail.com"
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_divider),
                                  createVNode(_component_v_col, {
                                    class: "text-h2 d-flex justify-center",
                                    cols: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list, { "item-type": "divider" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item, {
                                            class: "grey-darken-4 mb-2 py-5",
                                            title: "Marcus Obrien",
                                            subtitle: "Network Engineer",
                                            density: "compact"
                                          }),
                                          createVNode(_component_v_divider),
                                          createVNode(_component_v_list_item, {
                                            class: "grey-darken-4 mb-2 py-5",
                                            title: "Marcus Obrien",
                                            subtitle: "Network Engineer"
                                          }),
                                          createVNode(_component_v_list_item, { class: "grey-darken-4 mb-2 py-5" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                variant: "text",
                                                color: "#5c65c0"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Ver perfil ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_divider),
                              createVNode("div", { class: "mt-4" }, [
                                createVNode(_component_v_card, { title: "Sugestões de amizade" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, {
                                          class: "spacer",
                                          "no-gutters": "",
                                          style: { "margin-left": "5%", "margin-right": "5%" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "2",
                                              sm: "2",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_avatar, { color: "surface-variant" })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "8",
                                              sm: "2",
                                              md: "7",
                                              class: "ml-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_subtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" FRANCISCO ANTONIO ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "2",
                                              sm: "2",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, { size: "small" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, {
                                          class: "spacer",
                                          "no-gutters": "",
                                          style: { "margin-left": "5%", "margin-right": "5%" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "2",
                                              sm: "2",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_img, {
                                                      alt: "Avatar",
                                                      src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "8",
                                              sm: "2",
                                              md: "7",
                                              class: "ml-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_subtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" FRANCISCO ANTONIO ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "2",
                                              sm: "2",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, { size: "small" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, {
                                          class: "spacer",
                                          "no-gutters": "",
                                          style: { "margin-left": "5%", "margin-right": "5%" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "2",
                                              sm: "2",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_avatar, { color: "surface-variant" })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "8",
                                              sm: "2",
                                              md: "7",
                                              class: "ml-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_subtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" FRANCISCO ANTONIO ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "2",
                                              sm: "2",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, { size: "small" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, {
                                          class: "spacer",
                                          "no-gutters": "",
                                          style: { "margin-left": "5%", "margin-right": "5%" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, {
                                              cols: "2",
                                              sm: "2",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_img, {
                                                      alt: "Avatar",
                                                      src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "8",
                                              sm: "2",
                                              md: "7",
                                              class: "ml-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item_subtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" FRANCISCO ANTONIO ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "2",
                                              sm: "2",
                                              md: "2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, { size: "small" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_divider),
                                    createVNode(_component_v_card_actions, { class: "d-flex justify-center" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, { color: "#5c65c0" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Ver Todas")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "border-t-4 border-t-[#1c0b2b] rounded-md" }, [
                                createVNode(_component_v_card, { class: "mx-auto mb-5" }, {
                                  prepend: withCtx(() => [
                                    createVNode(_component_v_avatar, {
                                      color: "grey-darken-3",
                                      image: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                    })
                                  ]),
                                  title: withCtx(() => [
                                    createVNode(_component_v_textarea, {
                                      name: "input-7-1",
                                      variant: "filled",
                                      label: "Digite o que está pensando",
                                      "auto-grow": "",
                                      clearable: "",
                                      "clear-icon": "fas fa-circle-xmark",
                                      rows: "3",
                                      "row-height": "20"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, { justify: "space-between" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, { cols: "6" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_file_input, {
                                                  clearable: "",
                                                  label: "Anexar imagem",
                                                  variant: "outlined"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, {
                                              cols: "6",
                                              class: "d-flex justify-end align-self-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, {
                                                  color: "#413b6b",
                                                  class: "text-white"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Publicar ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode(_component_v_sheet, {
                                "min-height": "70vh",
                                rounded: "lg"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "3",
                            class: "justify-center"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, { class: "mx-auto" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, { justify: "center" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: "/logo/logo-fcb.png",
                                        class: "m-5",
                                        height: "100px",
                                        width: "100px"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_divider, { class: "mx-4 mb-1" }),
                                  createVNode(_component_v_card_title, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Mural de Avisos")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list, { items: _ctx.items }, null, 8, ["items"]),
                                  createVNode("div", { class: "d-flex justify-center" }, [
                                    createVNode(_component_v_btn, {
                                      variant: "text",
                                      color: "#5c65c0",
                                      class: "mb-3"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Ver todos")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_container, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, {
                              rounded: "lg",
                              "min-height": "268"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, {
                                              "no-gutters": "",
                                              color: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, {
                                                  class: "text-h2 d-flex justify-center",
                                                  cols: "12"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_avatar, {
                                                      class: "mt-5",
                                                      size: "54"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_img, {
                                                          src: "https://cdn.vuetifyjs.com/images/john.jpg",
                                                          alt: "John"
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, {
                                                  class: "text-h2 d-flex justify-center",
                                                  cols: "12"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_list_item, {
                                                      class: "grey-darken-4",
                                                      title: "Junior Oliveira",
                                                      subtitle: "franciscoanto@gmail.com"
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_divider),
                                createVNode(_component_v_col, {
                                  class: "text-h2 d-flex justify-center",
                                  cols: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list, { "item-type": "divider" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, {
                                          class: "grey-darken-4 mb-2 py-5",
                                          title: "Marcus Obrien",
                                          subtitle: "Network Engineer",
                                          density: "compact"
                                        }),
                                        createVNode(_component_v_divider),
                                        createVNode(_component_v_list_item, {
                                          class: "grey-darken-4 mb-2 py-5",
                                          title: "Marcus Obrien",
                                          subtitle: "Network Engineer"
                                        }),
                                        createVNode(_component_v_list_item, { class: "grey-darken-4 mb-2 py-5" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              variant: "text",
                                              color: "#5c65c0"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Ver perfil ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_divider),
                            createVNode("div", { class: "mt-4" }, [
                              createVNode(_component_v_card, { title: "Sugestões de amizade" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, {
                                        class: "spacer",
                                        "no-gutters": "",
                                        style: { "margin-left": "5%", "margin-right": "5%" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "2",
                                            sm: "2",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_avatar, { color: "surface-variant" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "8",
                                            sm: "2",
                                            md: "7",
                                            class: "ml-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_subtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" FRANCISCO ANTONIO ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "2",
                                            sm: "2",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, { size: "small" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, {
                                        class: "spacer",
                                        "no-gutters": "",
                                        style: { "margin-left": "5%", "margin-right": "5%" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "2",
                                            sm: "2",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_img, {
                                                    alt: "Avatar",
                                                    src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "8",
                                            sm: "2",
                                            md: "7",
                                            class: "ml-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_subtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" FRANCISCO ANTONIO ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "2",
                                            sm: "2",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, { size: "small" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, {
                                        class: "spacer",
                                        "no-gutters": "",
                                        style: { "margin-left": "5%", "margin-right": "5%" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "2",
                                            sm: "2",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_avatar, { color: "surface-variant" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "8",
                                            sm: "2",
                                            md: "7",
                                            class: "ml-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_subtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" FRANCISCO ANTONIO ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "2",
                                            sm: "2",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, { size: "small" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, {
                                        class: "spacer",
                                        "no-gutters": "",
                                        style: { "margin-left": "5%", "margin-right": "5%" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, {
                                            cols: "2",
                                            sm: "2",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_img, {
                                                    alt: "Avatar",
                                                    src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "8",
                                            sm: "2",
                                            md: "7",
                                            class: "ml-2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item_subtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(" FRANCISCO ANTONIO ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "2",
                                            sm: "2",
                                            md: "2"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, { size: "small" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_divider),
                                  createVNode(_component_v_card_actions, { class: "d-flex justify-center" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, { color: "#5c65c0" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Ver Todas")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "border-t-4 border-t-[#1c0b2b] rounded-md" }, [
                              createVNode(_component_v_card, { class: "mx-auto mb-5" }, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_avatar, {
                                    color: "grey-darken-3",
                                    image: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                  })
                                ]),
                                title: withCtx(() => [
                                  createVNode(_component_v_textarea, {
                                    name: "input-7-1",
                                    variant: "filled",
                                    label: "Digite o que está pensando",
                                    "auto-grow": "",
                                    clearable: "",
                                    "clear-icon": "fas fa-circle-xmark",
                                    rows: "3",
                                    "row-height": "20"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, { justify: "space-between" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, { cols: "6" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_file_input, {
                                                clearable: "",
                                                label: "Anexar imagem",
                                                variant: "outlined"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, {
                                            cols: "6",
                                            class: "d-flex justify-end align-self-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                color: "#413b6b",
                                                class: "text-white"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Publicar ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(_component_v_sheet, {
                              "min-height": "70vh",
                              rounded: "lg"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "3",
                          class: "justify-center"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { class: "mx-auto" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, { justify: "center" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: "/logo/logo-fcb.png",
                                      class: "m-5",
                                      height: "100px",
                                      width: "100px"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_divider, { class: "mx-4 mb-1" }),
                                createVNode(_component_v_card_title, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Mural de Avisos")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list, { items: _ctx.items }, null, 8, ["items"]),
                                createVNode("div", { class: "d-flex justify-center" }, [
                                  createVNode(_component_v_btn, {
                                    variant: "text",
                                    color: "#5c65c0",
                                    class: "mb-3"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Ver todos")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_main, { class: "bg-[#F3F4F6]" }, {
            default: withCtx(() => [
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_sheet, {
                            rounded: "lg",
                            "min-height": "268"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, {
                                            "no-gutters": "",
                                            color: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, {
                                                class: "text-h2 d-flex justify-center",
                                                cols: "12"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_avatar, {
                                                    class: "mt-5",
                                                    size: "54"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_img, {
                                                        src: "https://cdn.vuetifyjs.com/images/john.jpg",
                                                        alt: "John"
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, {
                                                class: "text-h2 d-flex justify-center",
                                                cols: "12"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_list_item, {
                                                    class: "grey-darken-4",
                                                    title: "Junior Oliveira",
                                                    subtitle: "franciscoanto@gmail.com"
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_divider),
                              createVNode(_component_v_col, {
                                class: "text-h2 d-flex justify-center",
                                cols: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, { "item-type": "divider" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        class: "grey-darken-4 mb-2 py-5",
                                        title: "Marcus Obrien",
                                        subtitle: "Network Engineer",
                                        density: "compact"
                                      }),
                                      createVNode(_component_v_divider),
                                      createVNode(_component_v_list_item, {
                                        class: "grey-darken-4 mb-2 py-5",
                                        title: "Marcus Obrien",
                                        subtitle: "Network Engineer"
                                      }),
                                      createVNode(_component_v_list_item, { class: "grey-darken-4 mb-2 py-5" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            variant: "text",
                                            color: "#5c65c0"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Ver perfil ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_divider),
                          createVNode("div", { class: "mt-4" }, [
                            createVNode(_component_v_card, { title: "Sugestões de amizade" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, {
                                      class: "spacer",
                                      "no-gutters": "",
                                      style: { "margin-left": "5%", "margin-right": "5%" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "2",
                                          sm: "2",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_avatar, { color: "surface-variant" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "8",
                                          sm: "2",
                                          md: "7",
                                          class: "ml-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_subtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" FRANCISCO ANTONIO ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "2",
                                          sm: "2",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, { size: "small" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, {
                                      class: "spacer",
                                      "no-gutters": "",
                                      style: { "margin-left": "5%", "margin-right": "5%" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "2",
                                          sm: "2",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_img, {
                                                  alt: "Avatar",
                                                  src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "8",
                                          sm: "2",
                                          md: "7",
                                          class: "ml-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_subtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" FRANCISCO ANTONIO ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "2",
                                          sm: "2",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, { size: "small" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, {
                                      class: "spacer",
                                      "no-gutters": "",
                                      style: { "margin-left": "5%", "margin-right": "5%" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "2",
                                          sm: "2",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_avatar, { color: "surface-variant" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "8",
                                          sm: "2",
                                          md: "7",
                                          class: "ml-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_subtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" FRANCISCO ANTONIO ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "2",
                                          sm: "2",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, { size: "small" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, {
                                      class: "spacer",
                                      "no-gutters": "",
                                      style: { "margin-left": "5%", "margin-right": "5%" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, {
                                          cols: "2",
                                          sm: "2",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_avatar, { color: "surface-variant" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_img, {
                                                  alt: "Avatar",
                                                  src: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "8",
                                          sm: "2",
                                          md: "7",
                                          class: "ml-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item_subtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" FRANCISCO ANTONIO ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "2",
                                          sm: "2",
                                          md: "2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, { size: "small" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, { icon: "fas fa-plus" })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_divider),
                                createVNode(_component_v_card_actions, { class: "d-flex justify-center" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, { color: "#5c65c0" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Ver Todas")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-t-4 border-t-[#1c0b2b] rounded-md" }, [
                            createVNode(_component_v_card, { class: "mx-auto mb-5" }, {
                              prepend: withCtx(() => [
                                createVNode(_component_v_avatar, {
                                  color: "grey-darken-3",
                                  image: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                })
                              ]),
                              title: withCtx(() => [
                                createVNode(_component_v_textarea, {
                                  name: "input-7-1",
                                  variant: "filled",
                                  label: "Digite o que está pensando",
                                  "auto-grow": "",
                                  clearable: "",
                                  "clear-icon": "fas fa-circle-xmark",
                                  rows: "3",
                                  "row-height": "20"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, { justify: "space-between" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_file_input, {
                                              clearable: "",
                                              label: "Anexar imagem",
                                              variant: "outlined"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, {
                                          cols: "6",
                                          class: "d-flex justify-end align-self-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              color: "#413b6b",
                                              class: "text-white"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Publicar ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(_component_v_sheet, {
                            "min-height": "70vh",
                            rounded: "lg"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "3",
                        class: "justify-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, { class: "mx-auto" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { justify: "center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_img, {
                                    src: "/logo/logo-fcb.png",
                                    class: "m-5",
                                    height: "100px",
                                    width: "100px"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_divider, { class: "mx-4 mb-1" }),
                              createVNode(_component_v_card_title, null, {
                                default: withCtx(() => [
                                  createTextVNode("Mural de Avisos")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list, { items: _ctx.items }, null, 8, ["items"]),
                              createVNode("div", { class: "d-flex justify-center" }, [
                                createVNode(_component_v_btn, {
                                  variant: "text",
                                  color: "#5c65c0",
                                  class: "mb-3"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Ver todos")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Welcome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Welcome = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({ title: "Dashboard" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Dashboard </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Dashboard ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(Welcome, null, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-xl sm:rounded-lg" }, [
                    createVNode(Welcome)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
