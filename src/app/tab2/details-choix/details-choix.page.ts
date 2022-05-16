import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-choix',
  templateUrl: './details-choix.page.html',
  styleUrls: ['./details-choix.page.scss'],
})
export class DetailsChoixPage implements OnInit {
  choix;
  meschoix: { id: number, etab: string, filiere: string }[] = [
    { "id": 1, "etab": "Technolab", "filiere": "Génie logiciel" },
    { "id": 2, "etab": "Sup management", "filiere": "Marketing" },
    { "id": 3, "etab": "Iam", "filiere": "Management" },
  ];

  aff: boolean = false
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.findChoixById(parseInt(id));
  }
  findChoixById(id: number) {
    console.log('id=' + id)
    this.choix = this.meschoix.find(function (c) {
      return c.id == id;
    });
    console.log(this.choix)

  }

}
