const todos = (state = { list: [] }, action) => {
  //if action의 타입이 xxx라면
  switch (action.type) {
    case 'ADD_TODO':
      console.log("ADD_TODO ..." + action)

      const newList = [...state.list, {
        text: action.text,
        completed: false
      }]

      state = Objext.assign({}, state, { list: newList })

      breakdefault;

      return state
  }

  //잘못되어도 기존 상태 유지
  return state
}

export default todos