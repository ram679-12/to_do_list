import Sidebar from '../../components/common/Sidebar';
import DashboardHeader from '../../components/todo/DashboardHeader';
import StatCards from '../../components/todo/StatCards';
import TaskGauge from '../../components/todo/TaskGauge';
import CategoryBreakdown from '../../components/todo/CategoryBreakdown';
import TaskBoard from '../../components/todo/TaskBoard';
import BottomWidgets from '../../components/todo/BottomWidgets';
import './Home.css';

function Home() {
  return (
    <div className="dashboard-app-frame">
      <div className="dashboard-main-window">
        {/* Left Dark Green Sidebar */}
        <Sidebar />

        {/* Right White Content Area */}
        <main className="dashboard-content-area">
          <DashboardHeader />
          <StatCards />

          {/* Middle Row Widgets */}
          <div className="dashboard-middle-row">
            <TaskGauge />
            <CategoryBreakdown />
            <TaskBoard />
          </div>

          {/* Bottom Row Widgets */}
          <BottomWidgets />
        </main>
      </div>
    </div>
  );
}

export default Home;
