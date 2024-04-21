import { Component, OnInit } from '@angular/core';
import { Tools } from 'src/app/tools';
import { ToolsService } from 'src/app/tools.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  toolList: Tools[] = [];
  constructor(private _tool: ToolsService) {}

  ngOnInit(): void {
    this._tool.getTool().subscribe({
      next: (response) => {
        this.toolList = response.tools;
        console.log(this.toolList);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
