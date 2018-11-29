import qs from 'qs';
import axios from 'axios';
let baseURL = null;
if (process.env.NODE_ENV == "development") {
    baseURL = 'http://localhost:8081';
} else {
    baseURL = "/";
}
axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
// 拦截响应response，并做一些错误处理
axios.interceptors.response.use((response) => {
    // console.log(response);
    return response;
}, (err) => { // 这里是返回状态码不为200时候的错误处理
    return Promise.reject(err);
});


export default {
    baseURL: baseURL,
    ajaxs(getUrl, params, methods) {
        return new Promise((resolve, reject) => {
            let data = Object.assign({}, params);
            axios({
                url: baseURL + getUrl,
                data: qs.stringify(data),
                method: methods ? methods : 'post',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then((res) => {
                resolve(res.data);
            }, (err) => {
                reject(err);

            }).catch(err => {
                throw new Error(err);
            });
        });
    },
};
