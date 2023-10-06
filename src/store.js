import { createStore, combineReducer} from 'redux'


initialState = {
  posts: [
    {
      id : Math.random(), 
      title: 'Lorem Ipsum', 
      content : 'lorme ipsum sit amet dolor'
    }
  ],
  archives: [
    {
      id : Math.random(), 
      category: 'janvier 2020'
    }
  ]
}

const addPost = {
  type:'ADD_POST', 
  payload: {
    id: Math.random() , 
    title: 'Mon second post', 
    content : 'lorme ipsum sit amet dolor'
  }
}

const blogReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_POST':
      return {
        ...state,
        posts:[...state.posts, action.payload]
      }
    case 'REMOVE_ALL_POST':
       return {
        ...state , 
        posts: []
       }
    default : 
      return state
  }
}

const userReducer = (state, action ) => state

const rootReducer = combineReducer ({
  blog: blogReducer,
  user: userReducer
})

const store = createStore(rootReducer)

export default store;