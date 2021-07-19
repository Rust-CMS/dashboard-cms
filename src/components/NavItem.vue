<template>
    <v-list-item v-if="show" :to="link">
        <v-list-item-icon>
            <v-icon>{{iconName}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{navTitle}}</v-list-item-title>
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
        navTitle: {
            required: false,
            type: String
        },
        iconName: {
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