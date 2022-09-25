import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#21130d',
            secondary: '#1e81b0',
            accent: '#e28743',
            error: '#b71c1c',
          },
        },
      },
});
