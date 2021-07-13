<template>
	<main>
        <h1>Page {{ page.title }}</h1>
        <FieldTable :fields="pagemodule.fields.modules"/>
        <h3>Categories</h3>
        <FieldTable :fields="pagemodule.fields.categories"/>

        <form class="page-form" @submit="update_page">
            <input type="text" v-model="page.page_name">
            <input type="text" v-model="page.page_url">
            <input type="text" v-model="page.page_title">
            <button type="submit">Save</button>
        </form>
    </main>
</template>

<script>
import { get, put } from "axios";
import FieldTable from '@/components/FieldTable'

export default {
    name: "Page",
    data() {
        return {
            pagemodule: {},
            page: {}
        }
    },
    components: {
        FieldTable
    },
	async created() {
		let pagemodule = await this.get_page();
        this.pagemodule = pagemodule.message;
        
        let page = {...pagemodule.message};
        delete page.fields;
        this.page = page;
	},
	methods: {
		async get_page() {
            let id = this.$route.params.id;
            let page_req = await get(`/pages/${id}/modules`);
			return page_req.data;
        },
        async update_page(e) {
            e.preventDefault();
            
            let id = this.$route.params.id;
            await put(`/pages/${id}`, this.page);
        }
	},
};
</script>

<style scoped>
.page-form {
    display: flex;
    flex-direction: column;
}
</style>