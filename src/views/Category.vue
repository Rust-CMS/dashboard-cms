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
                <v-text-field type="text" v-model="category.title" />
                <v-btn>SAVE</v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import FieldTable from '../components/FieldTable.vue'
import { get } from "axios";
export default {
    components: {
        FieldTable
    },
    data () {
        return {
            fields: [],
            category: {}
        }
    },
    async created() {
        let category = await this.getCategory();
        let fields = await this.getFields();

        this.category = category.data.message;
        this.fields = fields.data.message;
    },
    methods: {
        async getFields() {
            let id = this.$route.params.id;
            return await get(`/modules/category/${id}`);
        },
        async getCategory() {
            let id = this.$route.params.id;
            return await get(`/category/${id}`);
        }
    }
};
</script>

<style lang="scss" scoped>
.fields {
    margin: 20px 0;
}
</style>