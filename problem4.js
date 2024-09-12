const demo = {
      name : 'meheraj',
      testScore :  15,
      schoolGrade :  25,
      isFFamily : true
}


const values = calculateFinalScore(demo)

function calculateFinalScore (info){
      if(typeof info !== "object"){
            return "Invalid Input";
      }
      const isFFamilyValues = 20;
      if(info['isFFamily'] === true){
            const totalFScore = info['testScore'] + info['schoolGrade'] + isFFamilyValues;
            if(totalFScore >= 80){
                  return "true"
            }else{
                  return "false"
            }
      }else{
            const totalNFScore = info['testScore'] + info['schoolGrade']
            if(totalNFScore >= 80){
                  return "true"
            }else{
                  return "false"
            }
      }
}

console.log(values)