import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid,GridColDef } from '@mui/x-data-grid';
import { Post } from "../../Interface/Post";


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'title', headerName: 'Title', width: 250, editable: true },
  { field: 'body', headerName: 'Body', width: 700, editable: true
  }
];

function Second_page() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
 
  return (
    <>
    <h1 className="text-4xl font-bold mb-4 text-center mt-8">Posts</h1>
    <div style={{ height: 600, width: '80%', marginLeft: '220px'}}>
      
      <DataGrid
        rows={posts}
        columns={columns}
       
       
        sx={{
           
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: 'bold',
              fontSize: '20px',
            },
          
          }}
      />
    </div>
    </>
    
  );
}

export default Second_page;
