const resolvers = {
    Query: {
        Users: () => [{
            ID: "1",
            name: "Jakkapat",
            age: 22,
        }]
    }
}

module.exports = resolvers