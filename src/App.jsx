import ContactForm from "./components/ContactFrom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SurveyForm from "./components/SurveyForm";
// import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div>
         <Sidebar />
      </div>
      <main className="flex-1 min-h-screen">
        <Header />
        <div>
          <h1 className="text-3xl font-semibold text-black p-4 mt-2 ">
          Pro Form Layout
          </h1>
        </div>
         <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
          <div><ContactForm /></div>
          <div> <SurveyForm /></div>
        </div>
        {/* <div className=" grid grid-cols-1 gap-6 p-4">
          <div><Dashboard/></div>
        </div> */}
      </main>
    </div>
  );
}

export default App;
