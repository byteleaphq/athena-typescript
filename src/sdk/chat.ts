/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { chatCreateChatThread } from "../funcs/chatCreateChatThread.js";
import { chatCreateChatThreadWithMsg } from "../funcs/chatCreateChatThreadWithMsg.js";
import { chatDeleteChatThread } from "../funcs/chatDeleteChatThread.js";
import { chatGetChat } from "../funcs/chatGetChat.js";
import { chatGetChatThread } from "../funcs/chatGetChatThread.js";
import { chatListChatThreads } from "../funcs/chatListChatThreads.js";
import { chatSendChatMessage } from "../funcs/chatSendChatMessage.js";
import { chatUpdateChatThread } from "../funcs/chatUpdateChatThread.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Chat extends ClientSDK {
  /**
   * Create New Chat Thread
   *
   * @remarks
   * Create a new chat instance
   */
  async createChatThread(
    request?: operations.CreateChatThreadRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.CreateChatThreadResponseBody> {
    return unwrapAsync(chatCreateChatThread(
      this,
      request,
      options,
    ));
  }

  /**
   * List Chat Threads
   *
   * @remarks
   * List chat threads for the current user id
   */
  async listChatThreads(
    options?: RequestOptions,
  ): Promise<Array<components.Chat>> {
    return unwrapAsync(chatListChatThreads(
      this,
      options,
    ));
  }

  /**
   * Get Chat Thread
   */
  async getChatThread(
    request: operations.GetChatThreadRequest,
    options?: RequestOptions,
  ): Promise<components.Chat> {
    return unwrapAsync(chatGetChatThread(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Chat Thread
   */
  async updateChatThread(
    request: operations.UpdateChatThreadRequest,
    options?: RequestOptions,
  ): Promise<components.Chat> {
    return unwrapAsync(chatUpdateChatThread(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Chat Thread
   */
  async deleteChatThread(
    request: operations.DeleteChatThreadRequest,
    options?: RequestOptions,
  ): Promise<components.Chat> {
    return unwrapAsync(chatDeleteChatThread(
      this,
      request,
      options,
    ));
  }

  /**
   * Create New Chat Thread With Message
   *
   * @remarks
   * Create a new chat with the specified brain and message.
   */
  async createChatThreadWithMsg(
    request?: operations.CreateChatThreadWithMsgRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<Array<components.ChatInteraction>> {
    return unwrapAsync(chatCreateChatThreadWithMsg(
      this,
      request,
      options,
    ));
  }

  /**
   * Send Chat Message
   */
  async sendChatMessage(
    request?: operations.SendChatMessageRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<Array<components.ChatInteraction>> {
    return unwrapAsync(chatSendChatMessage(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Chat Interactions
   */
  async getChat(
    request: operations.GetChatRequest,
    options?: RequestOptions,
  ): Promise<Array<components.ChatInteraction>> {
    return unwrapAsync(chatGetChat(
      this,
      request,
      options,
    ));
  }
}
