<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <th>Name</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr v-for="(field, i) in fields" :key="i">
                    <td>{{ field.title }}</td>
                    <td>
                        <v-btn :href="`/fields/${field.module_id}`">Edit</v-btn>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
export default {
    props: {
        fields: {
            required: false,
        }
    }
};
</script>

<style lang="scss">

</style>