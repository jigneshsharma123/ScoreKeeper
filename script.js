
let score =0;
let wicket = 0;
let ballWiseRes = [];
function clickWicket() {
    if(wicket<10) {
    ballWiseRes.push("W");
    wicket++;
    console.log(ballWiseRes);
    
    RootElement.render(<> <App /></>)}
}
//functional component for the button 
function addScore(num) {
   if(wicket < 10) {
     ballWiseRes.push(num);
    score+=num;
    console.log(ballWiseRes);
    RootElement.render(<> <App /></>)}

   }

const ScoreBtn = ()=> {
    return (

        <>
          <div className="button">
            <button onClick={()=>addScore(0)}>0</button>
            <button onClick={()=>addScore(1)}>1</button>
            <button onClick={()=>addScore(2)}>2</button>
            <button onClick={()=>addScore(3)}>3</button>
            <button onClick={()=>addScore(4)}>4</button>
            <button onClick={()=>addScore(5)}>5</button>
            <button onClick={()=>addScore(6)}>6</button>
            <button onClick={clickWicket}>wicket</button>
         </div>
        </>
    )
}
//end of the functional component of Scorebtn
const App = () =>{

    return(
        <>
          <div className="container">
         <h1>SCORE KEEPER</h1>
         <h4>SCORE:{score}/{wicket}</h4>
          <ScoreBtn />
          </div>
            
            </>
    )


}
const RootElement = ReactDOM.createRoot(document.getElementById('root'));
RootElement.render(<>
 <App />
</>)