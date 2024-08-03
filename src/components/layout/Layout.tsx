import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* <MetaHead /> */}
      <nav>
        {/* <Navbar /> */}
      </nav>
      <main>
        {children}
      </main>
      <footer>
        {/* <Footer /> */}
      </footer>
    </>
  );
};

export default Layout;
