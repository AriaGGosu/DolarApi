const minValue = nums => {

    // lets start the function 
    if(!nums[0]){
        return ""
    }else{ 
        return Math.min.apply(null, nums)
    }
}

export default minValue;