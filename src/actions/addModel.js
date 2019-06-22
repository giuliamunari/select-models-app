export const ADD_MODEL = 'ADD_MODEL'

export function addModel(model, data) {
      
 const selected = data.find(selectedModel=> {
    return selectedModel.name === model.name
  })
     return{
        type: ADD_MODEL,
        payload:{
            ...selected
        }
    }
}