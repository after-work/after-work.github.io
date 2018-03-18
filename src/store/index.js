import Vue from 'vue'
import Vuex from 'vuex'
import isArray from 'lodash/isArray'
// import posts from 'dist/posts/index.json'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const posts = []

const cleanPosts = () => {
  return posts
    .map(post => {
      post.date = new Date(post.date)
      post.tags = isArray(post.tags) ? post.tags : []
      post.categories = isArray(post.categories) ? post.categories : []
      post.id = post.id.toString()
      post.title = post.title.toString()
      return post
    })
    .sort((a, b) => b.date - a.date)
}

const state = {
  baseTitle: 'Study after work',
  posts: {},
  postList: cleanPosts(),
  asideShow: false,
  asideToc: null
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
