import React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ProductCard } from "@app/components/product/productCard";
import { ProductRatings } from "./productRatings";
import { ProductSpecifications } from "@app/components/product/bottomTabs/productSpecifications";

const TabWrapper = ({ children }) => {
  return <div className="border-2 border-gray-100 p-7">{children}</div>;
};

export const BottomTabs = ({ data }) => {
  const tabStyle = { borderColor: "brand.yellow", fontWeight: 700 };
  return (
    <div className="flex justify-center mt-10">
      <div className="w-full">
        <Tabs>
          <TabList className="flex justify-center">
            <Tab width="140px" p={[2, 3]} _selected={tabStyle}>
              Accesories
            </Tab>
            <Tab width="140px" _selected={tabStyle}>
              Description
            </Tab>
            <Tab width="140px" _selected={tabStyle}>
              Specifications
            </Tab>
            <Tab width="140px" _selected={tabStyle}>
              Ratings
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TabWrapper>
                <div className="flex">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </TabWrapper>
            </TabPanel>
            <TabPanel>
              <TabWrapper>
                <div className="flex">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </TabWrapper>
            </TabPanel>
            <TabPanel>
              <TabWrapper>
                <ProductSpecifications />
              </TabWrapper>
            </TabPanel>
            <TabPanel>
              <TabWrapper>
                <ProductRatings />
              </TabWrapper>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
