/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetBrainRequest = {
  brainId: string;
};

/** @internal */
export const GetBrainRequest$inboundSchema: z.ZodType<
  GetBrainRequest,
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
export type GetBrainRequest$Outbound = {
  brain_id: string;
};

/** @internal */
export const GetBrainRequest$outboundSchema: z.ZodType<
  GetBrainRequest$Outbound,
  z.ZodTypeDef,
  GetBrainRequest
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
export namespace GetBrainRequest$ {
  /** @deprecated use `GetBrainRequest$inboundSchema` instead. */
  export const inboundSchema = GetBrainRequest$inboundSchema;
  /** @deprecated use `GetBrainRequest$outboundSchema` instead. */
  export const outboundSchema = GetBrainRequest$outboundSchema;
  /** @deprecated use `GetBrainRequest$Outbound` instead. */
  export type Outbound = GetBrainRequest$Outbound;
}
