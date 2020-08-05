import { ADD_BOOK, REMOVE_BOOK } from '../actions'
import 'react-native-get-random-values'
import { v4 as uuidV4 } from 'uuid'

const initialState = {
  books: [{ name: 'East of Eden', author: 'John Steinbeck', id: uuidV4() }]
}

const bookReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_BOOK:
      return {
        books: [
          ...state.books,
          action.book
        ]
      }
    case REMOVE_BOOK:
      const index = state.books.findIndex(
        book => book.id === action.book.id
      )

      return {
        books: [
          ...state.books.slice(0, index),
          ...state.books.slice(index + 1)
        ]
      }
    default:
      return state
  }
}

export default bookReducer
