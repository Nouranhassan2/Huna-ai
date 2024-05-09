import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CurrentPrompts } from 'src/app/current-prompts';
import { PromptShareServiceService } from 'src/app/prompt-share-service.service';
import { ToolsService } from 'src/app/tools.service';

@Component({
  selector: 'app-current-prompt',
  templateUrl: './current-prompt.component.html',
  styleUrls: ['./current-prompt.component.css']
})
export class CurrentPromptComponent {
  showCopyMessage: boolean = false;
  @Input()
  imagesList!: string[];
  prompts: CurrentPrompts[] = [];
  selectedCategory:string=''

  constructor(private promptShareService: PromptShareServiceService ,
    private cd: ChangeDetectorRef
  ) {} // Inject the service


  copyText(): void {
    const text = document.getElementById('textToCopy')?.textContent;
    navigator.clipboard.writeText(text || '').then(() => {
      alert('Text copied to clipboard');
    }, (err) => {
      console.error('Failed to copy text: ', err);
    });
  }




  
  ngOnInit() {
    // Subscribe to prompts data
    this.promptShareService.currentPrompts.subscribe(prompts => {
      this.prompts = prompts;
      console.log('Received prompts:', this.prompts);  // For debugging purposes
    });

    // Subscribe to the current category
    this.promptShareService.currentCategory.subscribe(category => {
      this.selectedCategory = category;
      console.log('Current category:', this.selectedCategory);  // For debugging purposes
    });
  }
}
