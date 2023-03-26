import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { ApiService } from 'src/app/api.service';
import { SanPham } from 'src/app/model/sanpham';

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent implements OnInit {
  sanphams: SanPham[]=[];
  selectedSanPham: SanPham = {MaSP:0, tenSP:"",DonGia:0,hinhAnh:"",MaLoai:0}
  constructor(private apiService: ApiService) {
    this.apiService.readSanPham().subscribe((sanphams: SanPham[])=>{
      this.sanphams = sanphams;
    })
   }

  ngOnInit(): void {
  }

}
