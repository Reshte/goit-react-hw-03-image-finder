// import PropTypes from 'prop-types'
import { Searchbar } from "./Searchbar/Searchbar";
import {Wrapper} from './App.styled'
import { Component } from "react";

export class App extends Component{

  state = {
    searchQuery: null,
  }
  
  handelFormSbmit = (searchQuery) => {
    console.log(searchQuery)
    this.setState({ searchQuery })
  }


  render(){
    return (
    <Wrapper>
      <Searchbar onSubmit={this.handelFormSbmit}/>
      {/* <Searchbar />
      <ImageGallery />
      <ImageGalleryItem />
      <Loader />
      <Button /> 
      <Modal />*/}
    </Wrapper>)
  }

}



