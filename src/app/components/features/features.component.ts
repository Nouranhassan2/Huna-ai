import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {

  items = [
    {
      icon: 'assets/freepik--Android--inject-39.jpg',
      title: 'مقالات',
      description: 'لإثراء معلوماتك عن الذكاء الاصطناعي وكل جديد فيه، يمكنك قراءة مقالاتنا عن كيفية استخدام الذكاء وفائدته لمجتمعنا.',
      buttonText: 'اطلع على المقالات'
    },
    {
      icon: 'assets/freepik--Robot--inject-54.jpg',
      title: 'تلقينات الذكاء الاصطناعي',
      description: 'وفرنا لك تلقينات جاهزة للاستخدام في معظم المجالات لاستخراج أفضل النتائج من الذكاء الاصطناعي',
      buttonText: 'ابدأ الاستخدام'   
     },
    {
      icon: 'path/to/icon1.png',
      title: 'أدوات الذكاء الاصطناعي',
      description:'جمعنا لك أكثر من 5000 أداة في مكان واحد لتسهل عليك عملية البحث عن الأداة التي تحتاجها في مجالات مختلفة',
      buttonText:  'ابدأ البحث عن أداة'
    }
    // ... other items
  ];
}
