/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type AddApiKeyRequestBody = {
  /**
   * Friendly API key name
   */
  apiKeyName: string;
};

export type AddApiKeyApiKeys = {
  apiKey: string;
  name: string;
};

export type AddApiKeyResponseBody = {
  apiKeys: Array<AddApiKeyApiKeys>;
  createdAt: string;
  email: string;
  id: number;
  name: string;
  orgUuid: string;
  token?: any | null | undefined;
};

/** @internal */
export const AddApiKeyRequestBody$inboundSchema: z.ZodType<
  AddApiKeyRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  api_key_name: z.string(),
}).transform((v) => {
  return remap$(v, {
    "api_key_name": "apiKeyName",
  });
});

/** @internal */
export type AddApiKeyRequestBody$Outbound = {
  api_key_name: string;
};

/** @internal */
export const AddApiKeyRequestBody$outboundSchema: z.ZodType<
  AddApiKeyRequestBody$Outbound,
  z.ZodTypeDef,
  AddApiKeyRequestBody
> = z.object({
  apiKeyName: z.string(),
}).transform((v) => {
  return remap$(v, {
    apiKeyName: "api_key_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddApiKeyRequestBody$ {
  /** @deprecated use `AddApiKeyRequestBody$inboundSchema` instead. */
  export const inboundSchema = AddApiKeyRequestBody$inboundSchema;
  /** @deprecated use `AddApiKeyRequestBody$outboundSchema` instead. */
  export const outboundSchema = AddApiKeyRequestBody$outboundSchema;
  /** @deprecated use `AddApiKeyRequestBody$Outbound` instead. */
  export type Outbound = AddApiKeyRequestBody$Outbound;
}

/** @internal */
export const AddApiKeyApiKeys$inboundSchema: z.ZodType<
  AddApiKeyApiKeys,
  z.ZodTypeDef,
  unknown
> = z.object({
  api_key: z.string(),
  name: z.string(),
}).transform((v) => {
  return remap$(v, {
    "api_key": "apiKey",
  });
});

/** @internal */
export type AddApiKeyApiKeys$Outbound = {
  api_key: string;
  name: string;
};

/** @internal */
export const AddApiKeyApiKeys$outboundSchema: z.ZodType<
  AddApiKeyApiKeys$Outbound,
  z.ZodTypeDef,
  AddApiKeyApiKeys
> = z.object({
  apiKey: z.string(),
  name: z.string(),
}).transform((v) => {
  return remap$(v, {
    apiKey: "api_key",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddApiKeyApiKeys$ {
  /** @deprecated use `AddApiKeyApiKeys$inboundSchema` instead. */
  export const inboundSchema = AddApiKeyApiKeys$inboundSchema;
  /** @deprecated use `AddApiKeyApiKeys$outboundSchema` instead. */
  export const outboundSchema = AddApiKeyApiKeys$outboundSchema;
  /** @deprecated use `AddApiKeyApiKeys$Outbound` instead. */
  export type Outbound = AddApiKeyApiKeys$Outbound;
}

/** @internal */
export const AddApiKeyResponseBody$inboundSchema: z.ZodType<
  AddApiKeyResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  api_keys: z.array(z.lazy(() => AddApiKeyApiKeys$inboundSchema)),
  created_at: z.string(),
  email: z.string(),
  id: z.number().int(),
  name: z.string(),
  org_uuid: z.string(),
  token: z.nullable(z.any()).optional(),
}).transform((v) => {
  return remap$(v, {
    "api_keys": "apiKeys",
    "created_at": "createdAt",
    "org_uuid": "orgUuid",
  });
});

/** @internal */
export type AddApiKeyResponseBody$Outbound = {
  api_keys: Array<AddApiKeyApiKeys$Outbound>;
  created_at: string;
  email: string;
  id: number;
  name: string;
  org_uuid: string;
  token?: any | null | undefined;
};

/** @internal */
export const AddApiKeyResponseBody$outboundSchema: z.ZodType<
  AddApiKeyResponseBody$Outbound,
  z.ZodTypeDef,
  AddApiKeyResponseBody
> = z.object({
  apiKeys: z.array(z.lazy(() => AddApiKeyApiKeys$outboundSchema)),
  createdAt: z.string(),
  email: z.string(),
  id: z.number().int(),
  name: z.string(),
  orgUuid: z.string(),
  token: z.nullable(z.any()).optional(),
}).transform((v) => {
  return remap$(v, {
    apiKeys: "api_keys",
    createdAt: "created_at",
    orgUuid: "org_uuid",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddApiKeyResponseBody$ {
  /** @deprecated use `AddApiKeyResponseBody$inboundSchema` instead. */
  export const inboundSchema = AddApiKeyResponseBody$inboundSchema;
  /** @deprecated use `AddApiKeyResponseBody$outboundSchema` instead. */
  export const outboundSchema = AddApiKeyResponseBody$outboundSchema;
  /** @deprecated use `AddApiKeyResponseBody$Outbound` instead. */
  export type Outbound = AddApiKeyResponseBody$Outbound;
}