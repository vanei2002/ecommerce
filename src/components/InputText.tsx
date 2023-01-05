import "../styles/components/inputtext.sass"

type GetValue={
    type: string,
    id: string,
    val: string,
    onChange: (value: any) => void;
    children: string;
}

const InputText: React.FC <GetValue>= ({ children, type, val, id, onChange }) => 
    <label className="inputDados"> {children}
        <input type={type} placeholder={val} id={id} className="inputText" onChange={e => onChange(e.target.value)}/>
    </label>

export default InputText;