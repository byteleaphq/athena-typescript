/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

/**
 * OK
 */
export type GetOrganisationResponseBody = {
    /**
     * Creation timestamp of the organization
     */
    createdAt?: string | undefined;
    /**
     * Email associated with the organization
     */
    email?: string | undefined;
    /**
     * ID of the organization
     */
    id?: number | undefined;
    /**
     * Name of the organization
     */
    name?: string | undefined;
    /**
     * Name of the organization (same as 'name')
     */
    orgName?: string | null | undefined;
    /**
     * UUID of the organization
     */
    orgUuid?: string | undefined;
    /**
     * Role of the user in the organization
     */
    role?: string | undefined;
    /**
     * Invite token for the organization
     */
    token?: string | undefined;
    /**
     * UUID of the user
     */
    userUuid?: string | undefined;
};

export type GetOrganisationResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    object?: GetOrganisationResponseBody | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export const GetOrganisationResponseBody$inboundSchema: z.ZodType<
    GetOrganisationResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        created_at: z.string().optional(),
        email: z.string().optional(),
        id: z.number().int().optional(),
        name: z.string().optional(),
        org_name: z.nullable(z.string()).optional(),
        org_uuid: z.string().optional(),
        role: z.string().optional(),
        token: z.string().optional(),
        user_uuid: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            created_at: "createdAt",
            org_name: "orgName",
            org_uuid: "orgUuid",
            user_uuid: "userUuid",
        });
    });

/** @internal */
export type GetOrganisationResponseBody$Outbound = {
    created_at?: string | undefined;
    email?: string | undefined;
    id?: number | undefined;
    name?: string | undefined;
    org_name?: string | null | undefined;
    org_uuid?: string | undefined;
    role?: string | undefined;
    token?: string | undefined;
    user_uuid?: string | undefined;
};

/** @internal */
export const GetOrganisationResponseBody$outboundSchema: z.ZodType<
    GetOrganisationResponseBody$Outbound,
    z.ZodTypeDef,
    GetOrganisationResponseBody
> = z
    .object({
        createdAt: z.string().optional(),
        email: z.string().optional(),
        id: z.number().int().optional(),
        name: z.string().optional(),
        orgName: z.nullable(z.string()).optional(),
        orgUuid: z.string().optional(),
        role: z.string().optional(),
        token: z.string().optional(),
        userUuid: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            createdAt: "created_at",
            orgName: "org_name",
            orgUuid: "org_uuid",
            userUuid: "user_uuid",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOrganisationResponseBody$ {
    /** @deprecated use `GetOrganisationResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetOrganisationResponseBody$inboundSchema;
    /** @deprecated use `GetOrganisationResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetOrganisationResponseBody$outboundSchema;
    /** @deprecated use `GetOrganisationResponseBody$Outbound` instead. */
    export type Outbound = GetOrganisationResponseBody$Outbound;
}

/** @internal */
export const GetOrganisationResponse$inboundSchema: z.ZodType<
    GetOrganisationResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => GetOrganisationResponseBody$inboundSchema).optional(),
        Headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            Headers: "headers",
        });
    });

/** @internal */
export type GetOrganisationResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: GetOrganisationResponseBody$Outbound | undefined;
    Headers: { [k: string]: Array<string> };
};

/** @internal */
export const GetOrganisationResponse$outboundSchema: z.ZodType<
    GetOrganisationResponse$Outbound,
    z.ZodTypeDef,
    GetOrganisationResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => GetOrganisationResponseBody$outboundSchema).optional(),
        headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            headers: "Headers",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOrganisationResponse$ {
    /** @deprecated use `GetOrganisationResponse$inboundSchema` instead. */
    export const inboundSchema = GetOrganisationResponse$inboundSchema;
    /** @deprecated use `GetOrganisationResponse$outboundSchema` instead. */
    export const outboundSchema = GetOrganisationResponse$outboundSchema;
    /** @deprecated use `GetOrganisationResponse$Outbound` instead. */
    export type Outbound = GetOrganisationResponse$Outbound;
}
