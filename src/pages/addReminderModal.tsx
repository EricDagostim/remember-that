import React, { useState } from 'react';
import { IonButton, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonTitle, IonToolbar } from '@ionic/react';

interface Props {
  isOpen: boolean;
  onSave: (title: string, date: string) => void;
  onClose: () => void;
}

const AddReminderModal: React.FC<Props> = ({ isOpen, onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSave = () => {
    onSave(title, date);
    setTitle('');
    setDate('');
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
        <IonButton expand="block" onClick={handleSave}>Salvar</IonButton>
      </IonContent>
    </IonModal>
  );
};

export default AddReminderModal;