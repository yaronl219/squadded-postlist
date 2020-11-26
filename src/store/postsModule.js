const { postsService } = require("../services/postsService");

export default {
    state: {
        posts: null
    },
    getters: {
        postsToShow(state) {
            return state.posts
        }
    },
    mutations: {
        setPosts(state,{posts}) {
            state.posts = posts
        }
    },
    actions: {
        async loadPosts(context) {
            const posts = await postsService.getPosts()
            context.commit({type: 'setPosts', posts})
        },
        async toggleLikePost(context,action) {
            const posts = await postsService.toggleLikePost(action.postId)
            context.commit({type: 'setPosts', posts})
        },
        async addComment(context,action) {
            const posts = await postsService.addComment(action.postId,action.commentTXT)
            context.commit({type: 'setPosts', posts})
        }
    }
}