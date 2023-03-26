import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { SanPham } from 'src/app/model/sanpham';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  sanphams: SanPham[] = [];

  selectedSanPham: SanPham = {MaSP:0, tenSP:"",DonGia:0,hinhAnh:"",MaLoai:0}
  constructor(private apiService: ApiService) {
    this.apiService.readSanPham().subscribe((sanphams: SanPham[])=>{
      this.sanphams = sanphams;
    })
   }
  ngOnInit(): void {
  }
  createOrUpdateSanPham(form:any){
    form.value.MaSP = this.selectedSanPham.MaSP;
    form.value.tenSP = this.selectedSanPham.tenSP;
    form.value.DonGia = this.selectedSanPham.DonGia;
    form.value.hinhAnh = this.selectedSanPham.hinhAnh;
    form.value.MaLoai = this.selectedSanPham.MaLoai;

    if(this.selectedSanPham && this.selectedSanPham.MaSP){
      this.apiService.updateSanPham(form.value).subscribe((sanpham: SanPham)=>{
        this.apiService.readSanPham().subscribe((sanphams: SanPham[])=>{
            this.sanphams = sanphams;
        })
      });
    }
    else {
      this.apiService.createSanPham(form.value).subscribe((sanpham: SanPham)=>{
        this.apiService.readSanPham().subscribe((sanphams: SanPham[])=>{
          this.sanphams = sanphams;
        })
      });
    }
  }
  selectSanPham(sanpham: SanPham){
    this.selectedSanPham = sanpham;
  }

  deleteSanPham(MaSP:number){
    this.apiService.deleteSanPham(MaSP).subscribe((sanpham: SanPham)=>{
      this.apiService.readSanPham().subscribe((sanphams: SanPham[])=>{
        this.sanphams = sanphams;
      })
    });
  }
}
