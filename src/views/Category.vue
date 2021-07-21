<template>
    <div>
        <h1>Category Edit Page</h1>
        
        <v-card class="fields">
            <v-card-title>Fields</v-card-title>
            <v-card-text>
                <FieldTable :fields="fields" />
            </v-card-text>
        </v-card>

        <v-card class="fields">
            <v-card-title>Edit Category</v-card-title>
            <v-card-text>
                <CategoryMutate v-if="Object.keys(category).length > 0" :category="category" :pages="pages" @value="updateCategory" />
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import FieldTable from '../components/FieldTable.vue'
import { get, put } from "axios";
import CategoryMutate from '../components/CategoryMutate.vue';
export default {
    components: {
        FieldTable,
        CategoryMutate
    },
    data () {
        return {
            fields: [],
            pages: [],
            category: {}
        }
    },
    async created() {
        let category = await this.getCategory();
        let fields = await this.getFields();
        let pages = await this.getPages();

        this.category = category.data.message;
        this.fields = fields.data.message;
        this.pages = pages.data.message;
    },
    methods: {
        async updateCategory(category) {
            this.category = category;
            let id = this.$route.params.id;
            return await put(`/category/${id}`, category);
        },
        async getFields() {
            let id = this.$route.params.id;
            return await get(`/modules/category/${id}`);
        },
        async getCategory() {
            let id = this.$route.params.id;
            return await get(`/category/${id}`);
        },
        async getPages() {
            return await get(`/pages`)
        }
    }
};
</script>

<style lang="scss" scoped>
.fields {
    margin: 20px 0;
}
</style>