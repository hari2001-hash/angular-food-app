import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EmpAddEditComponent } from './hotel-add-edit/emp-add-edit.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddFoodsComponent } from './add-foods/add-foods.component';
import { AdminComponent } from './admin/admin.component';
import { BestFoodsComponent } from './best-foods/best-foods.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { DiscountCountdownComponent } from './discount-countdown/discount-countdown.component';
import { FoodCategoriesComponent } from './food-categories/food-categories.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HotelPageComponent } from './hotel-page/hotel-page.component';
import { InspirationFoodComponent } from './inspiration-food/inspiration-food.component';
import { LoginComponent } from './login/login.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { TopBrandsComponent } from './top-brands/top-brands.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CartGuardsService } from './Guards/cart-guards.service';
import { AuthService } from './services/auth.service';
import { AdminGuardsService } from './Guards/Admin/admin-guards.service';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { environment } from 'src/environments/environment';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { SummaComponent } from './summa/summa.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFoodsComponent,
    EmpAddEditComponent,
    AdminComponent,
    BestFoodsComponent,
    CartPageComponent,
    DiscountCountdownComponent,
    FoodCategoriesComponent,
    FooterComponent,
    HomePageComponent,
    HotelPageComponent,
    InspirationFoodComponent,
    TopBrandsComponent,
    LoginComponent,
    MyHeaderComponent,
    NotFoundComponent,
    PaymentComponent,
    RegisterComponent,
    SearchComponent,
    SuccessMessageComponent,
    TopBrandsComponent,
    AddDiscountComponent,
    ForgotPasswordComponent,
    OrderHistoryComponent,
    HoverHighlightDirective,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    LoggerModule.forRoot(environment.logging),


  ],
  providers: [CartGuardsService,AuthService,AdminGuardsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
