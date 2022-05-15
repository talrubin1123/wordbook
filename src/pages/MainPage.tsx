import { IonHeader, IonPage } from '@ionic/react';

import ToolBar from '../components/ToolBar';
import Menu from '../components/Menu';

const MainPage: React.FC = () => {
    return (
      <IonPage>
        <Menu/>
        <IonHeader>
        </IonHeader>
        <ToolBar />
        
      </IonPage>
    );
  };
  
  export default MainPage;