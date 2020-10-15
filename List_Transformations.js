const game = {
    'suspects' : [
        {
            name : 'Rusty',
            color : 'orange'
        },
        {
            name : 'Miss Scarlet',
            color : 'red'
        }
    ]
}

for(let i=0; i<game.suspects.length; i++){
    console.log(game.suspects[i].name);
}

for(let key in game.suspects){
    console.log(game.suspects[key].name);
}





function CreateSuspectObject(name){
    return{
        name : name,
        color : name.split(' ')[1],
        speak(){
            console.log("My name is", name);
        }
    }
}

var suspects = ['Miss Scarlet','Colonel Mustard','Mr White'];

var suspectsObjectList = [];

for(let i=0; i<suspects.length; i++){
    suspectsObjectList.push(CreateSuspectObject(suspects[i]))
}

_.each(suspects, function(name){
    suspectsObjectList.push(CreateSuspectObject(name));
})

suspects.forEach(function(val, i, list){
    suspectsObjectList.push(CreateSuspectObject(name));

})

/*var suspectsObjectList = _.map(suspects, function(name){
    return CreateSuspectObject(name);
})*/


///////////////////


const _ = {};

_.each  = function(list, callback){
    if (Array.isArray(list)){
        for(var i=0; i<list.length; i++){
            callback(list[i], i, list);
        }
    }else{
        for(let key in list){
            callback(list[key], key, list);
        }
    }
}

_.each([1,2,3,4],function(val, ind, list){
    console.log(val);
})