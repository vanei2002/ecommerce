import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });


export const AuthUser = () => ({

    signin: async (email: string , password: string) =>{
        try{
            const response = await api.post('/users/singin', {email , password});
            console.log(response.data)
            return response.data;
        }
        catch(err){
          return err
        }
    },

    singinEmail: async (email: string) =>{
        try{
            const response = await api.post('/users/email', {email});
            return response.data;

        }catch(err){
            console.log(err)
        }
    },

    newUser: async (name: string, surname: string, email: string, password: string, token: string) =>{    
        try{
            const reponse = await api.post('/users/create', 
            {   
                name, 
                surname,
                email,
                password,
                token 
            })
            return reponse.data

        }catch(err){
           console.log(console.log(err)) 
        };
    },

    resetUser: async (email: string) =>{
        const response = await api.post('/users/reset', {email});
        return response.data;
    },

    validateToken: async (token: string) =>{
        try{
            const response = await api.post('/users/token', {token});
            return response.data;
        }catch(err){
            console.log(err)
        }
    },

    logoutUser: async () =>{
        const response = await api.post('/logout');
        return response.data;
    }

});