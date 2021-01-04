import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { MAX_WIDTH } from "../../../helpers/globals";
import classnames from "classnames";
import { ProductCard } from "../homepage/productCard";
import { OnSale } from "@app/components/pages/homepage/onSale";

export const PromoTabs = () => {
  const tabStyle = { borderColor: "brand.yellow", fontWeight: 700 };
  return (
    <div className="flex justify-center mt-10">
      <div className={classnames(MAX_WIDTH)}>
        <Tabs>
          <TabList>
            <Tab width="140px" p={[2, 3]} _selected={tabStyle}>
              Featured
            </Tab>
            <Tab width="140px" _selected={tabStyle}>
              On Sale
            </Tab>
            <Tab width="140px" _selected={tabStyle}>
              Top Rated
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <div className="flex">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex">
                <OnSale />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
