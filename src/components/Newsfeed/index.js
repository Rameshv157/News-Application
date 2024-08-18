import { Component } from "react";
// import { uuid } from "uuidv4";
// import axios from "axios";

import NewsfeedCard from "../NewsfeedCard";
import "./index.css";

class Newsfeed extends Component {
  state = {
    intialData: [],
    searchInput: "",
  };

  componentDidMount() {
    this.getNewsData();
  }

  getNewsData = async () => {
    const url =
      "https://news-api14.p.rapidapi.com/v2/search/articles?query=news&language=en";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0b1d3bd595msh3edcb7377b4aa70p15cdd2jsn5c70a71bf4c6",
        "x-rapidapi-host": "news-api14.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      const getApiData = result.data.map((eachNews) => ({
        date: eachNews.date,
        excerpt: eachNews.excerpt,
        thumbnail: eachNews.thumbnail,
        title: eachNews.title,
      }));
      // console.log(result);
      // console.log(getApiData);

      this.setState({ intialData: getApiData });
      // console.log(intialData);
    } catch (error) {
      console.error(error);
    }
  };

  onChangeData = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  onSubmitData = (e) => {
    e.preventDefault();
  };

  render() {
    const { intialData, searchInput } = this.state;
    const searchResults = intialData.filter((eachSearch) =>
      eachSearch.title.toLowerCase().includes(searchInput.toLocaleLowerCase())
    );
    return (
      <div className="news-feed-container">
        <form onSubmit={this.onSubmitData} className="input-container">
          <input
            type="search"
            placeholder="Search here..."
            value={searchInput}
            onChange={this.onChangeData}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
        {searchResults.length > 0 ? (
          <ul className="card-container">
            {searchResults.map((eachData, index) => (
              <NewsfeedCard key={index} data={eachData} />
            ))}
          </ul>
        ) : (
          <p>No News</p>
        )}
      </div>
    );
  }
}

export default Newsfeed;
