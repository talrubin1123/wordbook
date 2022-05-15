import {
  IonApp,
  setupIonicReact,
  IonContent, IonFab,
  IonFabButton, IonIcon
} from '@ionic/react';
import ToolBar from './components/ToolBar';
import MainPage from './pages/MainPage'; 

import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
// check
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <MainPage/>
    {/* <ToolBar /> */}
    {/* <IonFab vertical="top" horizontal="end" slot="fixed">
      <IonFabButton>
        <IonIcon icon={add} />
      </IonFabButton>
    </IonFab> */}
  </IonApp>
);

export default App;
