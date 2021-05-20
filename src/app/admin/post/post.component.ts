import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title = 'Posts';
  error: false;
  //allpost: any;

  allpost: any[] = [
    { Id: 1, Image: '../../../assets/images/img1.jpg', Title: 'Angular 7', EnteredDate: '05/19/2021' },
    { Id: 2, Image: '../../../assets/images/img2.jpg', Title: 'Python', EnteredDate: '05/19/2021' },
    { Id: 3, Image: '../../../assets/images/img3.jpg', Title: 'C#', EnteredDate: '05/19/2021' },
    { Id: 4, Image: '../../../assets/images/img4.jpg', Title: 'Angular 8', EnteredDate: '05/19/2021' },
    { Id: 5, Image: '../../../assets/images/img5.jpg', Title: 'Angular 9', EnteredDate: '05/19/2021' },
    { Id: 6, Image: '../../../assets/images/img6.jpg', Title: 'Angular 12', EnteredDate: '05/19/2021' },
  ];

  constructor(private postservice: PostService) { }

  ngOnInit() {

    // this.postservice.getposts().subscribe((data) => {
    //   this.allpost = data
    // })


  }

}
