// import PropTypes from 'prop-types'
import { Searchbar } from "./Searchbar/Searchbar";
import { Wrapper } from './App.styled'
import { Component } from "react";
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button'



export class App extends Component{

  state = {
    searchQuery: '',
    page: 1,
  
  }
  
  handelFormSbmit = (searchQuery) => {
    if(searchQuery.searchQuery.length>0){this.setState({ searchQuery })}else{ alert('Enter something')}
    }

  LoadMore = () => {
      this.setState(prevState => { return { page: prevState.page + 1 } 
     })
  }
 
  render() {
      
    const { searchQuery, page,} = this.state
        return (
    <Wrapper>
            <Searchbar onSubmit={this.handelFormSbmit} />
            <ImageGallery searchQuery={searchQuery} page={page} />
            {searchQuery && (<Button onClick={this.LoadMore}/>)} 
    </Wrapper>)
  }

}



