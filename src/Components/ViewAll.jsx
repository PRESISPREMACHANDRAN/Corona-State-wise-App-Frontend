import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const ViewAll = () => {
  const [regionalData, changeRegionalData] = useState({
    success: true,
    data: {
      summary: {
        total: 43119112,
        confirmedCasesIndian: 43119064,
        confirmedCasesForeign: 48,
        discharged: 42576815,
        deaths: 524201,
        confirmedButLocationUnidentified: 0,
      },
      "unofficial-summary": [
        {
          source: "covid19india.org",
          total: 7945975,
          recovered: 7198877,
          deaths: 119538,
          active: 626192,
        },
      ],
      regional: [],
    },
    lastRefreshed: "2022-05-14T03:47:21.111Z",
    lastOriginUpdate: "2022-05-14T02:30:00.000Z",
  });

  const fetchData = () => {
    axios
      .get("https://api.rootnet.in/covid19-in/stats/latest")
      .then((response) => {
        changeRegionalData(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Location</th>
                      <th scope="col">Indian confirmed cases</th>
                      <th scope="col">Foreign confirmed cases</th>
                      <th scope="col">Total confirmed cases</th>
                      <th scope="col">deaths</th>
                      <th scope="col">discharged</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regionalData.data.regional.map((value, index) => {
                      return (
                        <tr>
                          <td>{value.loc}</td>
                          <td>{value.confirmedCasesIndian}</td>
                          <td>{value.confirmedCasesForeign}</td>
                          <td>{value.totalConfirmed}</td>
                          <td>{value.deaths}</td>
                          <td>{value.discharged}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
