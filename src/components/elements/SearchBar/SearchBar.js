import React, { Component }  from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        value: ''
    }
    // Must have this here so we can reset it
    timeout = null;

    doSearch = (event) => {
        //ES6 Destructuring props and state
        const { callback } = this.props;
        
        this.setState({value: event.target.value })
        clearTimeout(this.timeout);
        //Set a timeout to wait for this user to stop waiting
        //So we don't have to make unnecessary calls
    this.timeout = setTimeout( () => {
        callback(false, this.state.value);
    }, 500)
}  

    render(){
        return (
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                    <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
                        <input
                         type="text"
                            className="rmdb-searchbar-input"
                             placeholder="Search"
                             onChange={this.doSearch}
                             value={this.state.value}
                         /> 
                </div>
            </div>    
        )
    }

}


export default SearchBar;