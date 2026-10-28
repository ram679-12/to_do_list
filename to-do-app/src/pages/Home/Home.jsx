import Header from '../../components/common/Header';
import FilterBar from '../../components/todo/FilterBar';
import TaskList from '../../components/todo/TaskList';
import AddTask from '../../components/todo/AddTask';
import './Home.css';

function Home() {
  return (
    <div className="home-screen">
      <div className="home-card">
        <Header />
        <FilterBar />
        <TaskList />
        <AddTask />
      </div>
    </div>
  );
}

export default Home;
