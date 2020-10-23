import React, { useEffect } from "react";
import withRoot from "./modules/withRoot";
import { Outlet } from "react-router-dom";
import AppAppBar from "./modules/views/AppAppBar";
import { useLocation } from "react-router-dom";
import {
  REACT_APP_URL_BASE_BACKEND,
  REACT_APP_URL_BASE,
} from "../../config/index";
function LayoutStart() {
  const valud = useLocation();
  useEffect(() => {
    (async () => {
      const validateSession = await (
        await fetch(`${REACT_APP_URL_BASE_BACKEND}/authenticate`, {
          credentials: "include",
        })
      ).json();
      if (validateSession.status === true) {
        window.location.href = `${REACT_APP_URL_BASE}/bcp`;
      }
    })();
  }, []);

  return (
    <div style={{ overflow: "visible" }}>
      <AppAppBar />

      {valud.pathname === "/" ? (
        <div>
          <p>Hey inscribete a BCP notify :)</p>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
export default withRoot(LayoutStart);
