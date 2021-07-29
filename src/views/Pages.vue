<template>
    <div>
        <v-dialog v-model="pageDialog" max-width="600px">
            <v-card>
                <v-card-title> Create Page </v-card-title>
                <v-card-text>
                    <PageMutate @value="createPage" reset />
                </v-card-text>
            </v-card>
        </v-dialog>

        <h1>Pages</h1>

        <v-card class="mt-5">
            <div v-if="pages">
                <v-card-title> Page List </v-card-title>
                <v-card-text>
                    <div v-if="pages">
                        <v-btn @click="pageDialog = true">+</v-btn>
                        <PageTable class="mt-5" :pages="pages" />
                    </div>
                </v-card-text>
            </div>
            <v-skeleton-loader v-else type="card"></v-skeleton-loader>
        </v-card>
    </div>
</template>

<script>
import { get, post } from "axios";

import PageTable from "@/components/PageTable";
import PageMutate from "@/components/PageMutate";

export default {
    name: "Pages",
    data() {
        return {
            pages: false,
            pageDialog: false,
        };
    },
    components: {
        PageTable,
        PageMutate,
    },
    async created() {
        let pages = await this.getPages();
        this.pages = pages;
    },
    methods: {
        async createPage(page) {
            console.log(page);

            let pageRes = await post(`/pages`, page);

            this.pages.push(pageRes.data);

            this.pageDialog = false;
        },
        async getPages() {
            let pagesRes = await get("/pages");
            return pagesRes.data;
        },
    },
};
</script>