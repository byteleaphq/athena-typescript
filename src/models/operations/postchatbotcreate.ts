/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type PostChatbotCreateRequestBody = {
  /**
   * The name of the chatbot
   */
  name: string;
  /**
   * The ID of the brain associated with the chatbot
   */
  brainId: string;
  urls: Array<string>;
};

/** @internal */
export const PostChatbotCreateRequestBody$inboundSchema: z.ZodType<
  PostChatbotCreateRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  brain_id: z.string(),
  urls: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "brain_id": "brainId",
  });
});

/** @internal */
export type PostChatbotCreateRequestBody$Outbound = {
  name: string;
  brain_id: string;
  urls: Array<string>;
};

/** @internal */
export const PostChatbotCreateRequestBody$outboundSchema: z.ZodType<
  PostChatbotCreateRequestBody$Outbound,
  z.ZodTypeDef,
  PostChatbotCreateRequestBody
> = z.object({
  name: z.string(),
  brainId: z.string(),
  urls: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    brainId: "brain_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostChatbotCreateRequestBody$ {
  /** @deprecated use `PostChatbotCreateRequestBody$inboundSchema` instead. */
  export const inboundSchema = PostChatbotCreateRequestBody$inboundSchema;
  /** @deprecated use `PostChatbotCreateRequestBody$outboundSchema` instead. */
  export const outboundSchema = PostChatbotCreateRequestBody$outboundSchema;
  /** @deprecated use `PostChatbotCreateRequestBody$Outbound` instead. */
  export type Outbound = PostChatbotCreateRequestBody$Outbound;
}
