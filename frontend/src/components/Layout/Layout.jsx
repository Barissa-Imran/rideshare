import React, { Fragment , useEffect} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import { connect } from 'react-redux';
import { layout } from "@chakra-ui/react";
// import { checkAuthenticated, load_user } from '../../action/auth';
//{checkAuthenticated, load_user, children}
const Layout = () => {
//   useEffect(() => {
//     checkAuthenticated();
//     load_user();
// }, []);

  return (
    <Fragment>
      <Header />
      <div>
        <Routers />
        {/* {children} */}
      </div>
      <Footer />
    </Fragment>
  );
};


// export default connect(null, { checkAuthenticated, load_user })(Layout);

export default Layout