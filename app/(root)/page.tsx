import Image from "next/image";
import HeaderBox from "@/components/HeaderBox";
import ToatalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  const loggedIn = { firstName: "Adrian", lastName: "JSM", email: "contec@gmail.com"}

  return (
    <section className="home">
      <div className="home-content">
        <header className=" home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstname || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
            />

            <ToatalBalanceBox 
              accounts={[]} 
              totalBanks={1}
              totalCurrentBalance={1250.35}
            />
        </header>

        RECENT TRANSACTIONS
      </div>

    <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[ { currentBalance: 230.11 }, { currentBalance: 31.333 }]}
      />
    </section>
  );
}
