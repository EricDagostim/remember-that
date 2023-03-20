import React, { useState } from 'react';
import { IonButton, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonTitle, IonToolbar, IonCheckbox } from '@ionic/react';

interface Props {
  isOpen: boolean;
  onSave: (title: string, date: string, showNotification: boolean) => void;
  onClose: () => void;
}

const AddReminderModal: React.FC<Props> = ({ isOpen, onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [showNotificationForm, setShowNotificationForm] = useState(false);

  const handleSave = () => {
    onSave(title, date, showNotificationForm);
    setTitle('');
    setDate('');
    setShowNotificationForm(false);
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Novo Lembrete</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Título</IonLabel>
          <IonInput value={title} onIonChange={e => setTitle(e.detail.value!)} />
        </IonItem>
        <IonItem>
            <IonLabel position="floating">Data e hora</IonLabel>  
            <IonDatetime value={date} onIonChange={(e) => setDate(String(e.detail.value))} />
        </IonItem>
        {showNotificationForm && (
          <IonItem>
            <IonLabel>Enviar notificação</IonLabel>
            <IonCheckbox slot="start" checked={showNotificationForm} onIonChange={() => setShowNotificationForm(!showNotificationForm)}></IonCheckbox>
          </IonItem>
        )}
        <IonButton expand="block" onClick={handleSave}>Salvar</IonButton>
      </IonContent>
    </IonModal>
  );
};

export default AddReminderModal;
