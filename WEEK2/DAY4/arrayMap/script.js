// This is where I write my functions

import users from "./user.js";

function analyzeUsers(users) {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const activeUsers = users.filter(user =>
        user.posts.some(post => new Date(post.timestamp) >= oneWeekAgo)
    );

    const popularPosts = activeUsers.flatMap(user =>
        user.posts.filter(post => post.likes >= 10)
    );

    const totalLikes = popularPosts.reduce((sum, post) => sum + post.likes, 0);
    const averageLikes = activeUsers.length ? totalLikes / activeUsers.length : 0;

    return {
        activeUserCount: activeUsers.length,
        popularPostCount: popularPosts.length,
        averageLikesPerUser: averageLikes.toFixed(2) // Rounded to 2 decimal places
    };
}

console.log(analyzeUsers(users));
