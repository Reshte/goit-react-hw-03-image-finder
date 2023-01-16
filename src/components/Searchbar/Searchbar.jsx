import { Component } from "react";
import {Header, SearchForm, SearchFormButton, SearchFormLabel, SearchFormInput} from './Searchbar.styled'

export class Searchbar extends Component {
    state = {
        searchQuery: '',
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
    this.setState({searchQuery: ''})
  }

  render() {
    console.log(this.state)
    return (
    <Header >
      <SearchForm onSubmit={this.handelFormSbmit} >
          
          <SearchFormButton type="submit" className="button">
          <SearchFormLabel htmlFor="">ПЕРЕДЕЛАТЬ</SearchFormLabel>
          </SearchFormButton>
             

    <SearchFormInput
            className="input"
            type="text"
             autoComplete="off"
             name="searchQuery"
             autoFocus
             placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handelInputChange}
    />
    </SearchForm>
  </Header>)
        
    }
}