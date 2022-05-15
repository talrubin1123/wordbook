import { IonHeader, IonPage, IonIcon, IonContent, IonPopover, IonToolbar, IonButton, IonButtons, IonImg } from '@ionic/react';
import { personCircle, ellipsisHorizontal, ellipsisVertical, logOutOutline } from 'ionicons/icons';
import imgIcon from '../icon/icon.png';

import './ToolBar.css';

import { menuController } from '@ionic/core';
import { useState } from 'react';

const handleOpenMenu = async () => {
  if (!await menuController.isOpen('first')) {
    menuController.toggle('left')
    await menuController.enable(true, "first")
    console.log(await menuController.open("first"))
    console.log(await menuController.isEnabled())
  }
};

const ToolBar: React.FC = () => {
  const [showPopover, setShowPopover] = useState<{ open: boolean, event: Event | undefined }>({
    open: false,
    event: undefined,
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton onClick={(e) => setShowPopover({ open: true, event: e.nativeEvent })}>
              <IonIcon slot="icon-only" icon={personCircle} >
                <IonPopover
                  isOpen={showPopover.open}
                  event={showPopover.event}
                  onDidDismiss={e => setShowPopover({ open: false, event: undefined })}
                >
                  <IonButton>log out<IonIcon icon={logOutOutline} /></IonButton>
                </IonPopover>
              </IonIcon>
            </IonButton>
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton color="secondary" onClick={async () => await handleOpenMenu()}>
              <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
            </IonButton>
          </IonButtons>
          <IonImg src={imgIcon} slot="start" style={{ width: 100, height: 80 }} />
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default ToolBar;
