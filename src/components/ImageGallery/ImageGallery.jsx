import { Component } from "react";
import { requestApi } from 'components/servicis/api'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import { ColorRing } from 'react-loader-spinner'
import { ImageGalleryList, Wrapper } from './ImageGallery.styled'
// import { Loader } from "components/Loader/Loader";

export class ImageGallery extends Component {
    state = {
        gallery: [],
        loading: false,
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchQuery !== this.props.searchQuery) {
            const response = await requestApi(this.props.page, this.props.searchQuery)
            this.setState(prevState => { return { gallery: [...response.hits], loading: false } })
        }

        if (prevProps.page !== this.props.page) {
            this.setState({ loading: true })
            const response = await requestApi(this.props.page, this.props.searchQuery)
            this.setState(prevState => { return { gallery: [...prevState.gallery, ...response.hits], loading: false } })
        }
    }

    render() {
        const { gallery, loading } = this.state;

        return (
            <Wrapper>
                <ImageGalleryList >
                    {gallery.map(({ id, webformatURL, largeImageURL }) => (
                        <ImageGalleryItem key={id} id={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />))}
                </ImageGalleryList>
                {loading && <ColorRing visible={true} height="80" width="80"  ariaLabel="blocks-loading" wrapperStyle={{ display: 'block', marginLeft: 'auto',
    marginRight: 'auto' }}  wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>}
            </Wrapper>
        )
    }
}

