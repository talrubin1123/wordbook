import './ImgEntity.css';

interface CategoryProps {
  imgSrc: string;
  imgName: string;
}

const ImgEntity: React.FC<CategoryProps> = ({ imgSrc, imgName }) => {
  return (
    <div className="imageContainer">
      <img src={imgSrc} />
      <div className='imgText'>{imgName}</div>
    </div>
  );
};

export default ImgEntity;
