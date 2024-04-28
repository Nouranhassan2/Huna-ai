import { PromptShareServiceService } from './../../prompt-share-service.service';
import { Tools } from './../../tools';
import { Component } from '@angular/core';
import { loadTranslations } from '@angular/localize';
import { CurrentPrompts } from 'src/app/current-prompts';
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
  QuestionText:string=''
  selectedCategory: string = ''; // This will hold the name of the selected category


  constructor(private _tool: ToolsService, private promptShareService: PromptShareServiceService) {}

  // selectCategory(category: string): void {
  //   this.selectedCategory = category; // Set the selected category
  //   this.promptShareService.changeSelectedCategory(category); // Share the selected category name

  //   this.prompts = []; // Clear prompts from the previous selection

  //   this._tool.getPromptsByCategory(category).subscribe({

  //     next: (data ) => {
  //       this.prompts = data.Prompt1;
  //       this.QuestionText=data.QuestionText
  //       console.log("Prompts for category", category, ":", this.prompts);
  //     },
  //     error: (err) => console.error('Error fetching prompts:', err)
  //   });
  // }


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


  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.promptShareService.changeSelectedCategory(category);
  
    this._tool.getPromptsByCategory(category).subscribe({
      next: (data: CurrentPrompts[]) => {
        this.prompts = data;
        this.promptShareService.updatePromptsData(data);  // Ensure this line is executing correctly
        console.log("Prompts for category", category, ":", this.prompts);
      },
      error: (err) => {
        console.error('Error fetching prompts:', err);
      }
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

