export const ADD_BOOK = 'ADD_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'
import 'react-native-get-random-values'
import { v4 as uuidV4 } from 'uuid'



export function addBook (book) {
  return {
    type: ADD_BOOK,
    book: {
      ...book,
      id: uuidV4()
    }
  }
}

export function removeBook (book) {
  return {
    type: REMOVE_BOOK,
    book
  }
}
