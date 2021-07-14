import React,{useEffect,useState} from "react";
import { withRouter } from "react-router";

function Results(props) {



    const [state, setstate] = useState(null);

    
    useEffect(() => {
        if(props.parentState.data){
            let filtered = props.parentState.data.data.map((e) => {
              let filled = e.email.includes(props.match.params.username.trim());
              if (filled) {
                return e;
              }
            });
            if (filtered) {
              let filled = filtered.filter((e) => typeof e !== "undefined");
              setstate(filled);
            }
        }
    }, []);



    let list =<h1>coming..</h1>
    if(state && state.length !== 0){
        list = state.map((d, i) => {
          return (
            <div key={i} className="col">
              <div className="card shadow-sm">
                <img width="100%" height="225" src={d.picture} alt="" />
      
                <div className="card-body">
                  <h4 className="card-text">{d.firstName + " " + d.lastName}</h4>
                  <p className="card-text text-muted fs-10">{d.email}</p>
                </div>
              </div>
            </div>
          );
        });     
    }
    else{
        list =<h1>Nothing Matched Your Search</h1>
    }


    

  return (
    <div>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {list}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Results);
