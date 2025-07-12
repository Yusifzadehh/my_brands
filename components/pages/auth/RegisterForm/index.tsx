"use client";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Input from "@/components/ui/Input";
import MainButton from "@/components/ui/MainButton";
import { useState } from "react";
import SignInForm from "../SignInForm";
import toast from "react-hot-toast";

interface IFormInputs {
  phone: string;
  name: string;
  surname: string;
  password: string;
  passwordConfirm: string;
  birthDate: Date;
  gender: "man" | "woman";
}

const RegisterForm = () => {
  const [activeTab, setActiveTab] = useState("register");
  const handleTabChange = (newActiveTab: "signIn" | "register") => {
    setActiveTab(newActiveTab);
  };

  const { handleSubmit, control } = useForm<IFormInputs>({
    defaultValues: {
      phone: "",
      name: "",
      surname: "",
      password: "",
      passwordConfirm: "",
      birthDate: new Date(),
      gender: "woman",
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    toast.success("Registered successfully");
    console.log(data);
  };

  return (
    <div className="m-auto max-w-[50vw] py-10 text-center">
      <div className="flex w-full py-10">
        <div
          onClick={() => handleTabChange("signIn")}
          className={`border-1 w-full cursor-pointer border text-black ${
            activeTab === "signIn" ? "bg-blue-dark text-white" : "bg-white"
          } p-3 font-semibold uppercase`}
        >
          Daxil olun
        </div>
        <div
          onClick={() => handleTabChange("register")}
          className={`border-1 w-full cursor-pointer border text-black ${
            activeTab === "register" ? "bg-blue-dark text-white" : "bg-white"
          } p-3 font-semibold uppercase`}
        >
          Qeydiyyatdan keçin
        </div>
      </div>

      {activeTab === "signIn" ? (
        <SignInForm />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-5 py-4"
        >
          <h2 className="text-lg font-bold uppercase text-black">qoşulun</h2>
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
          <div className="flex gap-x-5">
            <Controller
              name="name"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <Input
                  type="text"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  placeholder="Ad"
                  classNames="w-full"
                />
              )}
            />
            <Controller
              name="surname"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <Input
                  type="text"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  placeholder="Soyad"
                  classNames="w-full"
                />
              )}
            />
          </div>
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
          <Controller
            name="passwordConfirm"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <Input
                type="password"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                ref={field.ref}
                placeholder="Şifrəni təstiq edin"
              />
            )}
          />
          <Controller
            name="birthDate"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <label>
                Doğum tarixi:
                <Input
                  type="date"
                  value={
                    field.value ? field.value.toString().split("T")[0] : ""
                  }
                  onChange={(e) => field.onChange(e.target.value)}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  max={new Date().toISOString().split("T")[0]}
                  classNames="w-full "
                />
              </label>
            )}
          />

          <div className="flex gap-x-5">
            <Controller
              name="gender"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <>
                  <label>
                    <Input
                      type="radio"
                      value="man"
                      checked={field.value === "man"}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      classNames={`w-7 h-7 p-2 rounded-full border-2 ${
                        field.value === "man"
                          ? "bg-blue-dark  text-white"
                          : "bg-gray-200"
                      }`}
                    />
                    Kişi
                  </label>
                  <label>
                    <Input
                      type="radio"
                      value="woman"
                      checked={field.value === "woman"}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      classNames={`w-7 h-7 p-2 rounded-full border-2 ${
                        field.value === "woman"
                          ? "bg-blue-dark  text-white"
                          : "bg-gray-200"
                      }`}
                    />
                    Qadın
                  </label>
                </>
              )}
            />
          </div>
          <p className="py-5 text-sm text-black">
            Hesab yaratmaqla bizim
            <span className="underline">Şərt və Qaydalarımızı</span> &
            <span className="underline">Məxfilik siyasətimizi</span> qəbul
            edirsiniz.
          </p>

          <MainButton type="submit" styles="uppercase">
            Qeydiyyatdan keçin
          </MainButton>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;
