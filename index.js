
const fooBarqix = (value) => {
    if (!value || typeof value !== "string") {
        return "";
    }

    const numbers = [["3", "Foo"], ["5", "Bar"], ["7", "Qix"]];
    let result= "";
    numbers.forEach((num) => {
        if (value % num[0] === 0) {
           result += num[1];
        }
    });

 
    value.split("").forEach(( number) => {
         if ( number.includes('0')){
             result+="*"
         }
        numbers.forEach((num) => {
            if (num[0].includes( number)) {  
               result += num[1];
              
            }

           
        });

    });
   
    if (!result) {
        console.log(value);
        return value;
    }
    console.log(result);
    return result;
}


fooBarqix("101");