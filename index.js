// Write your solution in this file!

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object using the spread operator to clone the original employee object
    let updatedEmployee = {...employee};
  
    // Update the value for the specified key in the new object
    updatedEmployee[key] = value;
  
    // Return the updated object
    return updatedEmployee;
  }
  
  let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sam");
  
  console.log(updatedEmployee); 

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the value for the specified key in the original employee object
    employee[key] = value;
  
    // Return the updated employee object
    return employee;
  }
 
  console.log(updatedEmployee); 

  function deleteFromEmployeeByKey(employee, key) {
    // Create a new object using the spread operator to clone the original employee object
    let updatedEmployee = {...employee};
  
    // Delete the property with the specified key from the new object
    delete updatedEmployee[key];
  
    // Return the updated object
    return updatedEmployee;
  } 

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the property with the specified key from the original employee object
    delete employee[key];
  
    // Return the updated employee object
    return employee;
  }