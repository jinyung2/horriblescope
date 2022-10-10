import { PropsWithChildren } from "react";

type MainLayoutProps = {
  title: string;
  metaDescription: string;
  metaImage?: string;
};
const MainLayout: React.FC<PropsWithChildren<MainLayoutProps>> = ({
  title,
  metaDescription,
  metaImage,

  children,
}) => {
  return (
    <>
      <>SE0</>
      <>- meta title and desc</>
      <></>
      <>CONTAINER</>
      <>FOOTER</>
    </>
  );
};

export default MainLayout;
