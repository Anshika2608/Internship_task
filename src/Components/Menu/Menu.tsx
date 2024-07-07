import  { useState } from 'react';
import { IoAddSharp } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
interface SubDepartment {
  name: string;
  checked: boolean;
}

interface Department {
  name: string;
  subDepartments: SubDepartment[];
  checked: boolean;
}

interface MenuProps {
  data: Department[];
}


function Menu({ data }: MenuProps) {
  const [departments, setDepartments] = useState<Department[]>(data);

  const handleDepartmentChange = (index: number) => {
    const newDepartments = [...departments];
    const department = newDepartments[index];
    department.checked = !department.checked;
    department.subDepartments = department.subDepartments.map(sub => ({
      ...sub,
      checked: department.checked,
    }));
    setDepartments(newDepartments);
  };

  const handleSubDepartmentChange = (depIndex: number, subIndex: number) => {
    const newDepartments = [...departments];
    const subDepartment = newDepartments[depIndex].subDepartments[subIndex];
    subDepartment.checked = !subDepartment.checked;

    const allChecked = newDepartments[depIndex].subDepartments.every(sub => sub.checked);
    const allUnchecked = newDepartments[depIndex].subDepartments.every(sub => !sub.checked);

    if (allChecked) {
      newDepartments[depIndex].checked = true;
    } else if (allUnchecked) {
      newDepartments[depIndex].checked = false;
    } else {
      newDepartments[depIndex].checked = false;
    }

    setDepartments(newDepartments);
  };

  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className='mb-16'>
      {departments.map((department, depIndex) => (
        <div key={department.name}>
          <div className="flex  justify-center  capitalize font-bold gap-4">
            <input
              type="checkbox"
              checked={department.checked}
              onChange={() => handleDepartmentChange(depIndex)}
			  className='w-4 '
            />
            <span className="flex menu-item  capitalize font-bold w-40" onClick={() => toggleExpand(depIndex)}>
              {department.name} {expanded[depIndex] ? <RiSubtractFill className='cursor-pointer mt-1' /> : < IoAddSharp className='cursor-pointer mt-1'/>}
            </span>
          </div>
          {expanded[depIndex] && (
            <div className="sub-department">
              {department.subDepartments.map((subDepartment, subIndex) => (
                <div key={subDepartment.name} className='flex  justify-center gap-4'>
					<div>
					<input
                    type="checkbox"
                    checked={subDepartment.checked}
                    onChange={() => handleSubDepartmentChange(depIndex, subIndex)}
					className='w-4'
                  />
					</div>
                 
                  <div className='w-24 gap-2'>{subDepartment.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
