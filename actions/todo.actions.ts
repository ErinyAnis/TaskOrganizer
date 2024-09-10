"use server";

import { ITodo } from "@/interfaces";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getUserTodoListAction = async ({
  userId,
}: {
  userId: string | null;
}) => {
  if (!userId) {
    throw new Error("User ID is required.");
  }

  return await prisma.todo.findMany({
    where: {
      user_id: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTodoAction = async ({
  title,
  body,
  completed,
  userId,
}: {
  title: string;
  body?: string;
  completed: boolean;
  userId: string | null;
}) => {
  if (!userId) {
    throw new Error("User ID is required.");
  }

  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
      user_id: userId,
    },
  });

  revalidatePath("/");
};

export const deleteTodoAction = async ({ id }: { id: string }) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
};

export const updateTodoAction = async ({
  id,
  title,
  body,
  completed,
}: ITodo) => {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      body,
      completed,
    },
  });

  revalidatePath("/");
};
