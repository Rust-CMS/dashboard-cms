<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <th>Name</th>
                <th>Actions</th>
                <th>Field Count</th>
            </thead>
            <tbody>
                <tr v-for="(category, i) in categories" :key="i">
                    <td>{{ category.title }}</td>
                    <td class="actions">
                        <v-btn color="primary" :href="`/fields/categories/${category.uuid}`">Edit</v-btn>
                        <v-btn plain color="error" @click="deleteCategory(category.uuid, i)">Delete</v-btn>
                    </td>
                    <td>{{category.modules.length}}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
import Axios from 'axios';
export default {
    props: {
        categories: {
            required: false,
        }
    },
    methods: {
        deleteCategory(uuid, idx) {
            Axios.delete(`/category/${uuid}`);

            this.categories.splice(idx, 1);
        }
    }
};
</script>

<style lang="scss">

</style>