import Vue from 'vue';
import axios from 'axios';
import querystring from 'querystring';

const api = axios.create({
	baseURL: 'http://localhost:8000/api',
	headers: {
		'content-type': 'application/x-www-form-urlencoded'
	}
});

api.interceptors.request.use(config => {
	config.data = querystring.stringify(config.data);
	return config;
});

Vue.use({
	install() {
		Object.assign(Vue.prototype, {
			$axios: api
		});
	}
});
