"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/common/CustomFormField";
import SubmitButton from "@/components/common/SubmitButton";
import { signinFormValidation } from "@/components/forms/actions/adminValidation";
import { FormFieldType } from "@/types/fromTypes";

const AdminSigninForm = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const form = useForm<z.infer<typeof signinFormValidation>>({
      resolver: zodResolver(signinFormValidation),
      defaultValues: {
         email: "",
         password: "",
      },
   });

   const onSubmit = async (values: z.infer<typeof signinFormValidation>) => {
      setIsLoading(true);
      setTimeout(()=>{

         setIsLoading(false);
      },3234)
   };

   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 flex-1"
         >
            <section className="mb-12 space-y-4">
               <h1 className="header">Admin Signin</h1>
               <p className="text-dark-700">Please signin to go to dashboard</p>
            </section>

            <CustomFormField
               fieldType={FormFieldType.INPUT}
               control={form.control}
               name="email"
               label="Email address  *"
               placeholder="johndoe@gmail.com"
               iconSrc={"/assets/icons/email.svg"}
            />

            <CustomFormField
               control={form.control}
               fieldType={FormFieldType.PASSWORD}
               name="password"
               label="Password *"
               placeholder="Enter your password"
            />

            <SubmitButton isLoading={isLoading}>Sign In</SubmitButton>
         </form>
      </Form>
   );
};

export default AdminSigninForm;
