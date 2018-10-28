<template>
  <div>
    <v-toolbar flat color="white" class="elevation-1 mb-2">
			<v-text-field hide-details clearable label="Search" single-line class="pt-0"></v-text-field>
			<v-spacer></v-spacer>
			<v-menu offset-y full-width v-show="selected.length">
				<v-btn color="primary" d-flex align-center outline dark slot="activator">Selection action</v-btn>
				<v-list>
					<v-list-tile>
						<v-list-tile-title>Delete</v-list-tile-title>
					</v-list-tile>
					<v-list-tile>
						<v-list-tile-title>Archive</v-list-tile-title>
					</v-list-tile>
					<v-list-tile>
						<v-list-tile-title>Change status</v-list-tile-title>
					</v-list-tile>
				</v-list>
			</v-menu>
		</v-toolbar>
    <v-data-table v-bind="$attrs" :loading="false" v-model="selected"  :items="items" :pagination.sync="pagination" select-all item-key="name" class="elevation-1">
			<v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
			<template slot="items" slot-scope="props">
				<tr :active="props.selected">
					<td v-if="$attrs['select-all'] == '' ">
						<v-checkbox v-model="props.selected" primary hide-details></v-checkbox>
					</td>
          <slot name="items" v-bind="props">
          </slot>
				</tr>
			</template>
		</v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    api: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      pagination: {
        sortBy: 'name'
      },
      selected: [],
      items: [
        {
          lastname: 'Arabis',
          firstname: 'Aldrin',
          birthdate: '1994-06-23',
          phone: '09109071244',
          address: 'Poinsettia, Commonwealth',
          status: 1
        }
      ]
    }
  },
  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.desserts.slice()
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    }
  }
}
</script>

<style>
</style>
