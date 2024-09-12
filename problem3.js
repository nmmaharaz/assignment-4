function checkDigitsInName(name){
      if(typeof name !== "string"){
            return "Invalid Input"
      }
      let arr = name.split('')
      for(const letter of name){
            if(isNaN(letter) === false){
                  return "true"
            }
      }
      return "false"
}

const values = ["Raj"]
const result = checkDigitsInName(values)
console.log(result)