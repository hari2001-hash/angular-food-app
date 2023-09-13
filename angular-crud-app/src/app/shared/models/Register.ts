
export class Register{

  uname!:string;
  email!:string;
  phoneNum!:string;
  password!:string;
  conPass!:string;
  address1!:string;
  address2!:string;
  id!:number;
  userOrder!:string;

  constructor(regData:any){
    this.uname=regData.uname;
    this.email=regData.email;
    this.phoneNum=regData.phoneNum;
    this.password=regData.password;
    this.conPass=regData.conPass;
    this.address1=regData.address1;
    this.address2=regData.address2;
    this.id=regData.id;

  }
}

