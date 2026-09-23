"use server";

import { currentUser } from "@clerk/nextjs/server";

import { prisma } from "@/lib/db";

export async function onBoard() {
  const clerkUser = await currentUser();

  try {
    if (!clerkUser) {
      throw new Error("Unauthorized");
    }

    const email = clerkUser.emailAddresses[0]?.emailAddress ?? null;

    return prisma.user.upsert({
      where: { clerkId: clerkUser.id },
      create: {
        clerkId: clerkUser.id,
        email,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        imageUrl: clerkUser.imageUrl,
      },
      update: {
        email,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        imageUrl: clerkUser.imageUrl,
      },
    });
  } catch (error) {
    console.error("Unauthorized User");
    console.error(error);
  }
}
