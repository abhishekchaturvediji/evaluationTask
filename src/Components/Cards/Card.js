import React,{useState} from "react";
import { withRouter } from "react-router";

function Card(props){

    const [searchData, setSearch] = useState(null);

    const onsearchHandler = (e) =>{
        setSearch({[e.target.name]:e.target.value});
      }

    const onsubmitHandler =()=>{
        props.history.push(`/result/${searchData.search}`)
      }

    let list = <h1>loading..</h1>;
    if(props.parentState.data){
        list = props.parentState.data.data.map((d,i)=>{
            return(
                <div  key={i} className="col">
                    <div className="card shadow-sm">
                        <img width="100%"
                        height="225" src={d.picture} alt="" />

                        <div className="card-body">
                        <h4 className="card-text">
                            {d.firstName +' '+ d.lastName}
                        </h4>
                        <p className="card-text text-muted fs-10">
                            {d.email}
                        </p>
                        </div>
                    </div>
              </div>
            )
        })
    }

     
  return (
    <div>
      <header className="p-3 bg-secondary text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end">
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
                name='search'
                onChange = {onsearchHandler}
              ></input>
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-warning" onClick ={onsubmitHandler}>
                Search
              </button>
            </div>
          </div>
        </div>
      </header>

      
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

export default withRouter(Card);
