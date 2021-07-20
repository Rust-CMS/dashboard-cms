<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <th>Name</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr v-for="(category, i) in categories" :key="i">
                    <td>{{ category.title }}</td>
                    <td>
                        <v-btn :href="`/fields/categories/${category.uuid}`">Edit</v-btn>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
export default {
    props: {
        categories: {
            required: false,
        }
    }
};
</script>

<style lang="scss">

</style>