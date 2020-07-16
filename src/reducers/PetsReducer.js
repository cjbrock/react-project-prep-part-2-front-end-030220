let id = 0

export default(state=[{name:"Lucy", age:11, species: "Beagle/Basset Hound"}], action) => {
  const newPet = () =>{
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
    default:
      return state
  }
}