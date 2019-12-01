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

const fetchOverviewTickets = {
    user_id: {
        in: ["body"],
        optional: true,
        isInt: true,
        toInt: true
    },
    team_id: {
        in: ["body"],
        optional: true,
        isInt: true,
        toInt: true
    },
    params: {
        in: ["body"],
        optional: true,
        isString: true,
        toString: true
    }
}

module.exports = {
    createTicketsValidation,
    fetchOverviewTickets
}