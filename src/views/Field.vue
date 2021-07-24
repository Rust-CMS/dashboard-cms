<template>
    <main>
        <h1 class="mb-5">Field {{ field.title }}</h1>

        <v-card>
            <v-skeleton-loader v-if="!pages" type="card"></v-skeleton-loader>
            <div v-else>
                <v-card-title> Edit Field </v-card-title>
                <v-card-text>
                    <FieldMutate
                        v-if="pages"
                        @value="updateField"
                        :field="field"
                        :pages="pages"
                    />
                    <v-skeleton-loader v-else type="card"></v-skeleton-loader>
                </v-card-text>
            </div>
        </v-card>
    </main>
</template>

<script>
import { get, put } from "axios";
import FieldMutate from "../components/FieldMutate.vue";

export default {
    name: "Field",
    components: {
        FieldMutate,
    },
    data() {
        return {
            field: {},
            pages: false,
        };
    },
    async created() {
        let field = await this.getField();
        this.field = field.data;

        let pages = await this.getPages();
        this.pages = pages.data;
    },
    methods: {
        async updateField(field) {
            this.field = field;
            let id = this.$route.params.id;
            return await put(`/modules/${id}`, field);
        },
        async getField() {
            let id = this.$route.params.id;
            return await get(`/modules/${id}`);
        },
        async getPages() {
            return await get(`/pages`);
        },
    },
};
</script>

<style scoped>
.field-form {
    display: flex;
    flex-direction: column;
}
</style>