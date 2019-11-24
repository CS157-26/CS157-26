const createTicketsValidation = {
    author_id: {
        isInt: true,
        toInt: true
    },
    category: {
        isString: true,
        toString: true,
        isLength: {
            options: {min: 1, max: undefined}
        },
        ltrim: true,
        rtrim: true,
        escape: true
    },
    type: {
        isString: true,
        toString: true,
        isLength: {
            options: {min: 1, max: undefined}
        },
        ltrim: true,
        rtrim: true,
        escape: true
    },
    item: {
        isString: true,
        toString: true,
        isLength: {
            options: {min: 1, max: undefined}
        },
        ltrim: true,
        rtrim: true,
        escape: true
    },
    content_text: {
        isString: true,
        toString: true,
        isLength: {
            options: {min: 1, max: undefined}
        },
        ltrim: true,
        rtrim: true,
        escape: true
    },
    priority: {
        isInt: true,
        toInt: true
    }
}

module.exports = {
    createTicketsValidation
}