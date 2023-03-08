import React, { useState } from 'react';
import { IonButton, IonContent, IonItem, IonHeader, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import AddReminderModal from './addReminderModal';

interface Reminder {
  id: number;
  title: string;
  date: string;
}

const HomePage: React.FC = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSaveReminder = (title: string, date: string) => {
    const newReminder: Reminder = {
    id: Math.floor(Math.random() * 100000),
    title,
    date
    };
    const newReminders = [...reminders, newReminder];
    setReminders(newReminders);
    localStorage.setItem('reminders', JSON.stringify(newReminders));
    setModalIsOpen(false);
    };
    
    const handleDeleteReminder = (id: number) => {
    const newReminders = reminders.filter(reminder => reminder.id !== id);
    setReminders(newReminders);
    localStorage.setItem('reminders', JSON.stringify(newReminders));
    };
    
    const handleCheckReminders = () => {
    const now = new Date().getTime();
    reminders.forEach(reminder => {
    const reminderDate = new Date(reminder.date).getTime();
    if (reminderDate <= now) {
    showNotification(reminder.title);
    handleDeleteReminder(reminder.id);
    }
    });
    };
    
    const showNotification = (title: string) => {
    if (Notification.permission === 'granted') {
    const options = {
    body: 'Este lembrete expirou!',
    icon: '/assets/icon/favicon.png'
    };
    new Notification(title, options);
    }
    };
    
    React.useEffect(() => {
    if ('Notification' in window) {
    Notification.requestPermission();
    }
    }, []);
    
    React.useEffect(() => {
    const cachedReminders = localStorage.getItem('reminders');
    if (cachedReminders) {
    setReminders(JSON.parse(cachedReminders));
    }
    }, []);
    
    React.useEffect(() => {
    const intervalId = setInterval(() => {
    handleCheckReminders();
    }, 60000);
    return () => clearInterval(intervalId);
    }, [reminders]);
    
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lembretes</IonTitle>
        </IonToolbar>
      </IonHeader>
    
      <IonContent fullscreen>
        <IonButton expand="block" onClick={() => setModalIsOpen(true)}>Adicionar novo lembrete</IonButton>
      
        <IonList>
          {reminders.map(reminder => (
            <IonItem key={reminder.id}>
              <IonLabel>
                <h2>{reminder.title}</h2>
                <p>{reminder.date}</p>
              </IonLabel>
      
              <IonButton color="danger" onClick={() => handleDeleteReminder(reminder.id)}>Excluir</IonButton>
            </IonItem>
          ))}
        </IonList>

        <AddReminderModal isOpen={modalIsOpen} onSave={handleSaveReminder} onClose={() => setModalIsOpen(false)} />
      </IonContent>
    </IonPage>
    );
    };
    
    export default HomePage;