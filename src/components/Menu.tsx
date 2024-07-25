import { App, AppInfo } from '@capacitor/app';
import {
	IonContent,
	IonFooter,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
	IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { homeOutline, homeSharp, planetOutline, planetSharp } from 'ionicons/icons';
import './Menu.css';
import React from 'react';

interface AppPage {
	url: string;
	iosIcon: string;
	mdIcon: string;
	title: string;
}

const appPages: AppPage[] = [
	{
		title: 'Calculadora de Propina',
		url: '/TipCalculator',
		iosIcon: homeOutline,
		mdIcon: homeSharp
	},
	// {
	// 	title: `Propinas por País`,
	// 	url: '/TipByCountry',
	// 	iosIcon: planetOutline,
	// 	mdIcon: planetSharp
	// }
];

const Menu: React.FC = () => {
	const location = useLocation();
	const [appVersion, setAppVersion] = React.useState<string>('');

	React.useEffect(() => {
		App.getInfo().then((data: AppInfo) => {
			setAppVersion(data.version);
		});
	});

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList id="inbox-list">
					{/* <IonListHeader>{`Calculadora de Propina`}</IonListHeader>
					<IonNote>{`By Delta Pi New Century ${(new Date()).getFullYear()}`}</IonNote> */}
					{appPages.map((appPage, index) => {
						return (
							<IonMenuToggle key={index} autoHide={false}>
								<IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
									<IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
									<IonLabel>{appPage.title}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
				</IonList>
			</IonContent>
			<IonFooter>
				<IonList id="inbox-list">
					<IonListHeader>{`By Delta Pi New Century`}</IonListHeader>
					<IonNote>{`App Version: ${appVersion}`}</IonNote>
				</IonList>
			</IonFooter>
		</IonMenu>
	);
};

export default Menu;