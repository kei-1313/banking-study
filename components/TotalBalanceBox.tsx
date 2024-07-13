import { formatAmount } from "@/lib/utils"
import AnimatedCounter from "./AnimatedCounter"
import DoughnutChart from "./ui/DoughnutChart"

const TotalBalanceBox = ({
  accounts = [], totalBanks, totalCurrentBalance
}: TotalBalanceBoxProps) => {

   // 円グラフのデータを作成 アカウントのデータは安易にクライアントコンポーネントにPropsで渡したくない。
  // クライアント側でレンダリングされるため、情報がむき出しになっている？
    const DoughnutChartData = accounts.map((account: Account) => ({
      name: account.name,
      value: account.currentBalance
  }))

  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart DoughnutChartData={DoughnutChartData}/>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          Bank Accounts: {totalBanks}
        </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">
            Total Current Balance
          </p>

          <div className="total-balance-amount flex-center gap-2">
             {/* コンポーネントで囲むことでserverコンポーネントでも使える */}
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox