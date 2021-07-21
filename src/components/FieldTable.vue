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
                    <td class="actions">
                        <v-btn color="primary" :href="`/fields/${field.uuid}`">Edit</v-btn>
                        <v-btn plain color="error" @click="deleteField(field.uuid, i)">Delete</v-btn>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
import Axios from 'axios';
export default {
    name: "FieldTable",
    props: {
        fields: {
            type: Array,
            required: true,
        },
    },
    methods: {
        deleteField(uuid, idx) {
            Axios.delete(`/modules/${uuid}`);

            this.fields.splice(idx, 1);
        }
    }
};
</script>