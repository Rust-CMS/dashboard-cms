<template>
    <form class="page-form" @submit="mutate">
        <v-text-field placeholder="Page Title" hint="Title of the page" persistent-hint v-model="innerPage.page_title" />
        <v-text-field placeholder="Page Name" hint="Name of the template file to use" persistent-hint v-model="innerPage.page_name" />
        <v-text-field placeholder="Page URL" hint="URL to match on (/exampleUrl)" persistent-hint v-model="innerPage.page_url" />
        <v-card-actions>
            <v-btn class="mt-5" type="submit">SAVE</v-btn>
        </v-card-actions>
    </form>
</template>

<script>
    export default {
        props: {
            page: {
                required: false,
                default: () => {
                    return {
                    page_name: "",
                    page_url: "",
                    page_title: ""
                    }
                }
            }
        },
        data() {
            return {
                innerPage: this.page
            }
        },
        methods: {
            mutate($evt) {
                $evt.preventDefault();
                this.$emit("value", this.innerPage)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>