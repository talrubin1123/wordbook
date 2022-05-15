import { IonHeader, IonPage, IonIcon, IonTitle, IonToolbar, IonButton, IonButtons, IonImg } from '@ionic/react';
import { personCircle, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import imgIcon from '../icon/icon.png';

import './ToolBar.css';
import Menu from './Menu';

let disableMenu = true;

const handleOpenMenu = () => {
  disableMenu = false;
};

const ToolBar: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton>
              <IonIcon slot="icon-only" icon={personCircle} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton color="secondary" onClick={() => handleOpenMenu()}>
              <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
            </IonButton>
          </IonButtons>
          <IonImg src={imgIcon} slot="start" style={{ width : 100, height: 80 }}/>
        </IonToolbar>
        <Menu/>
      </IonHeader>
    </IonPage>
  );
};

export default ToolBar;
