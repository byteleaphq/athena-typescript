/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { collectExtraKeys as collectExtraKeys$ } from "../../lib/schemas.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type UpdateChatRequestBody = {
    /**
     * between 1 and 0
     */
    temperature?: number | null | undefined;
    /**
     * The updated name of the chat
     */
    name?: string | null | undefined;
    systemMessage?: string | null | undefined;
    additionalProperties: { [k: string]: any };
};

export type UpdateChatRequest = {
    chatId: string;
    requestBody?: UpdateChatRequestBody | undefined;
};

export type UpdateChatResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    chats?: Array<components.Chat> | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export const UpdateChatRequestBody$inboundSchema: z.ZodType<
    UpdateChatRequestBody,
    z.ZodTypeDef,
    unknown
> = collectExtraKeys$(
    z
        .object({
            temperature: z.nullable(z.number()).optional(),
            name: z.nullable(z.string()).optional(),
            system_message: z.nullable(z.string()).optional(),
        })
        .catchall(z.any()),
    "additionalProperties"
).transform((v) => {
    return remap$(v, {
        system_message: "systemMessage",
    });
});

/** @internal */
export type UpdateChatRequestBody$Outbound = {
    temperature?: number | null | undefined;
    name?: string | null | undefined;
    system_message?: string | null | undefined;
    [additionalProperties: string]: unknown;
};

/** @internal */
export const UpdateChatRequestBody$outboundSchema: z.ZodType<
    UpdateChatRequestBody$Outbound,
    z.ZodTypeDef,
    UpdateChatRequestBody
> = z
    .object({
        temperature: z.nullable(z.number()).optional(),
        name: z.nullable(z.string()).optional(),
        systemMessage: z.nullable(z.string()).optional(),
        additionalProperties: z.record(z.any()),
    })
    .transform((v) => {
        return {
            ...v.additionalProperties,
            ...remap$(v, {
                systemMessage: "system_message",
                additionalProperties: null,
            }),
        };
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateChatRequestBody$ {
    /** @deprecated use `UpdateChatRequestBody$inboundSchema` instead. */
    export const inboundSchema = UpdateChatRequestBody$inboundSchema;
    /** @deprecated use `UpdateChatRequestBody$outboundSchema` instead. */
    export const outboundSchema = UpdateChatRequestBody$outboundSchema;
    /** @deprecated use `UpdateChatRequestBody$Outbound` instead. */
    export type Outbound = UpdateChatRequestBody$Outbound;
}

/** @internal */
export const UpdateChatRequest$inboundSchema: z.ZodType<UpdateChatRequest, z.ZodTypeDef, unknown> =
    z
        .object({
            chat_id: z.string(),
            RequestBody: z.lazy(() => UpdateChatRequestBody$inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                chat_id: "chatId",
                RequestBody: "requestBody",
            });
        });

/** @internal */
export type UpdateChatRequest$Outbound = {
    chat_id: string;
    RequestBody?: UpdateChatRequestBody$Outbound | undefined;
};

/** @internal */
export const UpdateChatRequest$outboundSchema: z.ZodType<
    UpdateChatRequest$Outbound,
    z.ZodTypeDef,
    UpdateChatRequest
> = z
    .object({
        chatId: z.string(),
        requestBody: z.lazy(() => UpdateChatRequestBody$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            chatId: "chat_id",
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateChatRequest$ {
    /** @deprecated use `UpdateChatRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateChatRequest$inboundSchema;
    /** @deprecated use `UpdateChatRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateChatRequest$outboundSchema;
    /** @deprecated use `UpdateChatRequest$Outbound` instead. */
    export type Outbound = UpdateChatRequest$Outbound;
}

/** @internal */
export const UpdateChatResponse$inboundSchema: z.ZodType<
    UpdateChatResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        Chats: z.array(components.Chat$inboundSchema).optional(),
        Headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            Chats: "chats",
            Headers: "headers",
        });
    });

/** @internal */
export type UpdateChatResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Chats?: Array<components.Chat$Outbound> | undefined;
    Headers: { [k: string]: Array<string> };
};

/** @internal */
export const UpdateChatResponse$outboundSchema: z.ZodType<
    UpdateChatResponse$Outbound,
    z.ZodTypeDef,
    UpdateChatResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        chats: z.array(components.Chat$outboundSchema).optional(),
        headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            chats: "Chats",
            headers: "Headers",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateChatResponse$ {
    /** @deprecated use `UpdateChatResponse$inboundSchema` instead. */
    export const inboundSchema = UpdateChatResponse$inboundSchema;
    /** @deprecated use `UpdateChatResponse$outboundSchema` instead. */
    export const outboundSchema = UpdateChatResponse$outboundSchema;
    /** @deprecated use `UpdateChatResponse$Outbound` instead. */
    export type Outbound = UpdateChatResponse$Outbound;
}
