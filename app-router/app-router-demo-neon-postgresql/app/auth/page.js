import AuthForm from "@/components/auth/auth-form";

async function Home({searchParams}) {

  const formMode = searchParams.mode || "login";

  return <AuthForm mode={formMode} />;
}

export default Home;