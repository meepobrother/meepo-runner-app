import { Component, EventEmitter, Output } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { PopoverMobileDirectPage } from '../popover-mobile-direct/popover-mobile-direct';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'mobile-input',
  templateUrl: 'mobile-input.html'
})
export class MobileInputComponent {
  form: FormGroup;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  constructor(
    private popoverCtrl: PopoverController,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      pre: '+86',
      mobile: ''
    });
    this.form.valueChanges.subscribe(res => {
      this.onChange.emit({ pre: res.pre, mobile: res.mobile });
    });
  }

  selectDirect(e: any) {
    let popover = this.popoverCtrl.create(PopoverMobileDirectPage, {
      data: this.form.get('pre').value
    });
    popover.onDidDismiss((e) => {
      this.form.get('pre').setValue(e);
    });
    popover.present({
      ev: e
    });
  }

}
