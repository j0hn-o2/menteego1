import { useState } from "react";

//  CreateMentorAccount() {
//   const
//   return (
//     <div>
//       <h1>Create Mentor Account</h1>
//       {/* Add your form or content for creating a mentor account here */}
//     </div>
//   );
// }

// export default CreateMentorAccount;

const CreateMentorAccount = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    currentyear: '',
    bio: '',
    areasofinterest: '',
    specialization: '',
    projecturl: '',
    password: '',
    confirmPassword: '' 
  });

  const handleChange = e => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

  return (
  <div></div>

  );



}

export default CreateMentorAccount;