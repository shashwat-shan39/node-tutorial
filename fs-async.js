const {readFile, writeFile} = require('fs');

readFile('./foldrr/first.txt', 'utf-8', (err, res) => {
    if(err){
        console.log(err);
        return;
    } 
    const first = res;
    readFile('./foldrr/second.txt', 'utf-8', (err,res) => {
        if(err){
            console.log(err);
            return;
        } 
        const second = res;
        writeFile('./foldrr/res-async.txt',
            `here is the result : ${first} , ${second}`,
            (err, res) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log(res);
            }
        )
    })
})