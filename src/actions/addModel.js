export const ADD_MODEL = 'ADD_MODEL'

export function addModel(model, data) {
    const selectedModel = data.find(selectedModel => selectedModel.name === model.name)
    return {
        type: ADD_MODEL,
        payload: {
            ...selectedModel
        }
    }
}