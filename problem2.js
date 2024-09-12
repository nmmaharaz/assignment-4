function sendNotification(email){
      let array = email.split('')
      if(!array.includes("@")){
            return "Invalid Email"
         }

      let splitEmail = email.split('@');
      let notification = splitEmail[0] + (' ') + "sent you an email from" + (' ') + splitEmail[1]
      return notification;
}

let values = "fahim234gmail.com"
const result = sendNotification(values);
console.log(result)