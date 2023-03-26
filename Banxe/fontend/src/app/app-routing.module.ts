import { BangtinComponent } from './components/bangtin/bangtin.component';
import { ChamsocComponent } from './components/chamsoc/chamsoc.component';
import { DichvuComponent } from './components/dichvu/dichvu.component';
import { MuaxeComponent } from './components/muaxe/muaxe.component';
import { SanphamComponent } from './components/sanpham/sanpham.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DangnhapComponent } from './components/dangnhap/dangnhap.component';
import { DetailComponent } from './components/detail/detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'product', component:ProductComponent},
  {path:'card', component:CartComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'detail', component:DetailComponent},
  {path:'detail:/MaSP', component:DetailComponent},
  {path:'dangnhap', component:DangnhapComponent},
  {path:'sanpham', component:SanphamComponent},
  {path:'muaxe', component: MuaxeComponent},
  {path:'dichvu', component:DichvuComponent},
  {path:'chamsoc', component:ChamsocComponent},
  {path:'bangtin', component:BangtinComponent},
  {path: 'admin', component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
