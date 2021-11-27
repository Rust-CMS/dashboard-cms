<template>
    <v-form>
        <v-container>
            <v-row>
                <v-text-field v-model="username" label="Username" required />
            </v-row>
            <v-row>
                <v-text-field v-model="password" label="Password" required />
            </v-row>
            <v-row>
                <v-btn color="primary" @click="login">LOGIN</v-btn>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import { post } from "axios";

export default {
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        async login() {
            try {
                await post('/user/login', {username: this.username, password: this.password});
            } catch (e) {
                // TODO replace
                alert(e);
            }
        }
    }
}
</script>