class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        errors = [],
        stackt = ""
        ) {
            super(message)
            this.statusCode = statusCode
            this.data = null
            this.message = message
            this.success = false
            this.errors = errors

            if(stackt) {
                this.stack = stackt
            }
            else {
                Error.captureStackTrace(this, this.constructor)
            }
        }
}

export {ApiError}