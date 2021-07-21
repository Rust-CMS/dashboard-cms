import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: { 
        themes: {
            dark: {
                primary: colors.purple.lighten3,
                secondary: colors.teal
            }
        },
        dark: true 
    }
});
