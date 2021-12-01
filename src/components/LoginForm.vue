<template>
	<v-form>
		<v-container>
			<v-row>
				<v-text-field v-model="username" label="Username" required />
			</v-row>
			<v-row>
				<v-text-field type="password" v-model="password" label="Password" required />
			</v-row>
			<v-row>
				<v-btn type="submit" color="primary" @click="login"
					>LOGIN</v-btn
				>
				<v-progress-circular
					class="ml-5"
					v-if="loading"
					indeterminate
					color="primary"
				></v-progress-circular>
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
			password: "",
			loading: false,
		};
	},
	methods: {
		async login(e) {
			this.loading = true;
			e.preventDefault();

			try {
				let data = await post("/user/login", {
					username: this.username,
					password: this.password,
				});

				if (data.status === 202) {
					this.$router.push(`/update?username=${this.username}`);
				} else {
					this.$router.push("/");
				}
			} catch (e) {
				// TODO replace
				alert(e);
			}

			this.loading = false;
		},
	},
};
</script>