import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const loggedIn = await getLoggedInUser();
  const accouts = await getAccounts({userId: loggedIn.$id});

  

  //アカウントのデータを変数に格納
  const accountsData = accouts?.data;

  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const accout = await getAccount({ appwriteItemId });
  
  console.log("アカウントデータ数", accountsData);

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={accountsData}
            totalBanks={accouts?.totalBanks}
            totalCurrentBalance={accouts?.totalCurrentBalance}
          />
        </header>
      </div>

      <RightSidebar
        user={loggedIn}
      />
    </section>
  )
}

export default Home