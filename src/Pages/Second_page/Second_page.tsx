import Posts_table from "../../Components/Posts_table/Posts_table";
import Menu from "../../Components/Menu/Menu";
const jsonData = [
  {
    department: "customer_service",
    sub_departments: [
      "support",
      "customer_success"
    ]
  },
  {
    department: "design",
    sub_departments: [
      "graphic_design",
      "product_design",
      "web_design"
    ]
  }
];
const formattedData = jsonData.map(dep => ({
  name: dep.department,
  checked: false,
  subDepartments: dep.sub_departments.map(sub => ({
    name: sub,
    checked: false
  }))
}));
function Second_page() {
  return (
    <>
    <h1 className="text-4xl font-bold mb-4 text-center mt-8">Posts</h1>
   <Posts_table/>
   <div className=" w-full mt-12 flex justify-center gap-3 flex-col">
      <h1 className="font-bold text-center text-2xl">Expandable and Collapsible Menu</h1>
      <div  >
      <Menu data={formattedData} />
      </div>
      
    </div>
    </>
  );
}

export default Second_page;







// const App: React.FC = () => {
//   return (
   
//   );
// };



