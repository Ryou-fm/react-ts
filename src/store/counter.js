const couter = (state = 0 ,action)=>{
  switch (action.type) {
    case 'INCREMENT':
      return state +1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
export default couter