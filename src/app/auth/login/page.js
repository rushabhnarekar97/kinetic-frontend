import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";

export const metadata = {
  title: "Login | Kinetic AIU",
  description: "Login to your Kinetic AIU account to access your dashboard and video analysis.",
  openGraph: {
    title: "Login | Kinetic AIU",
    description: "Login to your Kinetic AIU account to access your dashboard and video analysis.",
    url: "https://yourdomain.com/auth/login",
    siteName: "Kinetic AIU",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Kinetic AIU Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Login | Kinetic AIU",
    description: "Login to your Kinetic AIU account to access your dashboard and video analysis.",
    images: ["/images/logo.png"],
  },
};

export default function LoginPage() {
  return (
    <AuthLayout activeTab="login" showTabs={true}>
      <LoginForm />
    </AuthLayout>
  );
} 