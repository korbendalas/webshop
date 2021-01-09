import React, { useMemo, useState } from "react";
// Uppy dependencies
import Uppy from "@uppy/core";
import ImageEditor from "@uppy/image-editor";
import XHRUpload from "@uppy/xhr-upload";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/image-editor/dist/style.css";

import { API_URL } from "@oss/services/http";

export const useImageUpload = ({ id = null, token = null, type = null }) => {
  const [url, setUrl] = useState(null);

  const uppy = useMemo(() => {
    // @ts-ignore
    return new Uppy({
      debug: true,
      autoProceed: false,
      restrictions: {
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
        allowedFileTypes: ["image/*"],
      },
    })
      .use(XHRUpload, {
        // endpoint: "https://xhr-server.herokuapp.com/upload",
        endpoint: API_URL + "/api/oss/upload",
        formData: true,
        fieldName: "image",
      })
      .use(ImageEditor, {
        quality: 0.8,
        cropperOptions: {
          viewMode: 1,
          background: false,
          autoCropArea: 1,
          responsive: true,
        },
      });
  }, [id, type, token]);

  uppy.on("file-editor:start", file => {
    console.log(file);
  });

  uppy.on("complete", result => {
    const url = result.successful[0].uploadURL;
    console.log("url", url);
    console.info("Upload complete!");
    setUrl(url);
  });

  return { uppy, url };
};
