import { Tools } from './../../tools';
import { Component } from '@angular/core';
import { loadTranslations } from '@angular/localize';
import { Prompts } from 'src/app/prompts';
import { ToolsService } from 'src/app/tools.service';

@Component({
  selector: 'app-prompts',
  templateUrl: './prompts.component.html',
  styleUrls: ['./prompts.component.css']
})
export class PromptsComponent {
  CatList: any[] = [];
  prompts: any[] = [];  // Adjust type based on the structure of your prompts

  constructor(private _tool: ToolsService) {}



  selectCategory(category: string): void {
    this._tool.getPromptsByCategory(category).subscribe({
      next: (data) => {
        console.log("API Response:", data);  // Log the entire API response
        this.prompts = data.Prompts;

        console.log("Prompts:", this.prompts);  // Check what this logs
      },
      error: (err) => console.error('Error fetching prompts:', err)
    });
  }
  ngOnInit(): void {
    this._tool. getCategories().subscribe({
      next: (response) => {
        this.CatList = response;
        console.log(this.CatList);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}




//   selectCategory(category: string): void {

//     this.toolsS.getPromptsByCategory(category).subscribe({
//       next: (response: Prompts) => {
//         this.tools = response.tools;
//         console.log(response.tools);
        
//       },
//       error: (error) => console.error('Error fetching data: ', error)
//     });
//   }

