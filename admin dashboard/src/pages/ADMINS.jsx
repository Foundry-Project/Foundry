import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Toolbar, Edit } from '@syncfusion/ej2-react-grids';
import { employeesGrid } from '../data/dummy.js';
import { Header } from '../components';

const ADMINS = () => {
  const [adminsData, setAdminsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('http://localhost:3000/User/getalladmins');
        setAdminsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching admin data:', error);
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/User/delete/${id}`);
      setAdminsData(prevData => prevData.filter(admin => admin.id !== id));
    } catch (error) {
      console.error('Error deleting admin:', error);
    }
  };

  const updateAdmin = async (id, adminData) => {
    try {
      const response = await axios.put(`http://localhost:3000/User/updateadmin/${id}`, adminData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Admin updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating admin:', error.response ? error.response.data : error.message);
    }
  };

  const handleUpdate = (data) => {
    const { id, ...adminData } = data;
    updateAdmin(id, adminData);
  };

  const actionTemplate = (props) => (
    <div>
      <button 
        style={{ padding: '5px 10px', backgroundColor: '#B22C2C', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} 
        onClick={() => handleDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="ADMINS" />
      <GridComponent
        dataSource={adminsData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
        editSettings={{ allowEditing: true, allowAdding: false, allowDeleting: false }}
        actionBegin={(args) => {
          if (args.requestType === 'save') {
            handleUpdate(args.data);
          }
        }}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          <ColumnDirective headerText="Actions" template={actionTemplate} width="150" />
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar, Edit]} />
      </GridComponent>
    </div>
  );
};

export default ADMINS;