import { Component } from "react";
import {Header, SearchForm, SearchFormButton, SearchFormLabel, SearchFormInput} from './Searchbar.styled'

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
    <Header className="searchbar">
      <SearchForm className="form" onSubmit={this.handelFormSbmit} >
          
            <SearchFormButton type="submit" className="button">
          <SearchFormLabel htmlFor="">	
&#128269;</SearchFormLabel>
            </SearchFormButton>
             

    <SearchFormInput
      className="input"
      type="text"
            autoComplete="off"
            name=""
      autoFocus
            placeholder="Search images and photos"
            // value={searchQuery}
              onChange={this.handelInputChange}
    />
      
  </SearchForm>
</Header>)
        
    }
}