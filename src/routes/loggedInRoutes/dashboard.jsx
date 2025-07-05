import { useAuth } from "@/context/AuthContext";
import { getAccessToken } from "@/utils/helper";



export default function Dashboard(){
  const { user } = useAuth();
console.log("user",user);
  console.log("getAccessToken", getAccessToken());

    return (
        <section>
            <h1 className="">Dashboard</h1>
        </section>
    )
}