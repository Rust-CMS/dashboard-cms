<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <th>Title</th>
                <th>Content</th>
                <th v-if="window.innerWidth >= 600">Actions</th>
            </thead>
            <tbody>
                <tr v-for="(field, i) in fields" :key="i" @click="window.innerWidth < 600 ? navField(field.uuid) : null">
                    <td>{{ field.title }}</td>
                    <td>{{ field.content }}</td>
                    <td v-if="window.innerWidth >= 600" class="actions">
                        <v-btn class="black--text" color="primary" @click="navField(field.uuid)">Edit</v-btn>
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
    data() {
        return {
            window
        }
    },
    methods: {
        deleteField(uuid, idx) {
            Axios.delete(`/modules/${uuid}`);

            this.fields.splice(idx, 1);
        },
        navField(uuid) {
            this.$router.push(`/fields/${uuid}`);
        }
    }
};
</script>