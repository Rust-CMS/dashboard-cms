<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <th>Title</th>
                <th>Name</th>
                <th>URL</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr v-for="(page, i) in pages" :key="i">
                    <td>
                        {{ page.page_title }}
                    </td>
                    <td>
                        {{ page.page_name }}
                    </td>
                    <td>
                        {{ page.page_url }}
                    </td>
                    <td>
                        <v-btn :href="page.page_url">View</v-btn>
                        <v-btn :href="`/pages/${page.uuid}`">Edit</v-btn>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
export default {
    name: "PageTable",
    props: {
        pages: {
            type: Array,
            required: true,
        },
    },
};
</script>