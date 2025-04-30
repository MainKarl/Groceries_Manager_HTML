import { useEffect, type ReactElement } from "react";
import { useRouter } from "next/router";

import type { NextPageWithLayout } from "./_app";
import MainLayout from "src/layout/MainLayout/MainLayout";

const Page: NextPageWithLayout = () => {
  const router = useRouter();

  useEffect(() => {
    // TODO : Add the authentification token verification
    if (true) {
      //router.push("/login");
    }
  }, []);

  return <></>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
