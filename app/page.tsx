// app/page.tsx (or the correct location of your component)
import { getUserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = auth();

  if (!userId) {
    // Redirect to login page if userId is not available
    // In Next.js, you should handle redirection using middleware, 
    // so this section is more about providing fallback UI.
    // You can return a loading state or a message here if you prefer
    return <p>Loading...</p>;
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
