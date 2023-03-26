import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { SanPham } from 'src/app/model/sanpham';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  sanphams: SanPham[]=[];
  constructor(private router:ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.getRoute(this.router.snapshot.params['MaSP']);
  }
  getRoute(MaSP: any) {
    this.apiService.find(MaSP).subscribe((res:any)=>{
      this.sanphams = res;
    })
  }

}
