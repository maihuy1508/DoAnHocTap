import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductComponent } from './components/product/product.component';
import { DetailComponent } from './components/detail/detail.component';
import { DangnhapComponent } from './components/dangnhap/dangnhap.component';
import { HttpClientModule } from '@angular/common/http';
import { SanphamComponent } from './components/sanpham/sanpham.component';
import { MuaxeComponent } from './components/muaxe/muaxe.component';
import { DichvuComponent } from './components/dichvu/dichvu.component';
import { ChamsocComponent } from './components/chamsoc/chamsoc.component';
import { BangtinComponent } from './components/bangtin/bangtin.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CartComponent,
    CheckoutComponent,
    ProductComponent,
    DetailComponent,
    DangnhapComponent,
    SanphamComponent,
    MuaxeComponent,
    DichvuComponent,
    ChamsocComponent,
    BangtinComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
