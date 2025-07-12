"use client";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Input from "@/components/ui/Input";
import MainButton from "@/components/ui/MainButton";
import Link from "next/link";
import toast from "react-hot-toast";

interface ISignIn {
  phone: string;
  password: string;
}

const SignInForm = () => {
  const { handleSubmit, control } = useForm<ISignIn>({
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<ISignIn> = (data) => {
    toast.success("Signed in successfully");
    console.log(data);
  };

  return (
    <div className="m-auto max-w-[50vw] py-10 text-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5 py-4"
      >
        <h2 className="text-lg font-bold uppercase text-black">
          Telefon nömrəsi ilə daxil olun
        </h2>
        <Controller
          name="phone"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <Input
              type="text"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
              placeholder="+99400000000"
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <Input
              type="password"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
              placeholder="Şifrə"
            />
          )}
        />

        <Link href={"/forget-password"} className="py-5 text-sm text-black">
          Şifrənizi unutmusunuz?
        </Link>

        <MainButton type="submit" styles="uppercase">
          Daxil olun
        </MainButton>
      </form>
    </div>
  );
};

export default SignInForm;
