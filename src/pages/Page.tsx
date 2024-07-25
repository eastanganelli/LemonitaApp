import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';

import TipCalculator from '../components/tipCalculator';
import TipByCountry  from '../components/tipByCountry';


const Page: React.FC = () => {
	const { name } = useParams<{ name: string; }>();

	const selectComponent = () => {
		switch (name) {
			case 'TipCalculator':
				return (<TipCalculator />);
			case 'TipByCountry':
				return (<TipByCountry />);
			default:
				return (
					<div>
						<p>Not Found</p>
					</div>
				);
		}
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{name}</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{name}</IonTitle>
					</IonToolbar>
				</IonHeader>
				{selectComponent()}
			</IonContent>
		</IonPage>
	);
};

export default Page;
