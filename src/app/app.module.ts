 /*Modules*/
  import { BrowserModule } from '@angular/platform-browser';
  import { ErrorHandler, NgModule } from '@angular/core';
  import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
/*Translate*/
  import { HttpClientModule, HttpClient } from '@angular/common/http';
  import { HttpModule } from '@angular/http';
  import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
  import { TranslateHttpLoader } from '@ngx-translate/http-loader';
/*Pages*/
  import { MyApp } from './app.component';
  import { HomePage } from '../pages/home/home';
/*Plugins*/
  import { StatusBar } from '@ionic-native/status-bar';
  import { SplashScreen } from '@ionic-native/splash-screen';

export function createTranslateLoader(http: HttpClient){
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [MyApp,HomePage],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers:[
    StatusBar,
    SplashScreen,{
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }]
})
export class AppModule{}
