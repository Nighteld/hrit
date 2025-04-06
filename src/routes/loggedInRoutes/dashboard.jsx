import { useAuth } from "@/context/AuthContext";



export default function Dashboard(){
  const { user } = useAuth();
console.log("user",user);
    return (
        <section>
            <h1 className="">Dashboard</h1>
        </section>
    )
}