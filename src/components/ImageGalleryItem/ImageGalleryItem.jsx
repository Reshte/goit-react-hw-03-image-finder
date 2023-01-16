import {ItemGallery, ImgGallery} from "./ImageGalleryItem.styled";


export const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
    return (  
<ItemGallery key={id}>
       <ImgGallery src={webformatURL} alt="" />
</ItemGallery>)  
    }