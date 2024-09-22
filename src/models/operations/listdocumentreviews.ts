/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ListDocumentReviewsRequest = {
  /**
   * Optional brain ID to filter document reviews
   */
  brainId?: string | undefined;
};

/** @internal */
export const ListDocumentReviewsRequest$inboundSchema: z.ZodType<
  ListDocumentReviewsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  brain_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "brain_id": "brainId",
  });
});

/** @internal */
export type ListDocumentReviewsRequest$Outbound = {
  brain_id?: string | undefined;
};

/** @internal */
export const ListDocumentReviewsRequest$outboundSchema: z.ZodType<
  ListDocumentReviewsRequest$Outbound,
  z.ZodTypeDef,
  ListDocumentReviewsRequest
> = z.object({
  brainId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    brainId: "brain_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDocumentReviewsRequest$ {
  /** @deprecated use `ListDocumentReviewsRequest$inboundSchema` instead. */
  export const inboundSchema = ListDocumentReviewsRequest$inboundSchema;
  /** @deprecated use `ListDocumentReviewsRequest$outboundSchema` instead. */
  export const outboundSchema = ListDocumentReviewsRequest$outboundSchema;
  /** @deprecated use `ListDocumentReviewsRequest$Outbound` instead. */
  export type Outbound = ListDocumentReviewsRequest$Outbound;
}