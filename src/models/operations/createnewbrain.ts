/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateNewBrainRequestBody = {
    /**
     * Name of the brain
     */
    name: string;
};

export type CreateNewBrainResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    brain?: components.Brain | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export const CreateNewBrainRequestBody$inboundSchema: z.ZodType<
    CreateNewBrainRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
});

/** @internal */
export type CreateNewBrainRequestBody$Outbound = {
    name: string;
};

/** @internal */
export const CreateNewBrainRequestBody$outboundSchema: z.ZodType<
    CreateNewBrainRequestBody$Outbound,
    z.ZodTypeDef,
    CreateNewBrainRequestBody
> = z.object({
    name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateNewBrainRequestBody$ {
    /** @deprecated use `CreateNewBrainRequestBody$inboundSchema` instead. */
    export const inboundSchema = CreateNewBrainRequestBody$inboundSchema;
    /** @deprecated use `CreateNewBrainRequestBody$outboundSchema` instead. */
    export const outboundSchema = CreateNewBrainRequestBody$outboundSchema;
    /** @deprecated use `CreateNewBrainRequestBody$Outbound` instead. */
    export type Outbound = CreateNewBrainRequestBody$Outbound;
}

/** @internal */
export const CreateNewBrainResponse$inboundSchema: z.ZodType<
    CreateNewBrainResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        Brain: components.Brain$inboundSchema.optional(),
        Headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            Brain: "brain",
            Headers: "headers",
        });
    });

/** @internal */
export type CreateNewBrainResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Brain?: components.Brain$Outbound | undefined;
    Headers: { [k: string]: Array<string> };
};

/** @internal */
export const CreateNewBrainResponse$outboundSchema: z.ZodType<
    CreateNewBrainResponse$Outbound,
    z.ZodTypeDef,
    CreateNewBrainResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        brain: components.Brain$outboundSchema.optional(),
        headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            brain: "Brain",
            headers: "Headers",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateNewBrainResponse$ {
    /** @deprecated use `CreateNewBrainResponse$inboundSchema` instead. */
    export const inboundSchema = CreateNewBrainResponse$inboundSchema;
    /** @deprecated use `CreateNewBrainResponse$outboundSchema` instead. */
    export const outboundSchema = CreateNewBrainResponse$outboundSchema;
    /** @deprecated use `CreateNewBrainResponse$Outbound` instead. */
    export type Outbound = CreateNewBrainResponse$Outbound;
}
