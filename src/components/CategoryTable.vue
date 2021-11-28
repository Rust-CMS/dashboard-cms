<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <th>Name</th>
                <th v-if="!$vuetify.breakpoint.mobile">Actions</th>
                <th>Field Count</th>
            </thead>
            <tbody>
                <tr v-for="(category, i) in categories" :key="i" @click="$vuetify.breakpoint.mobile ? navCategory(category.uuid) : null">
                    <td>{{ category.title }}</td>
                    <td v-if="!$vuetify.breakpoint.mobile" class="actions">
                        <v-btn color="primary" @click="navCategory(category.uuid)">Edit</v-btn>
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
    data() {
        return {
            window: window
        }
    },
    methods: {
        deleteCategory(uuid, idx) {
            Axios.delete(`/category/${uuid}`);

            this.categories.splice(idx, 1);
        },
        navCategory(uuid) {
            this.$router.push(`/fields/categories/${uuid}`)
        }
    }
};
</script>

<style lang="scss">

</style>