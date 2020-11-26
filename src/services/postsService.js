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
            img: '',
            name: 'Gabriel'
        },
        product: {
            title: 'Mountain fox notebook',
            img: '',
            price: 12.9,
            id: utilService.makeId(8),
        },
        like: {
            likesAmount: 1240,
            likedAt: null
        },
        comment: [
            { txt: 'Hello', timestamp: Date.now() - 10000, userImg: '', username: "Kelly" },
            { txt: 'Hi', timestamp: Date.now() - 20000, userImg: '', username: "Menahem" }
        ]
    },
    {
        id: utilService.makeId(12),
        author: {
            id: 101,
            img: '',
            name: 'Gabriel'
        },
        product: {
            title: 'Brown Bear Cushion',
            img: '',
            price: 18.9,
            id: utilService.makeId(8),
        },
        like: {
            likesAmount: 7,
            likedAt: Date.now() - 10
        },
        comment: [
            { txt: 'Wow', timestamp: Date.now() - 10000, userImg: '', username: "Kelly" },
            { txt: 'Like!', timestamp: Date.now() - 20000 , userImg: '', username: "Steven"}
]
    },
{
    id: utilService.makeId(12),
        author: {
        id: 102,
            img: '',
                name: 'Elysa'
    },
    product: {
        title: 'Hummingbird cushion',
            img: '',
                price: 18.9,
                    id: utilService.makeId(8),
        },
    like: {
        likesAmount: 7,
            likedAt: null
    },
    comment: [
        { txt: 'Nice!', timestamp: Date.now() - 20000,  userImg: '', username: "John" }
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

async function addComment(postId,commentTXT) {
    const comment = {
        txt: commentTXT,
        timestamp: Date.now(),
        userImg: `https://robohash.org/${Date.now}`,
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