import './basicTemplate.css';
import ImgEntity from './../ImgEntity';
import ImgSrc from 'D:/tzahal/hackathon/wordbook/src/components/LOGO.jpg';

interface ContainerProps {
    name: string;
  }

  interface MenuProps {
    name: string;
    imageEntities: {name: string, src: string}[];
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

const Menu: React.FC<MenuProps> = ({ name, imageEntities }) => {
    const listItems = imageEntities.map((imgEntity) =>
            <ImgEntity imgName={imgEntity.name} imgSrc={imgEntity.src}>
            </ImgEntity>
            );
    return (
        <div className='menu'>
            <ul>{listItems}</ul>
        </div>
    )
}

const BasicTemplate: React.FC<ContainerProps> = ({ name }) => {
    let imgEntities = [
        {
            name: "tomer",
            src: "tomer"
        },
        {
            name: "tomer",
            src: "tomer"
        }

    ];

    let json = JSON.stringify(imgEntities);

    return (
        <div>
            <div className="basicTemplּate">
                 <strong></strong>
            </div>
            <Menu name="menu" imageEntities={imgEntities}>

            </Menu>
        </div>
    );
  };

export default BasicTemplate