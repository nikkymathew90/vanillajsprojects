const reduce = function(list, cb, initial){
    var memo  = initial;
    for(i=0;i<list.length;i++){
        if(i == 0 && memo == undefined){
            memo = list[0];
        }else{
            memo = cb(list[i], memo);
        }
        
    }

    return memo;
}


var result = reduce([1,2,3], (v, sum) => v+sum);

////////////////////////////////////////////////////////

const notInRoom = (suspect, memo) => {
        const emptyRooms = reduce(suspect.rooms, (room, memo) =>{
            if(room == false) memo.push(room)
            return memo
            
        },[])
        return emptyRooms;
}
_.reduce(newDevelopment, notInRoom, []);

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }



    if (a && b) {
        if (op === 'asc') {
          if (typeof (a) === 'boolean') {
            return (a === b) ? 0 : (a ? -1 : 1)
          }
          a.toLowerCase()
          return a > b ? 1 : -1
        } else {
           if (typeof (a) === 'boolean') {
               return (a === b) ? 0 : (a ? 1 : -1)
           }
           return a < b ? 1 : -1
        }
       }