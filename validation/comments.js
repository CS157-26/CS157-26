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
}

const createCommentsValidation = {
    ticket_id: {
        in: ["body"],
        isInt: true,
        toInt: true
    },
    author_id: {
        in: ["body"],
        isInt: true,
        toInt: true
    },
    content_text: {
        in: ["body"],
        isString: true,
        toString: true,
        isLength: {
            options: {min: 1, max: undefined}
        }
    },
    current_status: {
        optional: true,
        isString: true,
        toString: true,
        isLength: {
            options: {min: 1, max: undefined}
        }
    },
    priority: {
        optional: true,
        isInt: true,
        toInt: true
    },
    protected_status: {
        optional: true,
        isBoolean: true,
        toBoolean: true
    }
};

const updateCommentsValidation = {
    comment_id: {
        in: ["body"],
        isInt: true,
        toInt: true
    },
    content_text: {
        in: ["body"],
        isString: true,
        isLength: {
            options: {min: 1, max: undefined}
        }
    }
};

const deleteCommentsValidation = {
    comment_id: {
        in: ["body"],
        isInt: true,
        toInt: true
    }
};

module.exports = {
    fetchCommentsValidation,
    createCommentsValidation,
    updateCommentsValidation,
    deleteCommentsValidation
}