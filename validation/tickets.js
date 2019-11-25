const createTicketsValidation = {
    author_id: {
        isInt: true,
        toInt: true
    },
    item_id: {
        isInt: true,
        toInt: true
    },
    title: {
        isString: true,
        toString: true,
        isLength: {
            options: {ming: 1, max: undefined}
        },
        ltrim: true,
        rtrim: true
    },
    content_text: {
        isString: true,
        toString: true,
        isLength: {
            options: {min: 1, max: undefined}
        },
        ltrim: true,
        rtrim: true,
    },
    priority: {
        isInt: true,
        toInt: true
    }
}

module.exports = {
    createTicketsValidation
}