<template>
    <table>
        <thead>
            <th>Title</th>
            <th>Field Type</th>
            <th>Actions</th>
        </thead>
        <tbody>
            <tr v-for="(field, i) in fields" :key="i">
                <td>{{ field.title }}</td>
                <td>{{ field.module_type_id }}</td>
                <td>
                    <a :href="`/fields/${field.module_id}`">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "FieldTable",
    props: {
        fields: {
            type: Array,
            required: true
        }
    }
}
</script>