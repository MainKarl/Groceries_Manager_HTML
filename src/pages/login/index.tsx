import { useEffect, type ReactElement } from "react";
import { useRouter } from "next/router";

import type { NextPageWithLayout } from "../_app";
import LoginLayout from "src/layout/LoginLayout/LoginLayout";

const Page: NextPageWithLayout = () => {
  const router = useRouter();

  useEffect(() => {
    // TODO : Add the authentification token verification
    if (false) {
      router.push("/");
    }
  }, []);

  return <div></div>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <LoginLayout>{page}</LoginLayout>;
};

export default Page;
