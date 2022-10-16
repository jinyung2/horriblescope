import Container from "@components/container";
import Footer from "@components/footer/footer";
import React, { PropsWithChildren } from "react";

import { NextSeo } from "next-seo";

import styles from "./main-layout.module.scss";

type MainLayoutProps = {
  title?: string;
  metaDescription?: string;
  metaImage?: string;
};
const MainLayout: React.FC<PropsWithChildren<MainLayoutProps>> = ({
  title,
  metaDescription,
  metaImage,
  children,
}) => {
  return (
    <div className={styles.mainLayout}>
      <NextSeo
        title={title}
        description={metaDescription}
        openGraph={{
          title,
          description: metaDescription,
          ...(!!metaImage && { images: [{ url: metaImage }] }),
        }}
      />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
