import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {
  @Input() pos = '-1 0.5 -3';
  constructor() { }

  ngOnInit() {
  }

}