/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type PostChatbotGetRequest = {
    chatbotId?: string | undefined;
};

export type PostChatbotGetResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    chatbotResponse?: components.ChatbotResponse | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export const PostChatbotGetRequest$inboundSchema: z.ZodType<
    PostChatbotGetRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        chatbot_id: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            chatbot_id: "chatbotId",
        });
    });

/** @internal */
export type PostChatbotGetRequest$Outbound = {
    chatbot_id?: string | undefined;
};

/** @internal */
export const PostChatbotGetRequest$outboundSchema: z.ZodType<
    PostChatbotGetRequest$Outbound,
    z.ZodTypeDef,
    PostChatbotGetRequest
> = z
    .object({
        chatbotId: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            chatbotId: "chatbot_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostChatbotGetRequest$ {
    /** @deprecated use `PostChatbotGetRequest$inboundSchema` instead. */
    export const inboundSchema = PostChatbotGetRequest$inboundSchema;
    /** @deprecated use `PostChatbotGetRequest$outboundSchema` instead. */
    export const outboundSchema = PostChatbotGetRequest$outboundSchema;
    /** @deprecated use `PostChatbotGetRequest$Outbound` instead. */
    export type Outbound = PostChatbotGetRequest$Outbound;
}

/** @internal */
export const PostChatbotGetResponse$inboundSchema: z.ZodType<
    PostChatbotGetResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        ChatbotResponse: components.ChatbotResponse$inboundSchema.optional(),
        Headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            ChatbotResponse: "chatbotResponse",
            Headers: "headers",
        });
    });

/** @internal */
export type PostChatbotGetResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ChatbotResponse?: components.ChatbotResponse$Outbound | undefined;
    Headers: { [k: string]: Array<string> };
};

/** @internal */
export const PostChatbotGetResponse$outboundSchema: z.ZodType<
    PostChatbotGetResponse$Outbound,
    z.ZodTypeDef,
    PostChatbotGetResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        chatbotResponse: components.ChatbotResponse$outboundSchema.optional(),
        headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            chatbotResponse: "ChatbotResponse",
            headers: "Headers",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostChatbotGetResponse$ {
    /** @deprecated use `PostChatbotGetResponse$inboundSchema` instead. */
    export const inboundSchema = PostChatbotGetResponse$inboundSchema;
    /** @deprecated use `PostChatbotGetResponse$outboundSchema` instead. */
    export const outboundSchema = PostChatbotGetResponse$outboundSchema;
    /** @deprecated use `PostChatbotGetResponse$Outbound` instead. */
    export type Outbound = PostChatbotGetResponse$Outbound;
}
