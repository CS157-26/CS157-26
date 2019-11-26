const fetchCommentsValidation = {
    user_id: {
        in: ["body"],
        optional: true,
        isInt: true,
        toInt: true
    },
    ticket_id: {
        in: ["body"],
        optional: true,
        isInt: true,
        toInt: true
    },
    limit: {
        in: ["body"],
        optional: true,
        isInt: true,
        toInt: true
    }
};

module.exports = {
    fetchCommentsValidation
}