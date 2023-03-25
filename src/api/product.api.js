
export const productAPi = {
    search: async (data) => {
      const dataS  = await fetch('http://192.168.22.127:4000/api/v1/product/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
        .then(json => {
            return json;
        })
        .catch(error => {
          console.error(error);
        });
        return dataS
    },
    getById: async (id) => {
        const dataS  = await fetch(`http://192.168.22.127:4000/api/v1/product/getById/${id}`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              },
          }).then(response => response.json())
          .then(json => {
              return json;
          })
          .catch(error => {
            console.error(error);
          });
          return dataS
      }
}