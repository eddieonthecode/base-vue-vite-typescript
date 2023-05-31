const API_HOSTS = {
    development: 'http://localhost:8080',
    production: 'http://google.com/test',
}
// @ts-ignore
export const API_HOST = API_HOSTS[process.env.NODE_ENV];

