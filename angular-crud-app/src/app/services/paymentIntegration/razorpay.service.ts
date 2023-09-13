import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var Razorpay:any;
@Injectable({
  providedIn: 'root'
})
export class RazorpayService {
  private razorpayOptions: any;

  constructor() {
    this.razorpayOptions = {
      key: environment.razorPayAPIKey,
      amount:0, // amount in paise (e.g., 10000 paise = ₹100)
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Payment for Purchase',
      image: 'assets/logo.png', // path to your company logo
      handler: this.razorpayPaymentHandler.bind(this),
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '+919876543210'
      },
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: '#F37254'
      }
    };
  }

  callAMethod(totPrice:number){
    this.razorpayOptions.amount=totPrice*100;//Multiplied to 100 because it is in paise
  }
  initiatePayment(totPrice:number) {
    const rzp = new Razorpay(this.razorpayOptions);
    this.callAMethod(totPrice);
    rzp.open();
  }

  razorpayPaymentHandler(response: any) {
    // Handle the payment response received from Razorpay
    console.log('Payment ID:', response.razorpay_payment_id);
    console.log('Payment Signature:', response.razorpay_signature);
    console.log('Payment Status:', response.razorpay_payment_status);
  }

}
