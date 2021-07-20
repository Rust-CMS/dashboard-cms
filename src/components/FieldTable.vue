<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr v-for="(field, i) in fields" :key="i">
                    <td>{{ field.title }}</td>
                    <td>{{ field.content }}</td>
                    <td>
                        <v-btn :href="`/fields/${field.uuid}`">Edit</v-btn>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
export default {
    name: "FieldTable",
    props: {
        fields: {
            type: Array,
            required: true,
        },
    },
};
</script>