import { ImageSource } from '../../models/ImageSource'
import Image from '../../models/Image'
import './ImagePicker.css'
import PickLocalImage from './PickLocalImage'
import PickUnsplashImage from './PickUnsplashImage'

interface ImagePickerProps {
	source: ImageSource
	setImage: (image: Image) => void
}

const ImagePicker: React.FC<ImagePickerProps> = ({ source, setImage }) => {
	if (source === ImageSource.LOCAL)
		return <PickLocalImage setImage={file => setImage(new Image({ file }))} />
	else if (source === ImageSource.UNSPLASH)
		return (
			<PickUnsplashImage setImage={url => setImage(new Image({ url }))} />
		)
	return <></>
}

export default ImagePicker
