function calculateTax(x, y){
      if(x<0 || y<0 || x < y){
            return "Invalid Input"
      }
      const revenue = x - y;
      const tax = revenue * 0.2;
      return tax;
}

const result = calculateTax(10000, 2000)
console.log(result)
