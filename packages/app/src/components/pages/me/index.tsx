import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { MAX_WIDTH } from "../../../helpers/globals";
import classnames from "classnames";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

const Dashboard = () => {
  return <h1>Dashboard</h1>;
};

const routes = [
  { title: "Dashboard", link: "dashboard" },
  { title: "Orders", link: "orders" },
  { title: "Downloads", link: "downloads" },
  { title: "Addresses", link: "addresses" },
  { title: "Payment methods", link: "payments" },
  { title: "Orders", link: "orders" },
  { title: "Details", link: "details" },
  { title: "Logout", link: "/" },
];

export const MeCmp = () => {
  const tabStyle = { borderColor: "brand.yellow", fontWeight: 700 };
  let { path, url, ...props } = useRouteMatch();

  const [crumb, setCrumb] = useState("Dashboard");
  return (
    <div className={classnames("flex flex-col justify-between py-3 mx-auto", MAX_WIDTH)}>
      <div className="flex my-5 ">
        <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to={`${path}/dashboard`}>
              My Profile
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{crumb}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Tabs orientation="vertical" width="100%">
        <TabList text="left" width="400px">
          {routes.map(item => (
            <Link onClick={() => setCrumb(item.title)} to={`${url}/${item.link}`}>
              <Tab _selected={tabStyle} py="3">
                {item.title}
              </Tab>
            </Link>
          ))}
        </TabList>

        <TabPanels>
          <Switch>
            <Route exact path={`${path}/`} component={Dashboard} />
            <Route exact path={`${path}/orders`}>
              <h1>Orders</h1>{" "}
            </Route>

            <Route exact path={`${path}/downloads`}>
              <p className="w-full">Downloads</p>
            </Route>

            <Route exact path={`${path}/addresses`}>
              <p className="w-full">addresses!</p>
            </Route>
            <TabPanel>
              <p className="w-full">4!</p>
            </TabPanel>
            <TabPanel>
              <p className="w-full">5!</p>
            </TabPanel>
            <TabPanel>
              <p className="w-full">6!</p>
            </TabPanel>
            <TabPanel>
              <p className="w-full">8!</p>
            </TabPanel>
          </Switch>
        </TabPanels>
      </Tabs>
    </div>
  );
};
