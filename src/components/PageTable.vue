<template>
	<v-simple-table>
		<template v-slot:default>
			<thead>
				<th>Title</th>
				<th>Name</th>
				<th>URL</th>
				<th v-if="!$vuetify.breakpoint.mobile">Actions</th>
			</thead>
			<tbody v-if="pages">
				<tr v-for="(page, i) in pages" :key="i" @click="$vuetify.breakpoint.mobile ? navPage(page.uuid) : null">
					<td>
						{{ page.page_title }}
					</td>
					<td>
						{{ page.page_name }}
					</td>
					<td>
						{{ page.page_url }}
					</td>
					<td v-if="!$vuetify.breakpoint.mobile" class="actions">
						<v-btn
							color="primary"
							:href="getUrl(page)"
							>View</v-btn
						>
						<v-btn
							color="primary"
							@click="navPage(page.uuid)"
							>Edit</v-btn
						>
						<v-btn
							plain
							color="error"
							@click="deletePage(page.uuid, i)"
							>DELETE</v-btn
						>
					</td>
				</tr>
			</tbody>
		</template>
	</v-simple-table>
</template>

<script>
import Axios from "axios";

export default {
	name: "PageTable",
	props: {
		pages: {
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
		deletePage(id, idx) {
			Axios.delete(`/pages/${id}`);

			this.pages.splice(idx, 1);
		},
		getUrl(page) {
			let apiUrl = process.env.VUE_APP_API_URL;

			if (!apiUrl || apiUrl.length === 0) {
                return `http://localhost:9090${page.page_url}`
			} else {
				let url = new URL(apiUrl);
				return `${url.origin}${page.page_url}`
            }
		},
		navPage(uuid) {
			this.$router.push(`/pages/${uuid}`)
		}
	},
};
</script>