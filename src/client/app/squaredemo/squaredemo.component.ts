import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/interfaces';

//import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators, ngform} from '@angular/common'
import { FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES }
from '@angular/forms';
import myGlobals = require('../globals');
import {CustomValidators} from '../shared/utils/CustomValidators';

@Component({
    moduleId: module.id,
    selector: 'squaredemo',
    templateUrl: 'squaredemo.component.html',
     directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES]
  

})

export class SquareDemoComponent implements OnInit {
    
    sqPaymentForm:any;
    
    ngOnInit() {
         this.sqPaymentForm = new SqPaymentForm({
         
      
      // Replace this value with your application's ID (available from the merchant dashboard).
      // If you're just testing things out, replace this with your _Sandbox_ application ID,
      // which is also available there.
      applicationId: 'sq0idp-nzmxxE_jbcOiUCNjsmtKSw',
      inputClass: 'sq-input',
      cardNumber: {
        elementId: 'sq-card-number',
        placeholder: "0000 0000 0000 0000"
      },
      cvv: {
        elementId: 'sq-cvv',
        placeholder: 'CVV'
      },
      expirationDate: {
        elementId: 'sq-expiration-date',
        placeholder: 'MM/YY'
      },
      postalCode: {
        elementId: 'sq-postal-code',
        placeholder: 'Postal Code'
      },
      inputStyles: [
        // Because this object provides no value for mediaMaxWidth or mediaMinWidth,
        // these styles apply for screens of all sizes, unless overridden by another
        // input style below.
        {
          fontSize: '14px',
          padding: '3px'
        },
        // These styles are applied to inputs ONLY when the screen width is 400px
        // or smaller. Note that because it doesn't specify a value for padding,
        // the padding value in the previous object is preserved.
        {
          mediaMaxWidth: '400px',
          fontSize: '18px',
        }
      ],
      callbacks: {
        cardNonceResponseReceived: function(errors, nonce, cardData) {
          if (errors) {
            var errorDiv = document.getElementById('errors');
            errorDiv.innerHTML = "";
            errors.forEach(function(error) {
              var p = document.createElement('p');
              p.innerHTML = error.message;
              errorDiv.appendChild(p);
            });
          } else {
            // This alert is for debugging purposes only.
                console.log('Nonce received:');
                console.log(nonce);
                console.log(JSON.stringify(cardData));
            //alert('Nonce received! ' + nonce + ' ' + JSON.stringify(cardData));
            // Assign the value of the nonce to a hidden form element
            var nonceField = document.getElementById('card-nonce');
            nonceField.value = nonce;
            
            // Submit the form
            //document.getElementById('form').submit();
          }
        },
        unsupportedBrowserDetected: function() {
          // Alert the buyer that their browser is not supported
        }
      }
        // console.log('sqPaymentForm init');
    });
    }
    ngAfterViewInit() {
        
        this.sqPaymentForm.build();
    }
      submitButtonClick() {
      
      this.sqPaymentForm.requestCardNonce();
    }
    
    
}