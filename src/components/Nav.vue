<template>
    <div>
        <NavItem v-for="(route, i) in routes" :key="i" :route="route" />
    </div>
</template>

<script>
import NavItem from "@/components/NavItem";

export default {
    name: "Nav",
    data() {
        return {
            routes: [],
        };
    },
    components: {
        NavItem,
    },
    created() {
        this.get_all_routes();
    },
    methods: {
        get_all_routes() {
            this.routes = this.$router.options.routes;
        },
    },
};
</script>