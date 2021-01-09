import React, { useRef, useCallback } from "react";
import { useMutation } from "react-query";
import { deleteProduct } from "@oss/services/endpoints/products";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { DefaultPopover } from "@oss/components/modals/defaultPopover";
import { useClickAway } from "react-use";

export const DeleteButton = ({ onClick, id }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const elId = open ? "simple-popover" : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  const { mutate, isLoading } = useMutation(deleteProduct, {
    onSuccess: async values => {
      onClick?.();
    },
    // onError: async (error, variables, context) => {
    //   toast({
    //     position: "top-right",
    //     title: "An error occurred.",
    //     //@ts-ignore
    //     description: error?.response?.data?.message,
    //     status: "error",
    //     duration: 9000,
    //     isClosable: true,
    //   });
    // },
  });

  const ref = useRef(null);
  useClickAway(
    ref,
    () => {
      handleClose();
    },
    ["mouseup"],
  );

  return (
    <div>
      <Button
        ref={ref}
        aria-describedby={elId}
        onClick={event => {
          handleClick(event);
        }}
      >
        {isLoading ? <CircularProgress size="1.5rem" color="secondary" /> : <DeleteForeverIcon color="secondary" />}
      </Button>

      <DefaultPopover
        onConfirm={() => {
          mutate({ id });
        }}
        onReject={() => handleClose()}
        open={Boolean(anchorEl)}
        anchorElement={anchorEl}
        text={"Are you shure?"}
      />
    </div>
  );
};
