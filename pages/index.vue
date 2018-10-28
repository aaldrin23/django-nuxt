<template>

</template>
<script>
export default {
	fetch({ app, redirect, store }) {
		if (store.state.authToken) {
			redirect(301, '/dashboard');
		} else {
			redirect(301, '/auth/login');
		}
	}
};
</script>
