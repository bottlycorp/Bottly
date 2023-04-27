import { prisma } from "$core/utils/prisma";
import { Prisma } from "@prisma/client";
import { DayJS } from "../day-js";
import { UserIncludeAll } from "./user";

export type DiscussionIncludeAll = Prisma.DiscussionGetPayload<{
  include: { messages: true; user: { include: { usages: true; privacy: true } } };
}>

export const getDiscussion = async(channelId: string): Promise<DiscussionIncludeAll | null> => {
  const discussion = await prisma.discussion.findUnique({
    where: {
      channelId: channelId
    },
    include: {
      messages: true,
      user: { include: { usages: true, privacy: true } }
    }
  });

  if (discussion == null) {
    return null;
  }

  return discussion;
};

export const newDiscussion = async(channelId: string, userId: string): Promise<boolean> => {
  const created = await prisma.discussion.create({
    data: {
      channelId: channelId,
      userId: userId,
      active: true,
      messages: {},
      title: "default",
      createdAt: DayJS().unix()
    }
  });

  return !!created;
};

export const haveActiveDiscussion = (user: UserIncludeAll): boolean => {
  return Object.values(user.discussions).some((discussion) => discussion.active);
};

export const isADiscussion = async(channelId: string): Promise<boolean> => {
  const discussion = await prisma.discussion.findUnique({
    where: {
      channelId: channelId
    }
  });

  return !!discussion;
};

export const isTheAuthor = async(channelId: string, userId: string): Promise<boolean> => {
  const discussion = await prisma.discussion.findUnique({
    where: {
      channelId: channelId
    }
  });

  return discussion?.userId === userId;
};

export const updateDiscussion = async(channelId: string, data: Prisma.DiscussionUpdateInput): Promise<boolean> => {
  const updated = await prisma.discussion.update({
    where: {
      channelId: channelId
    },
    data: data
  });

  return !!updated;
};

export const deleteDiscussion = async(channelId: string): Promise<boolean> => {
  const deleted = await prisma.discussion.delete({
    where: {
      channelId: channelId
    }
  });

  return !!deleted;
};