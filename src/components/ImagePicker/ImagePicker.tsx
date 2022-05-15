import { ImageSource } from '../../models/ImageSource'
import './ImagePicker.css'

interface ImagePickerProps {
    source: ImageSource
    setImage: (url: string) => void
}

const ImagePicker: React.FC<ImagePickerProps> = ({source, setImage}) => {
	return <></>
}

export default ImagePicker
