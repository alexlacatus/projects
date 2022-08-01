const pieces = document.getElementsByClassName("glyphicon glyphicon-record")



const blackPieces = [] 
const whitePieces = []
let selected=true;
let white
let black
let border=document.getElementById("a1").style.border;
let possibleNextCoords =[]  ;
let piece

let space;
let whiteTurn=true;
let blackMoves=30
let whiteMoves=30

let whiteScore=0
let blackScore=0
var wscore=document.getElementsByClassName("p1score")
var bscore=document.getElementsByClassName("p2score")
var wmoves=document.getElementsByClassName("p1moves")
var bmoves=document.getElementsByClassName("p2moves")
var main=document.getElementsByClassName("main")
var movesRemaining=document.getElementsByClassName("movesRemaining")[0].firstChild
var bonus=document.getElementById("bonus");


var upBonus=false
var rangeBonus=false
var skipTurn=false
var bonusAquired=false


 getBonus();

for(let i=0;i<pieces.length;i++){
    if(pieces[i].getAttribute("tag")=="white"){
        white=pieces[i].style
        whitePieces.push(pieces[i]); 
        let pieceaux=pieces[i]
        pieces[i].addEventListener("mousedown", function() {
            piece=pieceaux
            whitePiecePressed()})
    }
    else 
    {   
        black=pieces[i].style
        blackPieces.push(pieces[i]);
        let pieceaux=pieces[i]  
        pieces[i].addEventListener("mousedown",function() {
            piece=pieceaux;
             blackPiecePressed()
             })
 
    }   
}





function whitePiecePressed(){
    
    if(!whiteTurn)return
    if(skipTurn){
        whiteTurn=!whiteTurn;
        skipTurn=false;
        getBonus()
        return
    }
    
    if(upBonus){
        upBonus=false;
        if(piece.id.length!=4){
            piece.id=piece.id+"+";
            

       }
       else{
        
        rangeBonus=true;
        bonus.textContent="rangeBonus"
       }
       
    }
    
    let xCoord=piece.parentNode.getAttribute("id")[0];
    let yCoord=piece.parentNode.getAttribute("id")[1];
    possibleNextCoords =[]  ;
    
    possibleNextCoords.push(increment(xCoord)+decrement(yCoord));
    possibleNextCoords.push(increment(xCoord)+yCoord);
    possibleNextCoords.push(increment(xCoord)+increment(yCoord));
    if(rangeBonus){
        possibleNextCoords.push(increment(increment(xCoord))+decrement(yCoord));
        possibleNextCoords.push(increment(increment(xCoord))+decrement(decrement(yCoord)));
        possibleNextCoords.push(increment(increment(xCoord))+yCoord);
        possibleNextCoords.push(increment(increment(xCoord))+increment(yCoord));
        possibleNextCoords.push(increment(increment(xCoord))+increment(increment(yCoord)));
    }
    if(piece.id.length==4){
        possibleNextCoords.push(decrement(xCoord)+decrement(yCoord))
        possibleNextCoords.push(decrement(xCoord)+yCoord)
        possibleNextCoords.push(decrement(xCoord)+increment(yCoord));
        possibleNextCoords.push(xCoord+decrement(yCoord))
        possibleNextCoords.push(xCoord+increment(yCoord));
        if(rangeBonus){
            
            possibleNextCoords.push(decrement(decrement(xCoord))+decrement(yCoord))
            possibleNextCoords.push(decrement(decrement(xCoord))+decrement(decrement(yCoord)))
            possibleNextCoords.push(decrement(decrement(xCoord))+yCoord)
            possibleNextCoords.push(decrement(decrement(xCoord))+increment(yCoord));
            possibleNextCoords.push(decrement(decrement(xCoord))+increment(increment(yCoord)));
            possibleNextCoords.push(xCoord+decrement(decrement(yCoord)))
            possibleNextCoords.push(xCoord+increment(increment(yCoord)));
            possibleNextCoords.push(increment(xCoord)+decrement(decrement(yCoord)))
            possibleNextCoords.push(increment(xCoord)+increment(increment(yCoord)));
            possibleNextCoords.push(decrement(xCoord)+decrement(decrement(yCoord)))
            possibleNextCoords.push(decrement(xCoord)+increment(increment(yCoord)));

        }

    }
    
    
   
    for(let i=0;i<possibleNextCoords.length;i++) {
       
        
        if(possibleNextCoords[i][0]!='z' && possibleNextCoords[i][1]!='z'){
        document.getElementById(possibleNextCoords[i]).style.borderColor ='yellow'
        document.getElementById(possibleNextCoords[i]).style.borderStyle ='dashed'
        
        }
    } 
    
    
    piece.style.color='red'; 
    selected=true;
    
   


  
   

}
function blackPiecePressed(){
    if(whiteTurn)return
    if(skipTurn){
        whiteTurn=!whiteTurn;
        skipTurn=false;
        getBonus();
        return
    }
    
    if(upBonus){
        upBonus=false;
        if(piece.id.length!=4){
            piece.id=piece.id+"+";
            

       }
       else{
        
        rangeBonus=true;
        bonus.textContent="rangeBonus"
       }
       
    }
    
    let xCoord=piece.parentNode.getAttribute("id")[0];
    let yCoord=piece.parentNode.getAttribute("id")[1];
    possibleNextCoords =[]  ;
    possibleNextCoords.push(decrement(xCoord)+decrement(yCoord))
    possibleNextCoords.push(decrement(xCoord)+yCoord)
    possibleNextCoords.push(decrement(xCoord)+increment(yCoord));
    if(rangeBonus){
        possibleNextCoords.push(decrement(decrement(xCoord))+decrement(yCoord));
        possibleNextCoords.push(decrement(decrement(xCoord))+decrement(decrement(yCoord)));
        possibleNextCoords.push(decrement(decrement(xCoord))+yCoord);
        possibleNextCoords.push(decrement(decrement(xCoord))+increment(yCoord));
        possibleNextCoords.push(decrement(decrement(xCoord))+increment(increment(yCoord)));
    }
    if(piece.id.length==4){
        possibleNextCoords.push(increment(xCoord)+decrement(yCoord))
        possibleNextCoords.push(increment(xCoord)+yCoord)
        possibleNextCoords.push(increment(xCoord)+increment(yCoord));
        possibleNextCoords.push(xCoord+decrement(yCoord))
        
        possibleNextCoords.push(xCoord+increment(yCoord));
        if(rangeBonus){
            
            possibleNextCoords.push(increment(increment(xCoord))+decrement(yCoord))
            possibleNextCoords.push(increment(increment(xCoord))+decrement(decrement(yCoord)))
            possibleNextCoords.push(increment(increment(xCoord))+yCoord)
            possibleNextCoords.push(increment(increment(xCoord))+increment(yCoord));
            possibleNextCoords.push(increment(increment(xCoord))+increment(increment(yCoord)));
            possibleNextCoords.push(xCoord+decrement(decrement(yCoord)))
            possibleNextCoords.push(xCoord+increment(increment(yCoord)));
            possibleNextCoords.push(increment(xCoord)+decrement(decrement(yCoord)))
            possibleNextCoords.push(increment(xCoord)+increment(increment(yCoord)));
            possibleNextCoords.push(decrement(xCoord)+decrement(decrement(yCoord)))
            possibleNextCoords.push(decrement(xCoord)+increment(increment(yCoord)));

        }


    }
    
    
    for(let i=0;i<possibleNextCoords.length;i++) {
       
        
        if(possibleNextCoords[i][0]!='z' && possibleNextCoords[i][1]!='z'){
        document.getElementById(possibleNextCoords[i]).style.borderColor ='yellow'
        document.getElementById(possibleNextCoords[i]).style.borderStyle ='dashed'
        
        }
    } 
    
    
    piece.style.color='red';
    selected=true; 
    
    
}

let squares = document.getElementsByClassName("1");
for(let i=0;i<squares.length;i++){
    squares[i].addEventListener('mouseup',function(){
        
       
            
        space=squares[i];
            
            
        selectNextSpace();
      
    })
}
let squares2 = document.getElementsByClassName("2");
for(let i=0;i<squares2.length;i++){
    squares2[i].addEventListener('mouseup',function(){
        
       
            
        space=squares2[i]
            
        selectNextSpace();
       
    })
}



function selectNextSpace(){
    
    
    if(!(piece.id[0]=="w"&&whiteTurn || piece.id[0]=="b"&&!whiteTurn))return
   /* for(let i=0;i<possibleNextCoords.length;i++) {
        
         
        if(possibleNextCoords[i][0]!='z' && possibleNextCoords[i][1]!='z'){
         
         document.getElementById(possibleNextCoords[i]).style.border=border
         
         }
     } */

     for(let i=0;i<squares.length;i++) {
        
         
        squares[i].style.border=border;
     }
     for(let i=0;i<squares2.length;i++) {
        
         
        squares2[i].style.border=border;
     }
     
     if(piece.id[0]=="w")piece.style=white;
     else piece.style=black
     
     if(possibleNextCoords.includes(space.id)){
        if(space.firstChild!=null&&space.firstChild.id[0]==piece.id[0]) return  
        
        if(space.firstChild!=null&&space.firstChild.id.length<=piece.id.length){
            
            space.firstChild.remove()
            if(piece.id.length!=4){
                 piece.id=piece.id+"+";
                 
            }
            space.insertAdjacentElement("afterBegin",piece);
            rangeBonus=false;
            update();
            whiteTurn=!whiteTurn;
        } 
        else{
            if(space.firstChild==null){
                space.insertAdjacentElement("afterBegin",piece);
                rangeBonus=false;
                update();
                whiteTurn=!whiteTurn;
            }
        }
        if(piece.id.length!=4&&(piece.id[0]=="w"&&space.id[0]=="h" ||piece.id[0]=="b"&&space.id[0]=="a")){
            piece.id=piece.id+"++";
        } 
        
     }
     
     
     
     
      
     selected=false;


}


function update(){
    getBonus();
    if(!whiteTurn){
        blackMoves--;
        movesRemaining.textContent="Player 1's turn  \n Moves remaining:"
        movesRemaining.style.color="blanchedalmond"
    }
    else{

     whiteMoves--;
     movesRemaining.textContent="Player 2's turn \n Moves remaining:"
     movesRemaining.style.color="darkblue"

    }
    whiteScore=0;
    blackScore=0;
    for(let i=0;i<pieces.length;i++){
        if(pieces[i].id[0]=="w"){
            if(pieces[i].id.length>=4)whiteScore+=3;
            else whiteScore+=(pieces[i].id.length-1);
        }
        else{
            if(pieces[i].id.length>=4)blackScore+=3;
            else blackScore+=(pieces[i].id.length-1);
        }
    }
    wscore[0].textContent=whiteScore;
    bscore[0].textContent=blackScore;
    wmoves[0].textContent=whiteMoves;
    bmoves[0].textContent=blackMoves;
    
    endOfGame()

    

}
function getBonus(){
    let x=Math.random()*100;
    bonusAquired=true;
    
    if(x>95){
        upBonus=true
        bonus.textContent="upBonus"
        return;
    }
    if(x>75&&x<95){

        rangeBonus=true
        bonus.textContent="rangeBonus"
        return;
    }
    if(x>65&&x<75){
        skipTurn=true;
        bonus.textContent="skipRound"
        return;
    }
    bonus.textContent="noBonus"




}


function endOfGame(){
    if(whiteMoves==0 || blackMoves==0){
        main[0].remove();
            wscore[0].textContent="";
            bscore[0].textContent="";
            wmoves[0].textContent="";
            bmoves[0].textContent="";
        if(whiteScore>blackScore){
            
            movesRemaining.textContent="PLAYER 1 WON"
            movesRemaining.style.color="blanchedalmond"
            movesRemaining.style.margin=200+"px " +20+ "px "
        }
        else
        {
            movesRemaining.textContent="PLAYER 2 WON"
            movesRemaining.style.color="darkblue"
            movesRemaining.style.margin=200+"px " +20+ "px "
        }
    }



}

function increment(val){
    switch(val){
        case "a":
            return "b";
        break;
        case "b":
            return "c";
        break;
        case "c":
            return "d";
        break;
        case "d":
            return "e";
        break;
        case "e":
            return "f";
        break;
        case "f":
            return "g";
        break;
        case "g":
            return "h";
        break;
        case "1":
            return "2";
        break;
        case "2":
            return "3";
        break;
        case "3":
            return "4";
        break;
        case "4":
            return "5";
        break;
        case "5":
            return "6";
        break;
        case "6":
            return "7";
        break;
        case "7":
            return "8";
        break;
        default: return "z";

    }

}

function decrement(val){
    switch(val){
        case "b":
            return "a";
        break;
        case "c":
            return "b";
        break;
        case "d":
            return "c";
        break;
        case "e":
            return "d";
        break;
        case "f":
            return "e";
        break;
        case "g":
            return "f";
        break;
        case "h":
            return "g";
        break;
        case "2":
            return "1";
        break;
        case "3":
            return "2";
        break;
        case "4":
            return "3";
        break;
        case "5":
            return "4";
        break;
        case "6":
            return "5";
        break;
        case "7":
            return "6";
        break;
        case "8":
            return "7";
        break;
        default: return "z";

    }

}