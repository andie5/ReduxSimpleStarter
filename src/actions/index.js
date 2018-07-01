export function selectBookAct(book){
    // select book is an ActionCreator , it needs to return an action, an object(aka payload = conditions of action being triggered) 
    // with a type property - purpose of action
    // action always returns a type (alwyas uppercase) and sometimes a payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}