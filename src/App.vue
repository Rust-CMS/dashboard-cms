<template>
    <v-app id="app">
        <v-app-bar app clipped-left>
        </v-app-bar>

        <v-navigation-drawer app clipped permanent>
            <v-list nav dense> 
                <v-list-item-group
                    active-class="deep-purple--text text--accent-4"
                >
                    <NavItem
                        v-for="(route, i) in routes"
						:show="route.meta.show"
                        :key="i"
                        :nav_title="route.name"
                        :icon_name="route.icon"
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

export default {
    components: { NavItem }, 
    name: "App",
	data() {
		return {
			routes
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
</style>
