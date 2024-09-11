export interface IPatient {
   readonly _id?: string;
   name?: string;
   email?: string;
   password?: string;
   phone?: string;
   bloodGroup?: string;
   dob?: Date;
   isSubscribed?: boolean;
   isBlocked?: boolean;
   address?: string;
   token?: string;
   createdAt?: string;
   updatedAt?: string;
   profile?: string;
   gender?: "Male" | "Female" | "Other";
   occupation?: string;
}
