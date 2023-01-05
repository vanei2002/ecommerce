import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });


export const AuthUser = () => ({

    signin: async (email: string , password: string) =>{
        try{
            const response = await api.post('/users/singin', {email , password});
            return response.data;
        }
        catch(err){
          return err
        }
    },
 
    logoutUser: async () =>{
        const response = await api.post('/logout');
        return response.data;
    },

    newUser: async (name: string, secodName: string, email: string, password: string) =>{    
        const reponse = await api.post('/users', {name , secodName , email , password})
        return reponse.data;
    },

    resetUser: async (email: string) =>{
        const response = await api.post('/reset', {email});
        return response.data;
    },

    validateToken: async (token: string) =>{
        const response = await api.post('/users/token', {token});
        return response.data;
    }

});