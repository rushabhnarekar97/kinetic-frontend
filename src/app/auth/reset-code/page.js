"use client";
import AuthLayout from "../components/AuthLayout";
import ResetCodeForm from "../components/ResetCodeForm";

export default function ResetCodePage() {
  return (
    <AuthLayout activeTab="login">
      <ResetCodeForm />
    </AuthLayout>
  );
} 