/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type PostChatbotGetRequest = {
  chatbotId?: string | undefined;
};

/** @internal */
export const PostChatbotGetRequest$inboundSchema: z.ZodType<
  PostChatbotGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  chatbot_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "chatbot_id": "chatbotId",
  });
});

/** @internal */
export type PostChatbotGetRequest$Outbound = {
  chatbot_id?: string | undefined;
};

/** @internal */
export const PostChatbotGetRequest$outboundSchema: z.ZodType<
  PostChatbotGetRequest$Outbound,
  z.ZodTypeDef,
  PostChatbotGetRequest
> = z.object({
  chatbotId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    chatbotId: "chatbot_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostChatbotGetRequest$ {
  /** @deprecated use `PostChatbotGetRequest$inboundSchema` instead. */
  export const inboundSchema = PostChatbotGetRequest$inboundSchema;
  /** @deprecated use `PostChatbotGetRequest$outboundSchema` instead. */
  export const outboundSchema = PostChatbotGetRequest$outboundSchema;
  /** @deprecated use `PostChatbotGetRequest$Outbound` instead. */
  export type Outbound = PostChatbotGetRequest$Outbound;
}
