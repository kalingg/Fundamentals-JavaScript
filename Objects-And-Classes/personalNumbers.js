function createEmployeeList(names) {
    const employeeList = {};
  
    for (const name of names) {
      const personalNum = name.length;
      employeeList[name] = personalNum;
    }
  
    return employeeList;
  }
  
  function printEmployeeDetails(employeeList) {
    for (const employeeName in employeeList) {
      const personalNum = employeeList[employeeName];
      console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
    }
  }
  

  const employeeNames = [

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ]
  
  const employees = createEmployeeList(employeeNames);
  printEmployeeDetails(employees);