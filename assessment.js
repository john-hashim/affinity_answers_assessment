badwords=['xx','yy','zz'];///words that indicate racial slurs

const fs=require("fs")
fs.readFile('comments.txt', 'utf8', function(err, data){ 
        readfile=[data];        //rading comments from files

        var commentsarray=readfile[0].split(',');    ////split it into seperate sentences
        for(let comments in commentsarray){          //looping through comments
            var badcount=0;
            for(let bad in badwords){                    //looping through badwords
                var Eachword=commentsarray[comments].split(' ');     //splits each comments to words 
                for(let word in Eachword){                            
                    if(Eachword[word]==badwords[bad]){
                        badcount++;
                    }
                }
            }
            if(badcount==0){
                console.log('comment'+comments+ ' : No problem with this comment');
            }
            if(badcount==1){
                console.log('comment'+comments+' : contains racial slur word');
            }
            if(badcount==2){
                console.log('comment'+comments+' : contains more than one racial slur words')
            }
            if(badcount>=3){
                console.log('comment'+comments+' : comment must be deleted,which contain words against humanity')
            }
        }
});