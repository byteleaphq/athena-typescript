/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

/**
 * Internal Server Error
 */
export type CreateUrlDocumentResponseBodyData = {
    httpMeta: components.HTTPMetadata;
};

/**
 * Internal Server Error
 */
export class CreateUrlDocumentResponseBody extends Error {
    httpMeta: components.HTTPMetadata;

    /** The original data that was passed to this error instance. */
    data$: CreateUrlDocumentResponseBodyData;

    constructor(err: CreateUrlDocumentResponseBodyData) {
        super("");
        this.data$ = err;

        this.httpMeta = err.httpMeta;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "CreateUrlDocumentResponseBody";
    }
}

/** @internal */
export namespace CreateUrlDocumentResponseBody$ {
    export const inboundSchema: z.ZodType<CreateUrlDocumentResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
        })
        .transform((v) => {
            const remapped = remap$(v, {
                HttpMeta: "httpMeta",
            });

            return new CreateUrlDocumentResponseBody(remapped);
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateUrlDocumentResponseBody> =
        z
            .instanceof(CreateUrlDocumentResponseBody)
            .transform((v) => v.data$)
            .pipe(
                z
                    .object({
                        httpMeta: components.HTTPMetadata$.outboundSchema,
                    })
                    .transform((v) => {
                        return remap$(v, {
                            httpMeta: "HttpMeta",
                        });
                    })
            );
}
