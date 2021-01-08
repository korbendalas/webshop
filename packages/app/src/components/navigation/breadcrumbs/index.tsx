import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { MAX_WIDTH } from "@app/helpers/globals";
import classnames from "classnames";

export const Breadcrumbs = ({ crumbs }) => {
  // Don't render a single breadcrumb.
  if (crumbs.length <= 1) {
    return null;
  }

  return (
    <div>
      <Breadcrumb
        spacing="8px"
        className={classnames("flex mx-auto py-6 ", MAX_WIDTH)}
        separator={<ChevronRightIcon color="gray.500" />}
      >
        {crumbs.map(({ name, path }, key) =>
          key + 1 === crumbs.length ? (
            <BreadcrumbItem isCurrentPage key={key}>
              <BreadcrumbLink href="#">{name}</BreadcrumbLink>
            </BreadcrumbItem>
          ) : (
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to={path}>
                {name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ),
        )}
      </Breadcrumb>
    </div>
  );
};
