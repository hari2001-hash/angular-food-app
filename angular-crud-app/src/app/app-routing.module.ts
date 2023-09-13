import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BestFoodsComponent } from './best-foods/best-foods.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HotelPageComponent } from './hotel-page/hotel-page.component';
import { InspirationFoodComponent } from './inspiration-food/inspiration-food.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CartGuardsService } from './Guards/cart-guards.service';
import { AdminGuardsService } from './Guards/Admin/admin-guards.service';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { Payment } from './Guards/Payment/Payment';
import { CartItemRemoveService } from './Guards/cartPage/cart-item-remove.service';
import { ResolveRouteService } from './Guards/Resolver/resolve-route.service';
import { SummaComponent } from './summa/summa.component';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [ { path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent},
{path:'',component: HomePageComponent},
{path:'bestFoods',component: BestFoodsComponent},
{path:'cart',component: CartPageComponent,canActivate:[CartGuardsService],
canDeactivate:[CartItemRemoveService],
resolve:{
  resolvedData:ResolveRouteService
}
},
{path:'hotel',component: HotelPageComponent},
{path:'search/:searchTerm',component:HomePageComponent},
{path:'payment',component:PaymentComponent, canActivate:[Payment],
},
{path:'admin',component:AdminComponent,canActivate:[AdminGuardsService],
},
{path:'success',component:SuccessMessageComponent},
{path:'forgotPassword',component:ForgotPasswordComponent},
{path:'history',component:OrderHistoryComponent},
{path:'summa',component:SummaComponent,
loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule)

}
];




@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule],

})

export class AppRoutingModule { }



