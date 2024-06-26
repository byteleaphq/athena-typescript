/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { collectExtraKeys as collectExtraKeys$ } from "../../lib/schemas.js";
import * as z from "zod";

export type ModelResponse = {
    content?: string | undefined;
    timestamp?: number | undefined;
};

export type UserInput = {
    content?: string | undefined;
    timestamp?: number | undefined;
};

export type RecentChatHistory = {
    id?: string | undefined;
    modelResponse?: ModelResponse | undefined;
    userInput?: UserInput | undefined;
};

/**
 * The default options for the chat
 */
export type DefaultOptions = {
    autoQueryGuidance?: string | null | undefined;
    knowledgeBaseIds?: Array<string> | null | undefined;
    model?: string | null | undefined;
    additionalProperties: { [k: string]: any };
};

export type Chat = {
    /**
     * The ID of the brain associated with the chat
     */
    brainId?: string | null | undefined;
    /**
     * The unique identifier of the chat
     */
    chatId?: string | undefined;
    /**
     * The timestamp when the chat was created
     */
    createdAt?: string | undefined;
    /**
     * The timestamp when the chat was last updated
     */
    lastUpdated?: string | null | undefined;
    /**
     * The name of the model used for the chat
     */
    model?: string | undefined;
    /**
     * The metadata related to the chat interactions
     */
    recentChatHistory?: Array<RecentChatHistory> | undefined;
    /**
     * The system message or prompt for the chat
     */
    systemMessage?: string | null | undefined;
    /**
     * The temperature value used for the model
     */
    temperature?: number | null | undefined;
    /**
     * The title or name of the chat
     */
    title?: string | undefined;
    /**
     * The ID of the user associated with the chat
     */
    userId?: string | undefined;
    /**
     * The default options for the chat
     */
    defaultOptions?: DefaultOptions | null | undefined;
};

/** @internal */
export namespace ModelResponse$ {
    export const inboundSchema: z.ZodType<ModelResponse, z.ZodTypeDef, unknown> = z.object({
        content: z.string().optional(),
        timestamp: z.number().int().optional(),
    });

    export type Outbound = {
        content?: string | undefined;
        timestamp?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ModelResponse> = z.object({
        content: z.string().optional(),
        timestamp: z.number().int().optional(),
    });
}

/** @internal */
export namespace UserInput$ {
    export const inboundSchema: z.ZodType<UserInput, z.ZodTypeDef, unknown> = z.object({
        content: z.string().optional(),
        timestamp: z.number().int().optional(),
    });

    export type Outbound = {
        content?: string | undefined;
        timestamp?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UserInput> = z.object({
        content: z.string().optional(),
        timestamp: z.number().int().optional(),
    });
}

/** @internal */
export namespace RecentChatHistory$ {
    export const inboundSchema: z.ZodType<RecentChatHistory, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string().optional(),
            model_response: z.lazy(() => ModelResponse$.inboundSchema).optional(),
            user_input: z.lazy(() => UserInput$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                model_response: "modelResponse",
                user_input: "userInput",
            });
        });

    export type Outbound = {
        id?: string | undefined;
        model_response?: ModelResponse$.Outbound | undefined;
        user_input?: UserInput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RecentChatHistory> = z
        .object({
            id: z.string().optional(),
            modelResponse: z.lazy(() => ModelResponse$.outboundSchema).optional(),
            userInput: z.lazy(() => UserInput$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                modelResponse: "model_response",
                userInput: "user_input",
            });
        });
}

/** @internal */
export namespace DefaultOptions$ {
    export const inboundSchema: z.ZodType<DefaultOptions, z.ZodTypeDef, unknown> =
        collectExtraKeys$(
            z
                .object({
                    auto_query_guidance: z.nullable(z.string()).optional(),
                    knowledge_base_ids: z.nullable(z.array(z.string())).optional(),
                    model: z.nullable(z.string()).optional(),
                })
                .catchall(z.any()),
            "additionalProperties"
        ).transform((v) => {
            return remap$(v, {
                auto_query_guidance: "autoQueryGuidance",
                knowledge_base_ids: "knowledgeBaseIds",
            });
        });

    export type Outbound = {
        auto_query_guidance?: string | null | undefined;
        knowledge_base_ids?: Array<string> | null | undefined;
        model?: string | null | undefined;
        [additionalProperties: string]: unknown;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DefaultOptions> = z
        .object({
            autoQueryGuidance: z.nullable(z.string()).optional(),
            knowledgeBaseIds: z.nullable(z.array(z.string())).optional(),
            model: z.nullable(z.string()).optional(),
            additionalProperties: z.record(z.any()),
        })
        .transform((v) => {
            return {
                ...v.additionalProperties,
                ...remap$(v, {
                    autoQueryGuidance: "auto_query_guidance",
                    knowledgeBaseIds: "knowledge_base_ids",
                    additionalProperties: null,
                }),
            };
        });
}

/** @internal */
export namespace Chat$ {
    export const inboundSchema: z.ZodType<Chat, z.ZodTypeDef, unknown> = z
        .object({
            brain_id: z.nullable(z.string()).optional(),
            chat_id: z.string().optional(),
            created_at: z.string().optional(),
            last_updated: z.nullable(z.string()).optional(),
            model: z.string().optional(),
            recent_chat_history: z.array(z.lazy(() => RecentChatHistory$.inboundSchema)).optional(),
            system_message: z.nullable(z.string()).optional(),
            temperature: z.nullable(z.number()).optional(),
            title: z.string().optional(),
            user_id: z.string().optional(),
            default_options: z.nullable(z.lazy(() => DefaultOptions$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                brain_id: "brainId",
                chat_id: "chatId",
                created_at: "createdAt",
                last_updated: "lastUpdated",
                recent_chat_history: "recentChatHistory",
                system_message: "systemMessage",
                user_id: "userId",
                default_options: "defaultOptions",
            });
        });

    export type Outbound = {
        brain_id?: string | null | undefined;
        chat_id?: string | undefined;
        created_at?: string | undefined;
        last_updated?: string | null | undefined;
        model?: string | undefined;
        recent_chat_history?: Array<RecentChatHistory$.Outbound> | undefined;
        system_message?: string | null | undefined;
        temperature?: number | null | undefined;
        title?: string | undefined;
        user_id?: string | undefined;
        default_options?: DefaultOptions$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Chat> = z
        .object({
            brainId: z.nullable(z.string()).optional(),
            chatId: z.string().optional(),
            createdAt: z.string().optional(),
            lastUpdated: z.nullable(z.string()).optional(),
            model: z.string().optional(),
            recentChatHistory: z.array(z.lazy(() => RecentChatHistory$.outboundSchema)).optional(),
            systemMessage: z.nullable(z.string()).optional(),
            temperature: z.nullable(z.number()).optional(),
            title: z.string().optional(),
            userId: z.string().optional(),
            defaultOptions: z.nullable(z.lazy(() => DefaultOptions$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                brainId: "brain_id",
                chatId: "chat_id",
                createdAt: "created_at",
                lastUpdated: "last_updated",
                recentChatHistory: "recent_chat_history",
                systemMessage: "system_message",
                userId: "user_id",
                defaultOptions: "default_options",
            });
        });
}
