import { getUserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = auth();
  const todos = await getUserTodoListAction({userId});
  return (
    <main className=" m-auto container">
      <AddTodoForm userId={userId} />
      <TodosTable todos={todos} />
    </main>
  );
}
