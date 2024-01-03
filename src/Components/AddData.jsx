import React, { useState } from "react";
import Header from "./Header";

const AddData = () => {
  const [input, changeInput] = useState({
    loc: "",
    confirmedCasesIndian: "",
    confirmedCasesForeign: "",
    discharged: "",
    deaths: "",
    totalConfirmed: "",
  });

  const readValue = (e) => {
    changeInput({ ...input, [e.target.name]: e.target.value});
  };

  const submitValue = () => {
    console.log(input);
  };
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="loc"
                  value={input.loc}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Indian Confirmed Cases
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="confirmedCasesIndian"
                  value={input.confirmedCasesIndian}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Foreign Confirmed cases
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="confirmedCasesForeign"
                  value={input.confirmedCasesForeign}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Total Confirmed cases
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="totalConfirmed"
                  value={input.totalConfirmed}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Deaths
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="deaths"
                  value={input.deaths}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Discharged
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="discharged"
                  value={input.discharged}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddData;
