import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext()
const CartDispatchContext = createContext()

function reducer(state, action){
  switch(action.type){
    case 'ADD':
      const found = state.items.find(i=>i.id===action.payload.id)
      if(found){
        return { ...state, items: state.items.map(i=> i.id===action.payload.id ? { ...i, qty: i.qty+1 } : i) }
      }
      return { ...state, items: [...state.items, { ...action.payload, qty: 1 }] }
    case 'REMOVE':
      return { ...state, items: state.items.filter(i=> i.id!==action.payload) }
    case 'CLEAR':
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }){
  const [state, dispatch] = useReducer(reducer, { items: [] })
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export function useCart(){ return useContext(CartStateContext) }
export function useDispatchCart(){ return useContext(CartDispatchContext) }
