/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type GetChatbotListRequest = {
    /**
     * The ID of the brain to filter chatbots
     */
    brainId?: string | undefined;
};

export type GetChatbotListResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    chatbotResponses?: Array<components.ChatbotResponse> | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export namespace GetChatbotListRequest$ {
    export const inboundSchema: z.ZodType<GetChatbotListRequest, z.ZodTypeDef, unknown> = z
        .object({
            brain_id: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                brain_id: "brainId",
            });
        });

    export type Outbound = {
        brain_id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChatbotListRequest> = z
        .object({
            brainId: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                brainId: "brain_id",
            });
        });
}

/** @internal */
export namespace GetChatbotListResponse$ {
    export const inboundSchema: z.ZodType<GetChatbotListResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            ChatbotResponses: z.array(components.ChatbotResponse$.inboundSchema).optional(),
            Headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                ChatbotResponses: "chatbotResponses",
                Headers: "headers",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        ChatbotResponses?: Array<components.ChatbotResponse$.Outbound> | undefined;
        Headers: { [k: string]: Array<string> };
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChatbotListResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            chatbotResponses: z.array(components.ChatbotResponse$.outboundSchema).optional(),
            headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                chatbotResponses: "ChatbotResponses",
                headers: "Headers",
            });
        });
}
