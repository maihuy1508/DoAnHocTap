import { logging } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SanPham } from './model/sanpham';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://localhost/api";
  constructor(private httpClient: HttpClient) { }
  readSanPham(): Observable<SanPham[]> {
    return this.httpClient.get<SanPham[]>(`${this.PHP_API_SERVER}/read_sanpham.php`);
  }

  find(MaSP:any): Observable<SanPham[]> {
    return this.httpClient.get<SanPham[]>(`${this.PHP_API_SERVER}/read_sanpham.php/${MaSP}`);
  }

  createSanPham(sanpham: SanPham): Observable<SanPham>{
    return this.httpClient.post<SanPham>(`${this.PHP_API_SERVER}/create_sanpham.php`, sanpham);
  }

  updateSanPham(sanpham: SanPham){
    return this.httpClient.put<SanPham>(`${this.PHP_API_SERVER}/update_sanpham.php`, sanpham);
  }

  deleteSanPham(MaSP: number){
    return this.httpClient.delete<SanPham>(`${this.PHP_API_SERVER}/delete_sanpham.php/?MaSP=${MaSP}`);
  }
  
}
