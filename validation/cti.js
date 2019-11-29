const typesValidation = {
    category_id: {
        in: ["query"],
        isInt: true,
        toInt: true
    }
}

const itemsValidation = {
    category_id: {
        in: ["query"],
        isInt: true,
        toInt: true
    },
    type_id: {
        in: ["query"],
        isInt: true,
        toInt: true
    }
}

module.exports = { typesValidation, itemsValidation };