<template>
    <table>
        <thead>
            <th>Title</th>
            <th>Name</th>
            <th>URL</th>
        </thead>
        <tbody>
            <tr v-for="(page, i) in pages" :key="i">
                <td>
                    {{ page.title }}
                </td>
                <td>
                    {{ page.page_name }}
                </td>
                <td>
                    {{ page.page_url }}
                </td>
                <td>
                    <a :href="page.page_url">View</a>
                    <a href="">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "PageTable",
    props: {
        pages: {
            type: Array,
            required: true
        }
    }
}
</script>