export const checkError =  (formData) => {
  if(formData){
    const { name, email, password } = formData;
    return { name, email, password }
  }
}