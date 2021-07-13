<template>
    <main>
        <h1>Pages</h1> <button @click="create_page">+</button>
        <PageTable :pages="pages" />
    </main>
</template>

<script>
import { get } from "axios";

import PageTable from '@/components/PageTable';

export default {
    name: "Pages",
    data() {
        return {
            pages: []
        }
    },
    components: {
        PageTable
    },
    async created() {
        let pages = await this.get_pages();
        this.pages = pages.message;
    },
    methods: {
        async create_page() {
            console.error("Unimplemented")
        },
        async get_pages() {
            let pages_req = await get("/pages");
            return pages_req.data;
        }
    }
}
</script>