"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = process.env.VUE_APP_API_URL || "http://localhost:9090/v1/";
axios.defaults.withCredentials = true;
let config = {};

const instance = axios.create(config);

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

axios.interceptors.request.use(
    function (conf) {
        let auth = getCookie("auth");
        console.log(auth);
        conf.headers.Authorization = auth ? `${auth}` : '';

        return conf;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // Do something with response data
        return response;
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

Plugin.install = function (Vue) {
    Vue.axios = instance;
    window.axios = instance;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return instance;
            }
        },
        $axios: {
            get() {
                return instance;
            }
        },
    });
};

Vue.use(Plugin)

export default Plugin;
