"use client";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Input from "@/components/ui/Input";
import MainButton from "@/components/ui/MainButton";
import Link from "next/link";
import toast from "react-hot-toast";

interface IForgetPassword {
  phone: string;
}

const ForgetPassword = () => {
  const { handleSubmit, control } = useForm<IForgetPassword>({
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit: SubmitHandler<IForgetPassword> = (data) => {
    toast.success("Message sent");
    console.log(data);
  };

  return (
    <div className="m-auto max-w-[50vw] py-10 text-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5 py-4"
      >
        <h2 className="text-lg font-bold uppercase text-black">
          Şifrənizi bərpa edin
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
        <div>VƏ YA</div>
        <Link href={"/register"} className="py-5 text-sm text-black">
          Qeydiyyatdan keçin
        </Link>

        <MainButton type="submit" styles="uppercase">
          Göndər
        </MainButton>
      </form>
    </div>
  );
};

export default ForgetPassword;
