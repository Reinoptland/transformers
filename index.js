function getUserNamesByIds(ids, users){
    // Input
    // [1, 2] ids
    // [{ id: 1, name: 'Semih', age: 20 },] users

    // Filter because, data is the type as before, but array shorter
    // Intermediate step
    // Check users array if there user with this id
    // [1]

    // Map does something for each element, array same length before, data is different
    // Output
    // ['Semih']

    // return ids
    //     .filter(id => users.find(user => user.id === id) !== undefined)
    //     .map(id => users.find(user => user.id === id).name)

    return users
        .filter(user => ids.includes(user.id))
        .map(user => user.name)
}

function getExperiencedUserNamesByIds(ids, users, olderThanAge){
    return users
        .filter(user => ids.includes(user.id) && user.age > olderThanAge)
        .map(user => user.name)
}

module.exports.getUserNamesByIds = getUserNamesByIds
module.exports.getExperiencedUserNamesByIds = getExperiencedUserNamesByIds
