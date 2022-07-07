import Module from "./Module"

export const initialState= {
    basket: [],
    user: null,
    searchItem:"amazon",
    slider:false,
    nav:[],
    back:false,


    

}
 const reducer= (state, action) =>{
    
switch (action.type) {
    case "BACK":
        console.log(state.nav)
        return{
            ...state,back:false
        }
    case "NAVIGATION":
        
        return{
            ...state,nav:action.item,back:true
        }
    case "SLIDE":
        return{
            ...state,slider:true
        }
    case "CLOSE_SLIDER":
        return{
            ...state,slider:false
        }

    case "SEARCH":
        var searchWord ="amazon"
            if (action.item !=="" )
            searchWord=action.item
        return {
            ...state,searchItem:searchWord
        }
    case "REMOVE_FROM_BASKET":
        const index=state.basket.findIndex(element=>
            element.id === action.item.id)

                console.log(index)
        let newBasket=[...state.basket]
        newBasket.splice(index,1)
        
        return{
            ...state,
            basket:newBasket
            }
            
    case "ADD_TO_BASKET":

        console.log([...state.basket,action.item])
    return{
        ...state,basket:[...state.basket,action.item]
    }
    case "SET_USER":
        return{
            ...state,user:action.user
        }
    default:
        return state ;
}

} 

export default reducer;
