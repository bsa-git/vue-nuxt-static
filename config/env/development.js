export default {
    env: 'development',
    api: {
        base_url: 'http://localhost:8000/api',
        defaultRequest: {
            headers: {
                'X-Requested-With': 'rest.js',
                'Content-Type': 'application/json'
            }
        }
    }
}

