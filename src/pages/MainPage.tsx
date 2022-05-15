import { IonContent, IonHeader, IonImg, IonPage, IonIcon, IonTitle, IonToolbar, IonButton, IonButtons } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

import ToolBar from '../components/ToolBar';
const MainPage: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
        </IonHeader>
        <ToolBar />
      </IonPage>
    );
  };
  
  export default MainPage;