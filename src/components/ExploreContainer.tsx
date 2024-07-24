import './ExploreContainer.css';
import React from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from '@ionic/react';

interface ContainerProps {
	name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
	return (
		<IonContent>
			<IonList>
				<IonItem>
					<IonInput label='Monto' labelPlacement="floating" fill="solid" type="number" min="1" placeholder="Valor Monto: ej: 400" >
						<IonLabel slot="start">{`$`}</IonLabel>
					</IonInput>
				</IonItem>
				<IonItem>
					<IonInput label='Personas' type="number" min="1" placeholder="Ingresar Cantidad"></IonInput>
				</IonItem>
		
        <IonItem>
          {/* <IonLabel medium color="primary" style="padding-left:5px;" id="selCalidad">{{'HM.TXT.TXTQUAL'|translate}}:</IonLabel>
          <IonLabel *ngIf="valQuality=='-1'" style="padding-left: 45px;">{{rangeValue}}</IonLabel> */}
          <IonSelect placeholder="Calidad">
            <IonSelectOption value="5"> &#x2605;&#x2606;&#x2606;&#x2606;&#x2606;(5%)</IonSelectOption>
            <IonSelectOption value="10">&#x2605;&#x2605;&#x2606;&#x2606;&#x2606;(10%)</IonSelectOption>
            <IonSelectOption value="15">&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;(15%)</IonSelectOption>
            <IonSelectOption value="20">&#x2605;&#x2605;&#x2605;&#x2605;&#x2606;(20%)</IonSelectOption>
            <IonSelectOption value="25">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;(25%)</IonSelectOption>
            {/* <IonSelectOption value="-1">{{'HM.SLCT.OP6'|translate}}</IonSelectOption> */}
          </IonSelect>
        </IonItem>
        {/* <IonItem *ngIf="valQuality=='-1'">
          <!-- Old In Data -->
            <!-- <IonLabel color="primary" col-4>% {{'HM.TXT.TXTPOR'|translate}}: </IonLabel> -->
            <!-- <IonLabel>%</IonLabel> -->
            <!-- <ion-input #ingPorcent type="number" min="5" placeholder="Ingresar"></ion-input> -->
            <!-- <ion-input #ingPorcent type="number" min="5" placeholder="{{'HM.PH.PPOR'|translate}}"></ion-input> -->
          <ion-range min="5" max="100" snaps="true" pin="true" [(ngModel)]="rangeValue">
            <ion-icon range="50"></ion-icon>
          </ion-range>
        </IonItem> */}
			</IonList>
			{/* <button ion-button full round light icon-end (click)="mathProp(ingMonto.value,ingCant.value,rangeValue,valQuality)">
      <!-- Calcular -->{{'HM.BTNCALC'|translate}}
     <ion-icon ios="logo-usd" md="logo-usd" name="cash"></ion-icon>
   </button>
   <br>
   <IonGrid>
      <ion-row style="background-color: #f4f4f4;">
          <ion-col><IonLabel class="dataOut" color="primary">{{'HM.TXT.TXTOUTPP'|translate}}: </IonLabel></ion-col>
          <ion-col><IonLabel>$ {{outPropina|number:'.2-2'}}</IonLabel></ion-col>
      </ion-row>
      <ion-row style="background-color: #ffe2e2;">
          <ion-col><IonLabel class="dataOut" color="danger">{{'HM.TXT.TXTOUTBPP'|translate}}: </IonLabel></ion-col>
          <ion-col><IonLabel>$ {{outBypeople|number:'.2-2'}}</IonLabel></ion-col>
      </ion-row>
   </IonGrid> */}
		</IonContent>
	);
};

export default ExploreContainer;
