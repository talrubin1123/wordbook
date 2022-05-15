import './basicTemplate.css';
import ImgEntity from './../ImgEntity';
import ImgSrc from 'D:/tzahal/hackathon/wordbook/src/components/LOGO.jpg';

interface ContainerProps {
    name: string;
  }

  interface MenuProps {
    name: string;
  }

//   interface Box {
//     name: string;
//   }
// 
// const Box: React.FC<Box> = (props) => {
//     return (
//         <button className="square" onClick={props.onClick}>
//             {props.value}
//         </button>
//     );
// }

const Menu: React.FC<MenuProps> = ({ name }) => {
    return (
        <div className='menu'>
            <ImgEntity imgName='רותם' imgSrc={ImgSrc}>
            </ImgEntity>
            <ImgEntity imgName='כל' imgSrc={ImgSrc}>
            </ImgEntity>
            <ImgEntity imgName='הכבוד' imgSrc={ImgSrc}>
            </ImgEntity>
        </div>
    )
}

const BasicTemplate: React.FC<ContainerProps> = ({ name }) => {
    return (
        <div>
            <div className="basicTemplate">
                 <strong>{name}</strong>
            </div>
            <Menu name="menu">

            </Menu>
        </div>
    );
  };

export default BasicTemplate