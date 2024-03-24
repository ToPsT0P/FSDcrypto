module.exports = class ApiError extends Error {
    status;
    errors;

    constructor(status, message, error){
        super(message)
        this.status = status;

    }

    static UnAuthorizedError() {
        return new ApiError(401, "Пользователь не авторизован")
    }

    static BadReques(message, errors = []){
        return new ApiError(400, message, errors)
    }
}

