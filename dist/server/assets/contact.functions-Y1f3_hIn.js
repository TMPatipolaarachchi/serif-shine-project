import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-BTPB9ss1.js";
import { z } from "zod";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const contactFormSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  workEmail: z.string().trim().optional().refine((v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), {
    message: "Enter a valid email address"
  }),
  phoneNumber: z.string().trim().min(1, "Phone number is required"),
  projectDetails: z.string().trim().min(1, "Project details are required")
});
const sendContactMessage_createServerFn_handler = createServerRpc({
  id: "fbd394cc9fa4af3080fc71bce795b650ae4ce5bc0cb7fdb09c73ce183438bcb8",
  name: "sendContactMessage",
  filename: "src/lib/api/contact.functions.ts"
}, (opts) => sendContactMessage.__executeServer(opts));
const sendContactMessage = createServerFn({
  method: "POST"
}).inputValidator(contactFormSchema).handler(sendContactMessage_createServerFn_handler, async ({
  data
}) => {
  const {
    sendContactEmail
  } = await import("./contact.server-BAbtS0c7.js");
  await sendContactEmail(data);
  return {
    ok: true
  };
});
export {
  sendContactMessage_createServerFn_handler
};
