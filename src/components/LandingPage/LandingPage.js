import React from "react";
import WeatherSearch from "../weather_search/WeatherSearch";
import axiosInstance from "../../config/axios_config";
import LongInfo from "../LongInfo/LongInfo";
import ListWeight from "../ListWeather/ListWeather";
import "./LandingPage.css";
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        list: [],
      },
    };
  }

  onSearch = async (city) => {
    const response = await axiosInstance.get("/find", {
      params: {
        q: city,
        cnt: 10,
        units: "metric",
      },
    });
    this.setState({ data: response.data });
    console.log("response--->", response);

    // axiosInstance
    //   .get("/find", {
    //     params: {
    //       q: city,
    //       cnt: 10,
    //     },
    //   })
    //   .then((response) => {
    //     console.log("response-->", response);  //cind  primesti datele
    //     this.setState({ data: response.data });
    //   });
    // console.log("city-->", city);
  };

  render() {
    return (
      <div>
        <WeatherSearch onSearch={this.onSearch} />

        <div className="column">
          <div>
            {this.state.data.list[0] && (
              <LongInfo info={this.state.data.list[0]} />
            )}
          </div>
          <div>
            {this.state.data.list.length > 0 && (
              <ListWeight
                list={this.state.data.list}
            
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default LandingPage;
