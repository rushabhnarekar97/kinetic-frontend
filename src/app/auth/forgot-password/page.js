"use client";
import AuthLayout from "../components/AuthLayout";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout activeTab="login">
      <ForgotPasswordForm />
    </AuthLayout>
  );
} 