/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type Document = {
    /**
     * The header or context information for the document chunk.
     */
    chunkHeader?: string | null | undefined;
    /**
     * The content or text of the document chunk.
     */
    content?: string | null | undefined;
    /**
     * The Unix timestamp representing the creation time of the document.
     */
    createdOn?: number | undefined;
    /**
     * The description or summary of the document.
     */
    description?: string | null | undefined;
    /**
     * The type of the document (e.g., raw_text, file, url).
     */
    documentType?: string | undefined;
    /**
     * The file extension of the document (if applicable).
     */
    fileExtension?: string | null | undefined;
    /**
     * The name of the file for the document (if applicable).
     */
    fileName?: string | null | undefined;
    /**
     * The unique identifier of the document.
     */
    id?: string | undefined;
    /**
     * The identifier of the knowledge base to which the document belongs.
     */
    knowledgeBaseId?: string | undefined;
    /**
     * The URL or link to the source of the document (if applicable).
     */
    linkToSource?: string | null | undefined;
    /**
     * The supplementary identifier of the document (if applicable).
     */
    suppId?: string | null | undefined;
    /**
     * The title of the document.
     */
    title?: string | null | undefined;
    /**
     * The URL of the document (if applicable).
     */
    url?: string | null | undefined;
    /**
     * The status of the document vectorization process.
     */
    vectorizationStatus?: string | undefined;
    /**
     * The total number of chunks the document is divided into.
     */
    totalChunks?: number | null | undefined;
};

/** @internal */
export const Document$inboundSchema: z.ZodType<Document, z.ZodTypeDef, unknown> = z
    .object({
        chunk_header: z.nullable(z.string()).optional(),
        content: z.nullable(z.string()).optional(),
        created_on: z.number().int().optional(),
        description: z.nullable(z.string()).optional(),
        document_type: z.string().optional(),
        file_extension: z.nullable(z.string()).optional(),
        file_name: z.nullable(z.string()).optional(),
        id: z.string().optional(),
        knowledge_base_id: z.string().optional(),
        link_to_source: z.nullable(z.string()).optional(),
        supp_id: z.nullable(z.string()).optional(),
        title: z.nullable(z.string()).optional(),
        url: z.nullable(z.string()).optional(),
        vectorization_status: z.string().optional(),
        total_chunks: z.nullable(z.number().int()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            chunk_header: "chunkHeader",
            created_on: "createdOn",
            document_type: "documentType",
            file_extension: "fileExtension",
            file_name: "fileName",
            knowledge_base_id: "knowledgeBaseId",
            link_to_source: "linkToSource",
            supp_id: "suppId",
            vectorization_status: "vectorizationStatus",
            total_chunks: "totalChunks",
        });
    });

/** @internal */
export type Document$Outbound = {
    chunk_header?: string | null | undefined;
    content?: string | null | undefined;
    created_on?: number | undefined;
    description?: string | null | undefined;
    document_type?: string | undefined;
    file_extension?: string | null | undefined;
    file_name?: string | null | undefined;
    id?: string | undefined;
    knowledge_base_id?: string | undefined;
    link_to_source?: string | null | undefined;
    supp_id?: string | null | undefined;
    title?: string | null | undefined;
    url?: string | null | undefined;
    vectorization_status?: string | undefined;
    total_chunks?: number | null | undefined;
};

/** @internal */
export const Document$outboundSchema: z.ZodType<Document$Outbound, z.ZodTypeDef, Document> = z
    .object({
        chunkHeader: z.nullable(z.string()).optional(),
        content: z.nullable(z.string()).optional(),
        createdOn: z.number().int().optional(),
        description: z.nullable(z.string()).optional(),
        documentType: z.string().optional(),
        fileExtension: z.nullable(z.string()).optional(),
        fileName: z.nullable(z.string()).optional(),
        id: z.string().optional(),
        knowledgeBaseId: z.string().optional(),
        linkToSource: z.nullable(z.string()).optional(),
        suppId: z.nullable(z.string()).optional(),
        title: z.nullable(z.string()).optional(),
        url: z.nullable(z.string()).optional(),
        vectorizationStatus: z.string().optional(),
        totalChunks: z.nullable(z.number().int()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            chunkHeader: "chunk_header",
            createdOn: "created_on",
            documentType: "document_type",
            fileExtension: "file_extension",
            fileName: "file_name",
            knowledgeBaseId: "knowledge_base_id",
            linkToSource: "link_to_source",
            suppId: "supp_id",
            vectorizationStatus: "vectorization_status",
            totalChunks: "total_chunks",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Document$ {
    /** @deprecated use `Document$inboundSchema` instead. */
    export const inboundSchema = Document$inboundSchema;
    /** @deprecated use `Document$outboundSchema` instead. */
    export const outboundSchema = Document$outboundSchema;
    /** @deprecated use `Document$Outbound` instead. */
    export type Outbound = Document$Outbound;
}
