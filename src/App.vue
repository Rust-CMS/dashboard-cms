<template>
    <v-app id="app">
        <v-app-bar app clipped-left dark>
            <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mobile" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>RCMS Dashboard</v-toolbar-title>
            <logout v-if="loggedIn" />
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app clipped :temporary="$vuetify.breakpoint.mobile" :permanent="!$vuetify.breakpoint.mobile">
            <v-list nav dense> 
                <v-list-item-group
                    active-class=""
                >
                    <NavItem
                        v-for="(route, i) in routes"
						:show="route.meta.show"
                        :key="i"
                        :navTitle="route.name"
                        :iconName="route.meta.icon"
                        :link="route.path"
                    />
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-container>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import { routes } from "@/router/index"
import NavItem from "./components/NavItem.vue"
import Logout from './components/Logout.vue';
import { loggedIn } from "./router/index";

export default {
    components: { NavItem, Logout }, 
    name: "App",
	data() {
		return {
            drawer: false,
            window: window,
            loggedIn: false,
			routes
		}
	},
    created() {
        this.logged();
    },
    methods: {
        async logged() {
            return await loggedIn()
        }
    }
};
</script>

<style>
#app {
    display: flex;
    font-family: roboto;
}

.route-container {
    flex: 1;
}

.actions * {
    margin: 0 5px;
}
</style>
