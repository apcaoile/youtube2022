import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Datatable = () => {
  //  const [data, setData] = useState(userRows);  Dummy data.
  const [data, setData] = useState([]);

  useEffect(() => {
//   const fetchData = async () => {
//      let list = [];
//      try {
//        const querySnapshot = await getDocs(collection(db, "users"));
//        querySnapshot.forEach((doc) => {
//          list.push({ id: doc.id, ...doc.data() });
//        });
//        setData(list);
//        console.log(list);
//      } catch (error) {
//        console.log(error);
//      }
//    };
//    fetchData();
//  }, []);

  // Listen realtime
  const unsub = onSnapshot(
    collection(db, "users"), 
    (snapShot) => {
      let list = [];
      snapShot.docs.forEach((doc) => {
        list.push({ id:doc.id, ...doc.data() });
      });
      setData(list);
    },
    (error) => {
      console.log(error);
    }
  );

  return () => {
    unsub();
  };
}, []);

  console.log(data);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
    //    setData(data.filter((item) => item.id !== id));  Dummy data filter
=======
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
>>>>>>> b9226c6de61075bdf238df1282a6f2519b3a40a5
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;