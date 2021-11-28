<template>
    <v-btn color="ml-auto warning" @click="logout">LOGOUT</v-btn>
</template>

<script>
import Axios from "axios";

export default {
    methods: {
        async logout() {
            await Axios.delete('/user/logout');

            window.location.reload();
        }
    }
}
</script>