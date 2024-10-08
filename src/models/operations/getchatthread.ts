/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetChatThreadRequest = {
  chatId: string;
};

/** @internal */
export const GetChatThreadRequest$inboundSchema: z.ZodType<
  GetChatThreadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  chat_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "chat_id": "chatId",
  });
});

/** @internal */
export type GetChatThreadRequest$Outbound = {
  chat_id: string;
};

/** @internal */
export const GetChatThreadRequest$outboundSchema: z.ZodType<
  GetChatThreadRequest$Outbound,
  z.ZodTypeDef,
  GetChatThreadRequest
> = z.object({
  chatId: z.string(),
}).transform((v) => {
  return remap$(v, {
    chatId: "chat_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetChatThreadRequest$ {
  /** @deprecated use `GetChatThreadRequest$inboundSchema` instead. */
  export const inboundSchema = GetChatThreadRequest$inboundSchema;
  /** @deprecated use `GetChatThreadRequest$outboundSchema` instead. */
  export const outboundSchema = GetChatThreadRequest$outboundSchema;
  /** @deprecated use `GetChatThreadRequest$Outbound` instead. */
  export type Outbound = GetChatThreadRequest$Outbound;
}
