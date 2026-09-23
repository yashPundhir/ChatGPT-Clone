"use server";

import { prisma } from "@/lib/db";

export type ConversationListItem = {
  id: string;
  title: string;
  isPinned: boolean;
  isArchived: boolean;
  lastMessageAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

export async function listConversations() {}
