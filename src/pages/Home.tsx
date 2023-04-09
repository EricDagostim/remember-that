import { IonAvatar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='tututu'>
          <IonAvatar className='img-avatar'><img src="/assets/icon/perfil.svg" alt="Imagem de perfil" /></IonAvatar>
        </IonToolbar>
      </IonHeader>
         
        
          <div className='content-page'>
            
            <h2 className='principal-title'><strong>Olá Éric!</strong> Esses são seus quadros de lembretes.</h2>

          <div className="painel-reminders">
            
            <button className='btn-panel'>
              <img src="/assets/icon/icon-cake.svg" alt="icon button" />
              <h5>Aniversários</h5>
            </button>

            <button className='btn-panel'>
              <img src="/assets/icon/icon-work.svg" alt="icon button" />
              <h5>Trabalho</h5>
            </button>

            <button className='btn-panel'>
              <img src="/assets/icon/icon-home.svg" alt="icon button" />
              <h5>Casa</h5>
            </button>

            <button className='btn-panel'>
              <img src="/assets/icon/icon-books.svg" alt="icon button" />
              <h5>Faculdade</h5>
            </button>

            <button className='btn-panel-new'>
              <img src="/assets/icon/icon-add.svg" alt="icon button" />
              <h5>Criar</h5>
            </button>
          </div>

          </div>


      

      
    </IonPage> 
  );
};

export default Home;
