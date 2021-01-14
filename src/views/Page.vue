<template>
	<main>
        <h1>Page {{ page.title }}</h1>
        <FieldTable :fields="page.fields"/>
    </main>
</template>

<script>
import { get } from "axios";
import FieldTable from '@/components/FieldTable'

export default {
    name: "Page",
    data() {
        return {
            page: {}
        }
    },
    components: {
        FieldTable
    },
	async created() {
		let page = await this.get_page();
		this.page = page.message;
	},
	methods: {
		async get_page() {
            let id = this.$route.params.id;
            let page_req = await get(`/pages/${id}/modules`);
			return page_req.data;
		},
	},
};
</script>