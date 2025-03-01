export class Hospital {
   hospitalId: number;
   hospitalName: string;
   hospitalAddress: string;
   hospitalCity: string;
   hospitalContactNo: string;
   hospitalOwnerName: string;
   hospitalOwnerContactNo: string;
   hospitalEmailId: string;
   userName: string;
   password: string;


   constructor() {
      this.hospitalId = 0;
      this.hospitalName = "";
      this.hospitalAddress = "";
      this.hospitalCity = "";
      this.hospitalOwnerName = "";
      this.hospitalOwnerContactNo = "";
      this.hospitalContactNo = "";
      this.hospitalEmailId = "";
      this.userName = "";
      this.password = "";
   }
}

export interface API_RESPONSE {
   message: string
   result: boolean
   data: any
}

export class User {
   userName: string;
   password: string;

   constructor() {
      this.password = "";
      this.userName = "";
   }
}

export class Appointment {

   name: string;
   mobileNo: string;
   city: string;
   age: number;
   gender: string;
   appointmentDate: Date;
   appointmentTime: string;
   isFirstVisit: boolean;
   naration: string;
   hospitalId: number;
   hospitalName:string;
   appointmentId:number;

   constructor() {
      this.age = 0;
      this.appointmentDate = new Date(),
      this.appointmentTime = "";
      this.city = "";
      this.gender = "";
      this.hospitalId = 0;
      this.isFirstVisit = false;
      this.mobileNo = "";
      this.naration = "";
      this.name = "";
      this.hospitalName =""
      this.appointmentId = 0;

   }

}