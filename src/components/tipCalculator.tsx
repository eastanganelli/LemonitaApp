import React, { useEffect, useState } from 'react';
import { IonCol, IonContent, IonGrid, IonInput, IonLabel, IonRow, IonButton, IonIcon } from '@ionic/react';
import { addCircleOutline, removeCircleOutline } from 'ionicons/icons';
import { Geolocation, Position } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult } from '@awesome-cordova-plugins/native-geocoder'

import { type Tip, defaultTip } from '../interfaces/tip';

import './tipCalculator.css';

const TipCalculator: React.FC = () => {
	const [ myLocation, setMyLocation ] = useState<NativeGeocoderResult | null>(null);
	const [ myCurrency, setMyCurrency ] = useState<string>('ARS');
	const [ recommendedTipRate, setRecommendedTipRate ] = useState<{ min: number; max: number;} | number | null>(null);
	const [ myData, setMyData ] = useState<Tip>(defaultTip);

	const getUserLocation = async () => {
		await Geolocation.getCurrentPosition().then((position: Position) => {
			NativeGeocoder.reverseGeocode(position.coords.latitude, position.coords.longitude).then((result: NativeGeocoderResult[]) => {
				setMyLocation(result[0]);
				console.debug("First Result: " + JSON.stringify(result[0]));
			}).catch((error) => { console.debug('Error getting address ' + error) });
		}).catch((error) => { console.debug('Error getting location ' + error); });
	}

	useEffect(() => {
		getUserLocation();
	}, [myLocation, myData]);

	return (
		<IonContent >
			<IonGrid fixed={true}>
				<IonRow>
					<IonCol>
						<IonGrid>
							<IonRow>
								<IonCol>
									<div id='mount' className='cells'>
										<IonInput label='Ingresar Monto' labelPlacement="floating" type='number' min={1}
											onIonInput={(e) => {
												let newValue = {...myData};
												newValue['amount'] = Number(e.target.value);
												setMyData(newValue);
											}}
										/>
										<IonLabel>{`Moneda: ARS`}</IonLabel>
									</div>
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<div id='split' className='cells'>
										<IonInput onInput={() => {}} label='Dividir entre' labelPlacement="floating" defaultValue={1} value={myData['split']} type='number' min={1}>
											<IonButton slot="start" fill='clear' disabled={myData['split'] < 2} className='decreaseBtn'
												onClick={() => {
													let decreaseSplit = {...myData};
													decreaseSplit['split'] -= 1;
													setMyData(decreaseSplit);
												}}
											><IonIcon slot='icon-only' icon={removeCircleOutline}></IonIcon></IonButton>
											<IonButton slot="end"   fill='clear' className='increaseBtn'
												onClick={() => {
													let increaseSplit = {...myData};
													increaseSplit['split'] += 1;
													setMyData(increaseSplit);
												}}
											><IonIcon slot='icon-only' icon={addCircleOutline}></IonIcon></IonButton>
										</IonInput>
										<IonLabel>{`Hello there`}</IonLabel>
									</div>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonCol>
					<IonCol>
						<div id='tip' className='cells maxHeight'>
							<div>
								{myLocation !== null ?
									<div>
										{`Rango de Tip recomendados para ${ JSON.stringify(myLocation?.countryName) }`}
									</div> : null
								}
								<IonInput label='Propina' labelPlacement='floating' value={myData['tipRate']} min={0} >
											<IonButton slot="start" fill='clear' disabled={myData['tipRate'] < 1} className='decreaseBtn'
												onClick={() => {
													let decreaseTipeRate = {...myData};
													decreaseTipeRate['tipRate'] -= 1;
													setMyData(decreaseTipeRate);
												}}
											><IonIcon slot='icon-only' icon={removeCircleOutline}></IonIcon></IonButton>
											<IonButton slot="end"   fill='clear' className='increaseBtn'
												onClick={() => {
													let increaseTipeRate = {...myData};
													increaseTipeRate['tipRate'] += 1;
													setMyData(increaseTipeRate);
												}}
											><IonIcon slot='icon-only' icon={addCircleOutline}></IonIcon></IonButton>
								</IonInput>
							</div>
						</div>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<div className='cells'>
							<IonLabel>{`Moneda: ARS`}</IonLabel>
						</div>
					</IonCol>
					
				</IonRow>
			</IonGrid>
		</IonContent>
	);
};

export default TipCalculator;