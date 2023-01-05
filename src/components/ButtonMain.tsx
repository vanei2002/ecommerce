import '../styles/components/Buttonmain.sass'

type Button ={
    children: string;
    authUser: () => void
}

export const ButtonMain = ({children , authUser}: Button) => 
    <button className='button' onClick={authUser}type="button"> 
            {children} 
    </button>


 
