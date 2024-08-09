import Image from "next/image";
import HeaderBox from "@/components/HeaderBox";
import ToatalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";

export default async function Home({ searchParams: { id, page } }: SearchParamProps) {

  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })

  if(!accounts) return;
  
  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId })
  return (
    <section className="home">
      <div className="home-content">
        <header className=" home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
            />

            <ToatalBalanceBox 
                accounts={accountsData}
                totalBanks={accounts?.totalBanks}
                totalCurrentBalance={accounts?.totalCurrentBalance}
            />
        </header>

        RECENT TRANSACTIONS
      </div>

    <RightSidebar 
       user={loggedIn}
       transactions={account?.transactions}
       banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
}
