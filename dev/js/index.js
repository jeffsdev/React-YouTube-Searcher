import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
require("../scss/main.scss");
const API_KEY = "AIzaSyDVkXaPoLqzo9Pb8bbzPzzGYFOa30k5Y5U";





class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('FM-84');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });

  }

  render() {


    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    console.log(this.state.videos);
    return (
      <div>
        <header>
          <SearchBar onSearchTermChange={videoSearch}/>
        </header>
        <div className="video-area">
          <VideoDetail video={this.state.selectedVideo}/>
        </div>
        <div className="video-list">
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".root"));
