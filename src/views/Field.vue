<template>
    <main>
        <h1>Field {{ field.title }}</h1>
    </main>
</template>

<script>
import { get } from "axios";

export default {
    name: "Field",
    data() {
        return {
            field: {}
        }
    },
    async created() {
        let field = await this.getField();

        this.field = field.data.message;
    },
    methods: {
        async getField() {
            let id = this.$route.params.id;
            return await get(`/modules/${id}`)
        }
    }
}
</script>