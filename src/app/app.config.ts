import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { UserGateway } from './domain/models/User/gateway/user-gateway';
import { UserService } from './infraestructure/driven-adapter/user/user.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    importProvidersFrom(HttpClientModule),
    {provide:UserGateway, useClass:UserService}
  ]
};
