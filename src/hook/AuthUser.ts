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

    singinEmail: async (email: string | boolean) =>{

        try{
            const response = await api.post('/users/singin', {email});
            return response.data;

        }catch(err){
            console.log(err)
        }
    },
    newUser: async (name: string, secodName: string, email: string, password: string, token: string) =>{    
        try{
            const reponse = await api.post('/users/create', 
            {
                email, 
                name, 
                secodName,
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
        }catch{
            console.log('error')
        }
    },

    logoutUser: async () =>{
        const response = await api.post('/logout');
        return response.data;
    }

});