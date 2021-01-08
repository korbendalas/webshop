import React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ProductCard } from "@app/components/homepage/productCard";

export const BottomTabs = ({ data }) => {
  const tabStyle = { borderColor: "brand.yellow", fontWeight: 700 };
  return (
    <div className="flex justify-center mt-10">
      <div>
        <Tabs>
          <TabList className="flex justify-center">
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
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex">
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
