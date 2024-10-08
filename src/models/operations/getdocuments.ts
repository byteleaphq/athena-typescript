/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetDocumentsRequest = {
  brainId: string;
};

/** @internal */
export const GetDocumentsRequest$inboundSchema: z.ZodType<
  GetDocumentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  brain_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "brain_id": "brainId",
  });
});

/** @internal */
export type GetDocumentsRequest$Outbound = {
  brain_id: string;
};

/** @internal */
export const GetDocumentsRequest$outboundSchema: z.ZodType<
  GetDocumentsRequest$Outbound,
  z.ZodTypeDef,
  GetDocumentsRequest
> = z.object({
  brainId: z.string(),
}).transform((v) => {
  return remap$(v, {
    brainId: "brain_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDocumentsRequest$ {
  /** @deprecated use `GetDocumentsRequest$inboundSchema` instead. */
  export const inboundSchema = GetDocumentsRequest$inboundSchema;
  /** @deprecated use `GetDocumentsRequest$outboundSchema` instead. */
  export const outboundSchema = GetDocumentsRequest$outboundSchema;
  /** @deprecated use `GetDocumentsRequest$Outbound` instead. */
  export type Outbound = GetDocumentsRequest$Outbound;
}
