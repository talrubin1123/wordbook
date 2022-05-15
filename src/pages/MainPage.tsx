import { IonHeader, IonPage } from '@ionic/react';

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