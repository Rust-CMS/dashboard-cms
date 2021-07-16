<template>
    <v-list-item v-if="show" :to="link">
        <v-list-item-icon>
            <v-icon>{{icon_name}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{nav_title}}</v-list-item-title>
    </v-list-item>
</template>

<script>
export default {
    props: {
		show: {
			required: false,
			type: Boolean,
			default: false
		},
        nav_title: {
            required: false,
            type: String
        },
        icon_name: {
            required: false,
            type: String
        },
        link: {
            required: false,
            type: String
        }
    }
}
</script>