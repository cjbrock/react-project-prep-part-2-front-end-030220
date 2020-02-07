let id = 0

export default(state= [{name:"Buzz", age:6, species:"Great Pyrenees/Panda"}], action) => {
  const newPet = () => {
    return {
      ...action.payload,
      id: id++
    }
  }
  switch(action.type){
    case "ADD_PET":
      return [...state, newPet()]
    case "REMOVE_PET":
      let newPets = state.filter(pet => pet.id !== action.payload)
      return [...newPets]
    case "EDIT_PET":
      // find the pet ID, make edits, return the pet
    default:
      return state
  }
}