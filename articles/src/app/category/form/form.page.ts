import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage   implements OnInit {

  // @ts-ignore
  @ViewChild('input') inputRef: ElementRef

  constructor(public alertController: AlertController) {}

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


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Внимание!',
      message: '<strong>Вы уверены ,что хотите удалить категорию</strong>!!!',
      buttons: [
        {
          text: 'Отмена',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Удалить',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }



  async presentAlertPrompt3() {
    const alert = await this.alertController.create({
      header: 'Изменить позицию',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Позиция 1 '
        },
        {
          name: 'name2',
          type: 'number',
          placeholder: '12'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlertPrompt2() {
    const alert = await this.alertController.create({
      header: 'Добавить позицию',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: ''
        },
        {
          name: 'name2',
          type: 'number',
          placeholder: ''
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}

