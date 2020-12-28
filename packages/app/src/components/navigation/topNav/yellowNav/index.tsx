import React from "react";
import { Divider, Container } from "@chakra-ui/react";
import { LoginRegisterPopover } from "../loginRegisterPopover";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MAX_WIDTH } from "../../../../helpers/globals";
import classnames from "classnames";
const LoggedInUser = ({ user }) => {
  const history = useHistory();
  const dispatch = useDispatch<any>();

  const handleLogout = () => {
    dispatch.app.logout(history);
  };
  return (
    <>
      <Link
        to={{
          pathname: "/me",
        }}
        className="text-sm cursor-pointer"
      >
        {user?.name}
      </Link>
      <Divider orientation="vertical" borderColor="gray.900" mx="3" h="14px" opacity="0.3" />
      <div onClick={handleLogout} className="text-sm cursor-pointer">
        Logout
      </div>
    </>
  );
};

export const YellowNav = () => {
  const user = useCurrentUser();
  return (
    <div className="bg-yellow-brand text-sm ">
      <div className={classnames("flex justify-between py-3 mx-auto", MAX_WIDTH)}>
        <div className="flex">
          <Link
            to={{
              pathname: "/",
            }}
          >
            HOMEPAGE
          </Link>
        </div>
        <div className="flex w-1/3 justify-end items-center">
          <a title="+060 (800) 801-858" href="tel:060%20(800)%20801-858">
            +060 (800) 801-858
          </a>
          <Divider orientation="vertical" borderColor="gray.900" mx="3" h="14px" opacity="0.3" />

          {user.loggedIn ? <LoggedInUser user={user} /> : <LoginRegisterPopover />}
        </div>
      </div>
    </div>
  );
};
