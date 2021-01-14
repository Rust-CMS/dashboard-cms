<template>
	<main>
        <h1>Login</h1>
		<form @submit="login" method="post">
			<input type="text" placeholder="Username" />
			<input type="text" placeholder="Password" />
            <button type="submit">LOGIN</button>
		</form>
	</main>
</template>

<script>
export default {
	name: "Login",
	methods: {
		async login(e) {
			e.preventDefault();
		},
	},
};
</script>