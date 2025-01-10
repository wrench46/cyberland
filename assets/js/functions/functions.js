function getColors(color){
    let ret={};
    let colorHex = colors[color];

    if(colorHex == undefined){
        ret ={
            status:'Error',
            color:colorHex,
            message:'Color not found!',
        };
   
        return ret;
    }

    ret ={
        status:'Success',
        color:colorHex,
        message:'Color found: '+colorHex,
    };

    return ret;
};



