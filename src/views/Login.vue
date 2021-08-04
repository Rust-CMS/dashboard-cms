<template>
	<main>
        <h1>Login</h1>
		<form @submit="login" method="post">
			<input v-model="username" type="text" placeholder="Username" />
			<input v-model="password" type="text" placeholder="Password" />
            <button type="submit">LOGIN</button>
		</form>
	</main>
</template>

<script>
import { post } from "axios";

export default {
	name: "Login",
	data() {
		return {
			username: "",
			password: ""
		}
	},
	methods: {
		async login(e) {
			e.preventDefault();

			await post(`/user/login`, { username, password });

			this.$router.push("/");

			return;
		},
	},
};
</script>