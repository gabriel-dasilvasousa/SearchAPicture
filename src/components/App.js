import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component{
    async onSearchSubmit(term){
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID lX1s38hRz_juI4g8IR9PNRTjOArphy2R2nKGvTMR8DA'
            }
        });

        console.log(response.data.results);
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
    
}

export default App;