<template>
    <v-form>
        <v-container>
            <v-row>
                <v-text-field placeholder="Username" :value="username" v-model="username" required />
            </v-row>
            <v-row>
                <v-text-field placeholder="Password" type="password" v-model="password" required />
            </v-row>
            <v-row>
                <v-btn @click="initiateUpdate" type="submit">UPDATE</v-btn>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import { put } from "axios";

export default {
    props: {
        defaultUsername: {
            required: false,
            type: String,
        },
        defaultPassword: {
            required: false,
            type: String,
        }
    },
    data() {
        return {
            username: "",
            password: ""
        }
    },
    created() {
        this.username = this.defaultUsername;
        this.password = this.defaultPassword;
    },
    methods: {
        async sendUpdate() {
            return await put(`/user/${this.username}`, {
                username: this.username,
                password: this.password
            })
        },
        async initiateUpdate(e) {
            e.preventDefault();
            
            try {
                await this.sendUpdate();

                this.$router.push("/");
            } catch (e) {
                alert(e);
            }
        }
    }
}
</script>