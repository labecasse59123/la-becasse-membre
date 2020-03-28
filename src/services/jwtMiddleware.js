export default function() {

    return (request) => {
     if (!localStorage) {
        console.log('client does not support localStorage');
        return request;
      }
  
      const localJwt = localStorage.getItem('jwt');
      if (localJwt) {
        request.set({ Authorization: `Bearer ${localJwt}` });
      }
      return request;
    }
}
