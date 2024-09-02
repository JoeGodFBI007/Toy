import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { LogOutComponent } from './log-out/log-out.component';
import { SettingComponent } from './setting/setting.component';
import { BoardgameComponent } from './boardgame/boardgame.component';
import { CardgameComponent } from './cardgame/cardgame.component';
import { FigureModelComponent } from './figure-model/figure-model.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';





const routes: Routes = [
  { path: '', redirectTo: 'log-in', pathMatch: 'full' },
  { path : 'log-in', component: LogInComponent},
  { path: 'home', component: HomeComponent }, 
  { path: 'about-us', component: AboutUsComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'cart', component: CartComponent},
  { path : 'account', component: AccountComponent},
  { path : 'log-out', component: LogOutComponent},
  { path : 'setting', component: SettingComponent},
  { path : 'boardgame', component: BoardgameComponent},
  { path : 'cardgame', component: CardgameComponent},
  { path : 'figure-model', component: FigureModelComponent},
  { path : 'navbar', component: NavbarComponent},
  { path : 'register', component: RegisterComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
