/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

/**
 * Not Found
 */
export type GetBrainByIdResponseBodyData = {
    httpMeta: components.HTTPMetadata;
};

/**
 * Not Found
 */
export class GetBrainByIdResponseBody extends Error {
    httpMeta: components.HTTPMetadata;

    /** The original data that was passed to this error instance. */
    data$: GetBrainByIdResponseBodyData;

    constructor(err: GetBrainByIdResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.httpMeta = err.httpMeta;

        this.name = "GetBrainByIdResponseBody";
    }
}

/** @internal */
export const GetBrainByIdResponseBody$inboundSchema: z.ZodType<
    GetBrainByIdResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
    })
    .transform((v) => {
        const remapped = remap$(v, {
            HttpMeta: "httpMeta",
        });

        return new GetBrainByIdResponseBody(remapped);
    });

/** @internal */
export type GetBrainByIdResponseBody$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const GetBrainByIdResponseBody$outboundSchema: z.ZodType<
    GetBrainByIdResponseBody$Outbound,
    z.ZodTypeDef,
    GetBrainByIdResponseBody
> = z
    .instanceof(GetBrainByIdResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                httpMeta: components.HTTPMetadata$outboundSchema,
            })
            .transform((v) => {
                return remap$(v, {
                    httpMeta: "HttpMeta",
                });
            })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBrainByIdResponseBody$ {
    /** @deprecated use `GetBrainByIdResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetBrainByIdResponseBody$inboundSchema;
    /** @deprecated use `GetBrainByIdResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetBrainByIdResponseBody$outboundSchema;
    /** @deprecated use `GetBrainByIdResponseBody$Outbound` instead. */
    export type Outbound = GetBrainByIdResponseBody$Outbound;
}
