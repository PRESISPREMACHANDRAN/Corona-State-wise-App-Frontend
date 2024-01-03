import React, { useState } from 'react'
import Header from './Header'

const Search = () => {

    const [input,changeInput]=useState(
        {
            loc:""
        }
    )

    const readValue=(e)=>{
        changeInput({...input,[e.target.name]:e.target.value})
    }

    const submitValue=()=>{
        console.log(input)
    }
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Location</label>
                            <input type="text" className="form-control" name="loc" value={input.loc} onChange={readValue}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={submitValue}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
  )
}

export default Search