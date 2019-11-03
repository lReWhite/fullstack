import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.page.html',
  styleUrls: ['./add-form.page.scss'],
})
export class AddFormPage implements OnInit {
  // @ts-ignore
  @ViewChild('input') inputRef: ElementRef
  constructor() { }
  image: File
  imagePreview = ''
  ngOnInit() {
  }

  triggerClick() {
    this.inputRef.nativeElement.click()
  }
  onFileUpload(event: any) {

    const file = event.target.files[0];
    this.image = file;
    const reader = new FileReader();
    reader.onload = () => {



      // @ts-ignore
      this.imagePreview = reader.result;


    };
    reader.readAsDataURL(file);
  }
}
