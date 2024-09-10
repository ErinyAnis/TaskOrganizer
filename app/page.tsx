// app/page.tsx (or the correct location of your component)
import { getUserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = auth();

  if (!userId) {
    return  redirect("/sign-in");;
  }

  // Fetch the todo list
  const todos = await getUserTodoListAction({ userId });

  return (
    <main className="m-auto container">
      <AddTodoForm userId={userId} />
      <TodosTable todos={todos} />
    </main>
  );
}
