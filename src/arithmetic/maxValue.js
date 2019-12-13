const maxValue = nums => {

    // lets start the function 
    if(!nums[0]){
        return ""
    }else{ 
        return Math.max.apply(null, nums)
    }
}

export default maxValue;