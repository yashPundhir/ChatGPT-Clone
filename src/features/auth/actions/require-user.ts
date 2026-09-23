"use server";

import { prisma } from "@/lib/db";

import { auth } from "@clerk/nextjs/server";

export async function requireUser() {
  const { userId } = await auth.protect();

  try {
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      throw new Error("User not found. Complete onboarding first.");
    }

    return user;
  } catch (error) {
    if (error instanceof Error && error.message.includes("onboarding")) {
      throw error;
    }
    console.error("DB error:", error);
    throw new Error("Something went wrong");
  }
}
