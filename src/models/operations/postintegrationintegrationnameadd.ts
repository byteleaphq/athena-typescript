/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type PostIntegrationIntegrationNameAddRequestBody = {
  /**
   * ID of the brain to add pages to
   */
  brainId?: string | undefined;
  /**
   * Array of page IDs to add to the brain
   */
  pageIds?: Array<string> | undefined;
};

export type PostIntegrationIntegrationNameAddRequest = {
  /**
   * Currently supported integrations are "notion" and "confluence". More integrations will be added in the future.
   */
  integrationName: string;
  requestBody?: PostIntegrationIntegrationNameAddRequestBody | undefined;
};

export type PostIntegrationIntegrationNameAddResponseBody = {
  /**
   * Message indicating the pages are being added to the brain
   */
  message?: string | undefined;
};

/** @internal */
export const PostIntegrationIntegrationNameAddRequestBody$inboundSchema:
  z.ZodType<
    PostIntegrationIntegrationNameAddRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    brain_id: z.string().optional(),
    page_ids: z.array(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "brain_id": "brainId",
      "page_ids": "pageIds",
    });
  });

/** @internal */
export type PostIntegrationIntegrationNameAddRequestBody$Outbound = {
  brain_id?: string | undefined;
  page_ids?: Array<string> | undefined;
};

/** @internal */
export const PostIntegrationIntegrationNameAddRequestBody$outboundSchema:
  z.ZodType<
    PostIntegrationIntegrationNameAddRequestBody$Outbound,
    z.ZodTypeDef,
    PostIntegrationIntegrationNameAddRequestBody
  > = z.object({
    brainId: z.string().optional(),
    pageIds: z.array(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      brainId: "brain_id",
      pageIds: "page_ids",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostIntegrationIntegrationNameAddRequestBody$ {
  /** @deprecated use `PostIntegrationIntegrationNameAddRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    PostIntegrationIntegrationNameAddRequestBody$inboundSchema;
  /** @deprecated use `PostIntegrationIntegrationNameAddRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostIntegrationIntegrationNameAddRequestBody$outboundSchema;
  /** @deprecated use `PostIntegrationIntegrationNameAddRequestBody$Outbound` instead. */
  export type Outbound = PostIntegrationIntegrationNameAddRequestBody$Outbound;
}

/** @internal */
export const PostIntegrationIntegrationNameAddRequest$inboundSchema: z.ZodType<
  PostIntegrationIntegrationNameAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  integration_name: z.string(),
  RequestBody: z.lazy(() =>
    PostIntegrationIntegrationNameAddRequestBody$inboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "integration_name": "integrationName",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type PostIntegrationIntegrationNameAddRequest$Outbound = {
  integration_name: string;
  RequestBody?:
    | PostIntegrationIntegrationNameAddRequestBody$Outbound
    | undefined;
};

/** @internal */
export const PostIntegrationIntegrationNameAddRequest$outboundSchema: z.ZodType<
  PostIntegrationIntegrationNameAddRequest$Outbound,
  z.ZodTypeDef,
  PostIntegrationIntegrationNameAddRequest
> = z.object({
  integrationName: z.string(),
  requestBody: z.lazy(() =>
    PostIntegrationIntegrationNameAddRequestBody$outboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    integrationName: "integration_name",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostIntegrationIntegrationNameAddRequest$ {
  /** @deprecated use `PostIntegrationIntegrationNameAddRequest$inboundSchema` instead. */
  export const inboundSchema =
    PostIntegrationIntegrationNameAddRequest$inboundSchema;
  /** @deprecated use `PostIntegrationIntegrationNameAddRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostIntegrationIntegrationNameAddRequest$outboundSchema;
  /** @deprecated use `PostIntegrationIntegrationNameAddRequest$Outbound` instead. */
  export type Outbound = PostIntegrationIntegrationNameAddRequest$Outbound;
}

/** @internal */
export const PostIntegrationIntegrationNameAddResponseBody$inboundSchema:
  z.ZodType<
    PostIntegrationIntegrationNameAddResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string().optional(),
  });

/** @internal */
export type PostIntegrationIntegrationNameAddResponseBody$Outbound = {
  message?: string | undefined;
};

/** @internal */
export const PostIntegrationIntegrationNameAddResponseBody$outboundSchema:
  z.ZodType<
    PostIntegrationIntegrationNameAddResponseBody$Outbound,
    z.ZodTypeDef,
    PostIntegrationIntegrationNameAddResponseBody
  > = z.object({
    message: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostIntegrationIntegrationNameAddResponseBody$ {
  /** @deprecated use `PostIntegrationIntegrationNameAddResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    PostIntegrationIntegrationNameAddResponseBody$inboundSchema;
  /** @deprecated use `PostIntegrationIntegrationNameAddResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PostIntegrationIntegrationNameAddResponseBody$outboundSchema;
  /** @deprecated use `PostIntegrationIntegrationNameAddResponseBody$Outbound` instead. */
  export type Outbound = PostIntegrationIntegrationNameAddResponseBody$Outbound;
}
