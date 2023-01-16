import { Component } from "react";
import { requestApi } from 'components/servicis/api'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'

export class ImageGallery extends Component {
    state = {
        gallery:[]
    }

      async componentDidUpdate(prevProps, prevState) {
            if (prevProps.searchQuery !== this.props.searchQuery || prevProps.page !== this.props.page) {
            const response = await requestApi(this.props.page, this.props.searchQuery)
                this.setState(prevState => ({gallery: [...prevState.gallery, ...response.hits ]}))                   
        }
    }
       
    render() {
         const{gallery}=this.state;
        return (<ul className="gallery">
             {gallery.map(({ id, webformatURL, largeImageURL }) => (
                       <ImageGalleryItem key={id} id={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />))}
            </ul>)
      
    }
}