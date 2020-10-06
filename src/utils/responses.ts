export const Responses = {
    defineResponse(statusCode = 500, data = {}) {
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode,
            body: JSON.stringify(data),
        };
    },
    _200(data = {}) {
        return this.defineResponse(200, data);
    },
    _400(data = {}) {
        return this.defineResponse(400, data);
    },
    _500(data = {}) {
        return this.defineResponse(500, data);
    },
};
    