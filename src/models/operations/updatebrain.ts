/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type UpdateBrainRequestBody = {
    /**
     * Updated name of the brain
     */
    name: string;
};

export type UpdateBrainRequest = {
    brainId: string;
    requestBody?: UpdateBrainRequestBody | undefined;
};

export type UpdateBrainResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    brain?: components.Brain | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export namespace UpdateBrainRequestBody$ {
    export const inboundSchema: z.ZodType<UpdateBrainRequestBody, z.ZodTypeDef, unknown> = z.object(
        {
            name: z.string(),
        }
    );

    export type Outbound = {
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateBrainRequestBody> =
        z.object({
            name: z.string(),
        });
}

/** @internal */
export namespace UpdateBrainRequest$ {
    export const inboundSchema: z.ZodType<UpdateBrainRequest, z.ZodTypeDef, unknown> = z
        .object({
            brain_id: z.string(),
            RequestBody: z.lazy(() => UpdateBrainRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                brain_id: "brainId",
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        brain_id: string;
        RequestBody?: UpdateBrainRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateBrainRequest> = z
        .object({
            brainId: z.string(),
            requestBody: z.lazy(() => UpdateBrainRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                brainId: "brain_id",
                requestBody: "RequestBody",
            });
        });
}

/** @internal */
export namespace UpdateBrainResponse$ {
    export const inboundSchema: z.ZodType<UpdateBrainResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Brain: components.Brain$.inboundSchema.optional(),
            Headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                Brain: "brain",
                Headers: "headers",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Brain?: components.Brain$.Outbound | undefined;
        Headers: { [k: string]: Array<string> };
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateBrainResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            brain: components.Brain$.outboundSchema.optional(),
            headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                brain: "Brain",
                headers: "Headers",
            });
        });
}
