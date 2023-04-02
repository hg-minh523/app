import { getToken } from '../commom/Storage';

export const cartApi = {
    create: async (data) => {
        const token = await getToken();
        const dataS  = await fetch('http://192.168.105.212:4000/api/v1/cart/create', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'authentication': `Beerer ${token}`
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
    search: async (data) => {
      const dataS  = await fetch('http://192.168.105.212:4000/api/v1/cart/search', {
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
        const dataS  = await fetch(`http://192.168.105.212:4000/api/v1/product/getById/${id}`, {
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