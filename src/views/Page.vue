<template>
	<main>
        <h1>Page {{ page.title }}</h1>
    </main>
</template>

<script>
import { get } from "axios";

export default {
    name: "Page",
    data() {
        return {
            page: {}
        }
    },
	async created() {
		let page = await this.get_page();
		this.page = page.message;
	},
	methods: {
		async get_page() {
            let id = this.$route.params.id;
            let page_req = await get(`/pages/${id}`);
			return page_req.data;
		},
	},
};
</script>