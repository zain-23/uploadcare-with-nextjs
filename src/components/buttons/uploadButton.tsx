"use client";
import * as LR from "@uploadcare/blocks";
import { useEffect, useRef } from "react";

LR.registerBlocks(LR);
const UploadButton = () => {
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null);

  useEffect(() => {
    const ctxProvider = ctxProviderRef.current;
    if (!ctxProvider) return;
    const handleUpload = (e: CustomEvent<LR.OutputFileEntry[]>) => {
      console.log(e);
    };
    ctxProvider.addEventListener("change", handleUpload);
  }, []);

  return (
    <div>
      <lr-config ctx-name="my-uploader" pubkey="8a16002554db21feda0e" />
      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.33.2/web/lr-file-uploader-regular.min.css`}
      />
      <lr-upload-ctx-provider ref={ctxProviderRef} ctx-name="my-uploader" />
    </div>
  );
};

export default UploadButton;
