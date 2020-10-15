var _ = {};
_.reduce = function(list, cb, initial){
    memo  = initial;
    for(var i = 0;i<list.length;i++){
        if(i == 0 && memo == undefined){
            memo = list[i]
        }else{
            memo = cb(list[i],memo)
        }
        
    }

    return memo;
}

var result = _.reduce([1,3,4,5,5], (v, sum) => v+sum, 0);
console.log(result);
