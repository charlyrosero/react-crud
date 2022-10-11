import React,{PropsWithChildren} from 'react'
import Nav from "../admin/components/Nav"
import Menu from "../admin/components/Menu"
const Wrapper=(props:PropsWithChildren<any>)=>{
    return(
        <div>
        <Nav/>
        <div className="container-fluid">
          <div className="row">
              <Menu/>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">

              </div>
              {props.children}
            </main>
          </div>
        </div>
        </div>
    )
};

export default Wrapper;