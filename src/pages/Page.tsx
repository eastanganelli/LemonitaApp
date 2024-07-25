import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';

import TipCalculator from '../components/tipCalculator';
import TipByCountry  from '../components/tipByCountry';


const Page: React.FC = () => {
	const { name } = useParams<{ name: string; }>();
	const [ pageRender, setPageRender ] = React.useState<React.FC | any>(<h1>Page Not Found</h1>);
	const [ pageName, setPageName ] = React.useState<string>('Page Not Found');

	React.useEffect(() => {
		switch (name) {
			case 'TipCalculator':
				setPageName('Calculadora de Propina');
				setPageRender(<TipCalculator />);
				break;
			case 'TipByCountry':
				setPageName('Propina por País');
				setPageRender(<TipByCountry />);
				break;
			default:
				setPageName('Page Not Found');
				setPageRender(<h1>Page Not Found</h1>);
				break;
		}
	});


	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{pageName}</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{pageName}</IonTitle>
					</IonToolbar>
				</IonHeader>
				{pageRender}
			</IonContent>
		</IonPage>
	);
};

export default Page;
