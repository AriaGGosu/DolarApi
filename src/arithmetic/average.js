const average = nums => {

    let totalNumbers = 0;
    let divideNumber = 0;
    let total;
    nums.map((element, index) => {
        totalNumbers += element;
        divideNumber = index+1;
    })

    // lets start the function 
    total = parseInt(totalNumbers/divideNumber);
    if(!nums[0]){
        return ""
    }else{
        return total;
    }
}

export default average;