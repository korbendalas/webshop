import React, { useState, useMemo } from "react";
// Uppy dependencies
import Uppy from "@uppy/core";
import ImageEditor from "@uppy/image-editor";
import AwsS3 from "@uppy/aws-s3";
import XHRUpload from "@uppy/xhr-upload";
import Dashboard from "@uppy/react/lib/Dashboard";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

import { API_URL, http } from "@oss/services/http";

export const ImageUpload = ({
  id = null,
  image = null,
  token = null,
  type = null,
  title = null,
  description = null,
  width = null,
  height = null,
}) => {
  const [message, setMessage] = useState(null);

  const uppy = useMemo(() => {
    // @ts-ignore
    return new Uppy({
      debug: true,
      autoProceed: true,
      restrictions: {
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
        allowedFileTypes: ["image/*"],
      },
    })
      .use(ImageEditor, {
        quality: 0.8,
        cropperOptions: {
          viewMode: 1,
          background: false,
          autoCropArea: 1,
          responsive: true,
        },
      })
      .use(XHRUpload, {
        getUploadParameters(file) {
          return http({
            url: `${API_URL}/upload`,
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              // Authorization: `Token ${token}`,
            },
            // params: {
            //   "object-name": `${type}/${id}/${getHash(9)}-${file.name}`,
            //   "content-type": file.type,
            // },
          })
            .then(response => {
              console.log("response: ", response);
              return {
                url: response.config.url,
                method: response.config.method,
                // fields: response.config.fields,
                headers: response.config.headers,
              };
            })
            .catch(error => {
              console.log(error);
              setMessage("An Error has occurred while uploading");
            });
        },
      });
  }, [id, type, token]);

  uppy.on("file-editor:start", file => {
    console.log(file);
  });

  uppy.on("complete", result => {
    const url = result.successful[0].uploadURL;
    console.log(url);
    console.info("Upload complete!");
  });

  return (
    <div //className={styles.ImageUploaderUppy}
    >
      <Dashboard
        width={width}
        height={height}
        replaceTargetContent={true}
        showProgressDetails={true}
        uppy={uppy}
        inline={true}
        plugins={["ImageEditor"]}
        note={description}
        locale={{ strings: { dropPasteImport: `${title} %{browse}` } }}
        metaFields={[{ id: "name", name: "Name", placeholder: "file name" }]}
      />
      {message && <div>{message}</div>}
    </div>
  );
};
