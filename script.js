
let score =0;
let wicket = 0;
function clickWicket() {
    if(wicket<10) {
    wicket++;
    RootElement.render(<>
        <App />
       </>)}
}

const App = () =>{

    return(
        <>
          <div className="container">
         <h1>SCORE KEEPER</h1>
         <h4>SCORE:{score}/{wicket}</h4>
         <div className="button">
            <button onClick={()=>addScore(1)}>1</button>
            <button onClick={()=>addScore(2)}>2</button>
            <button onClick={()=>addScore(3)}>3</button>
            <button onClick={()=>addScore(4)}>4</button>
            <button onClick={()=>addScore(5)}>5</button>
            <button onClick={()=>addScore(6)}>6</button>
            <button onClick={clickWicket}>wicket</button>
         </div>
          </div>
            
            </>
    )


}
const RootElement = ReactDOM.createRoot(document.getElementById('root'));
RootElement.render(<>
 <App />
</>)