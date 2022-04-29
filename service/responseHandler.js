const successHandle = (res, statusCode, data) => {
    res.status(statusCode).json({
        status: 'success',
        data
    })
}

const errorHandle = (res, statusCode, message) => {
    res.status(statusCode).json({
        status: 'false',
        message
    })
}

module.exports = {
    successHandle,
    errorHandle
}