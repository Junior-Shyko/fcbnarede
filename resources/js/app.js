import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import VueMask from '@devindex/vue-mask';
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import { VDataTable } from 'vuetify/labs/VDataTable'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@fortawesome/fontawesome-free/css/all.css'
import { aliases, fa } from 'vuetify/iconsets/fa'
import colors from 'vuetify/lib/util/colors'

const vuetify = createVuetify({
    components: {
        ...components,
        ...directives,
        VDataTable
    },
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
            fa,
        },
    },
    theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              primary: '#413b6b', // #413b6b
              secondary: '#5c65c0', // #FFCDD2
              error: '#E44D3A',
              info: '#6f95ff',
              warning: '#fec107',
              success: '#00c292'
            }
          },
        },
      },
  })

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(vuetify)
            .use(VueMask)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
