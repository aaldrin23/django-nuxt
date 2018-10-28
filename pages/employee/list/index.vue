<template>
	<v-container>
    <remote-table select-all api="/employees" :headers="headers">
      <template slot="items" slot-scope="props">
            <td>{{ props.item.lastname }}</td>
            <td>{{ props.item.firstname }}</td>
            <td>{{ props.item.birthdate }}</td>
            <td>{{ props.item.phone }}</td>
            <td>{{ props.item.address }}</td>
            <td>{{ props.item.status }}</td>
              <td class="justify-center layout px-0">
              <v-icon small class="mr-2" @click="editItem(props.item)">
                edit
              </v-icon>
              <v-icon small @click="deleteItem(props.item)">
                delete
              </v-icon>
            </td>
      </template>
    </remote-table>
	</v-container>
</template>
<script>
export default {
	data: () => ({
		headers: [
			{ text: 'Lastname', value: 'lastname' },
			{ text: 'Firstname', value: 'firstname' },
			{ text: 'Date of Birth', value: 'birthdate' },
			{ text: 'Phone', value: 'phone' },
			{ text: 'Address', value: 'address' },
			{ text: 'Status', value: 'status' },
			{ text: 'Actions', value: 'actions' }
		]
	}),
	methods: {
		editItem(item) {},
		deleteItem(item) {}
	}
};
</script>
