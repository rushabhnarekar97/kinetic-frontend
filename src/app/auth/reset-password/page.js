"use client";
import AuthLayout from "../components/AuthLayout";
import ResetPasswordForm from "../components/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <AuthLayout activeTab="login">
      <ResetPasswordForm />
    </AuthLayout>
  );
} 