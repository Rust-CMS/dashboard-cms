<template>
    <main>
        <h1>Update User</h1>
        <update-user-form :default-username="username" :default-password="password" />
    </main>
</template>

<script>
import UpdateUserForm from "../components/UpdateUserForm.vue"

export default {
    components: {
        UpdateUserForm
    },
    data() {
        return {
            username: "",
            password: "",
            message: ""
        }
    },
    created() {
        this.username = this.$route.query.username;
        this.password = this.$route.query.password;
    }
}
</script>