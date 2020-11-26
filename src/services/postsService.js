const { storageService } = require("./storageService")
const { utilService } = require("./utilService")

export const postsService = {
    getPosts,
    toggleLikePost,
    addComment
}

let defaultPosts = [
    {
        id: utilService.makeId(12),
        author: {
            id: 101,
            img: `https://robohash.org/101`,
            name: 'Gabriel'
        },
        product: {
            title: 'Coffee cup and notebook',
            img: "https://pixabay.com/images/download/coffee-2306471_640.jpg",
            price: 12.9,
            id: utilService.makeId(8),
        },
        like: {
            likesAmount: 1240,
            likedAt: null
        },
        comment: [
            { txt: 'Hello', timestamp: Date.now() - 10000, userImg: `https://robohash.org/${utilService.makeId(12)}`, username: "Kelly" },
            { txt: 'Hi', timestamp: Date.now() - 20000, userImg: `https://robohash.org/${utilService.makeId(12)}`, username: "Menahem" }
        ]
    },
    {
        id: utilService.makeId(12),
        author: {
            id: 101,
            img: `https://robohash.org/101`,
            name: 'Gabriel'
        },
        product: {
            title: 'Beehive Cushion',
            img: 'https://pixabay.com/images/download/orange-85821_640.jpg',
            price: 18.9,
            id: utilService.makeId(8),
        },
        like: {
            likesAmount: 7,
            likedAt: Date.now() - 10
        },
        comment: [
            { txt: 'Wow', timestamp: Date.now() - 10000, userImg: `https://robohash.org/${utilService.makeId(12)}`, username: "Kelly" },
            { txt: 'Like!', timestamp: Date.now() - 20000, userImg: `https://robohash.org/${utilService.makeId(12)}`, username: "Steven" }
        ]
    },
    {
        id: utilService.makeId(12),
        author: {
            id: 102,
            img: `https://robohash.org/102`,
            name: 'Elysa'
        },
        product: {
            title: 'Red Tom Scott T-Shirt',
            img: 'https://pixabay.com/images/download/t-shirt-1710578_640.jpg',
            price: 18.9,
            id: utilService.makeId(8),
        },
        like: {
            likesAmount: 7,
            likedAt: null
        },
        comment: [
            { txt: 'Nice!', timestamp: Date.now() - 20000, userImg: `https://robohash.org/${utilService.makeId(12)}`, username: "John" }
        ]
    },
    {
        id: utilService.makeId(12),
        author: {
            id: 103,
            img: `https://robohash.org/103`,
            name: 'Angelika'
        },
        product: {
            title: 'Sneakers',
            img: "https://pixabay.com/images/download/shoes-1897708_640.jpg",
            price: 32.9,
            id: utilService.makeId(8),
        },
        like: {
            likesAmount: 0,
            likedAt: null
        },
        comment: [
        ]
    },
]


async function getPosts() {
    const posts = await _getPostsFromStorage()
    return posts
}

async function toggleLikePost(postId) {
    const posts = await getPosts()
    const post = posts.find(post => post.id === postId)
    if (post.like.likedAt) {
        post.like.likedAt = null
        post.like.likesAmount -= 1
    } else {
        post.like.likedAt = Date.now()
        post.like.likesAmount += 1
    }
    _savePosts(posts)
    return posts
}

async function addComment(postId, commentTXT) {
    const comment = {
        txt: commentTXT,
        timestamp: Date.now(),
        userImg: `https://robohash.org/you`,
        username: 'You'
    }
    const posts = await getPosts()
    const post = posts.find(post => post.id === postId)
    post.comment.push(comment)
    _savePosts(posts)
    return posts

}

async function _savePosts(posts) {
    storageService.saveToStorage('posts', posts)
}

async function _getPostsFromStorage() {
    // this is done during development. to be later used with a server
    let posts = storageService.loadFromStorage('posts')
    if (!posts) {
        storageService.saveToStorage('posts', defaultPosts)
        posts = defaultPosts
    }
    return posts
}