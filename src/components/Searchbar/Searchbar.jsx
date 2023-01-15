import { Component } from "react";

export class Searchbar extends Component {
    state = {
        searchQuery: null,
  }
  
  handelInputChange = (e) => {
       this.setState({searchQuery: e.currentTarget.value})  
  }

  handelFormSbmit = (e) => {
      e.preventDefault()
         this.props.onSubmit(this.state);
         this.reset()
  }
  
  reset = () => {
    this.setState({searchQuery: null})
  }

    render() {return(
    <header className="searchbar">
      <form className="form" onSubmit={this.handelFormSbmit} >
       <button type="submit" className="button">
       <span className="button-label">Search</span>
      </button>

    <input
      className="input"
      type="text"
            autoComplete="off"
            name=""
      autoFocus
            placeholder="Search images and photos"
            // value={searchQuery}
              onChange={this.handelInputChange}
    />
  </form>
</header>)
        
    }
}