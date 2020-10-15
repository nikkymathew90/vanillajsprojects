const weapons = ['candlestick','leadpipe','revolver'];

const makeBroken = function(item){
    return "Broken + ${name}";
}


const _ = {};

_.map = function(list, callback){
    var storage = [];
    for(i=0;i<list.length;i++){
        storage.push(callback(list[i], i, list))
    }

    _.each(list, function(val, i, list){
        storage.push(callback(val, i,list))
    })



    return storage;
}

var newlist = _.map(['one','two','three'], function(val, key, list){
        return val + val;
})


/////////////////

const _ = {};

const videoData = [
    {
        name: 'Miss scarlet',
        present: true
    },
    {
        name: 'Mr White',
        present: false
    },
    {
        name: 'Reverend Green',
        present: true
    },
    {
        name: 'Agent Black',
        present: true
    }
]

_.filter = function(list, callback){
    var storage = [];
    _.each(list, function(val, i, list){
            if(callback(val,i,list)){
                storage.push(val);
            }
    })

    return storage;
}

var filteredList = _.filter(videoData, function(val,i,list){
    return val.present;
})

var suspectsName = _.map(filteredList, suspect => {
    return suspect.name;
})






