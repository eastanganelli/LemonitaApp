import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';

//#region Interfaces
	interface Theme {
		name: string;
		styles: ThemeStyle[];
	}
	
	interface ThemeStyle {
		themeVariable: string;
		value: string; 
	}
//#endregion

@Injectable({ providedIn: 'root' })
export class ThemeSwitcherService {
	private themes: Theme[] = [];
	private currentTheme: number = 0;
	 
	constructor(private domCtrl: DomController, @Inject(DOCUMENT) private document) {
		this.themes = [{
			name: 'night',
			styles: [
				{ themeVariable: '--ion-color-primary', value: '#0ec254'},
				{ themeVariable: '--ion-color-primary-rgb', value: '34,34,34'},
				{ themeVariable: '--ion-color-primary-contrast', value: '#f5f6f9'},
				{ themeVariable: '--ion-color-primary-contrast-rgb', value: '255,255,255'},
				{ themeVariable: '--ion-color-primary-shade', value: '#1e2023'},
				{ themeVariable: '--ion-color-primary-tint', value: '#383a3e'}, 
				{ themeVariable: '--ion-text-color', value: '#f5f6f9'},
				{ themeVariable: '--ion-item-background', value: '#383838'},
				{ themeVariable: '--ion-tab-bar-background', value: '#222428'},
				{ themeVariable: '--ion-tab-bar-color-actived', value: '#f4f5f8'},
				{ themeVariable: '--ion-background-color', value: '#383838'}
			]
		}, {
			name: 'light',
			styles: [
				{ themeVariable: '--ion-color-primary', value: '#3880ff'},
				{ themeVariable: '--ion-color-primary-rgb', value: '56,128,255'},
				{ themeVariable: '--ion-color-primary-contrast', value: '#ffffff'},
				{ themeVariable: '--ion-color-primary-contrast-rgb', value: '255,255,255'},
				{ themeVariable: '--ion-color-primary-shade', value: '#3171e0'},
				{ themeVariable: '--ion-color-primary-tint', value: '#4c8dff'}, 
				{ themeVariable: '--ion-text-color', value: '#222428'},
				{ themeVariable: '--ion-item-background', value: '#f4f5f8'},
				{ themeVariable: '--ion-tab-bar-background', value: '#f4f5f8'},
				{ themeVariable: '--ion-tab-bar-color-actived', value: '#f4f5f8'},
				{ themeVariable: '--ion-background-color', value: '#f4f5f8'}
			]
		}]
	}
	saveTheme(theme_: string) { 
		if(theme_ = 'light') { this.currentTheme = 1; }
		else { this.currentTheme = 0; } 
	}
	cycleTheme(): void {
		if(this.themes.length > this.currentTheme + 1){ this.currentTheme++; } 
		else { this.currentTheme = 0; }
		this.setTheme(this.themes[this.currentTheme].name);
	}
	setTheme(name: any): void {
		let theme = this.themes.find(theme => theme.name === name);
		this.domCtrl.write(() => { theme.styles.forEach(style => { document.documentElement.style.setProperty(style.themeVariable, style.value); }); });
	}
}