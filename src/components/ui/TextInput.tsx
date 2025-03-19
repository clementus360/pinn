interface TextInputProps {
    name: string;
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ name, value, label, type, placeholder, onChange, errorMessage }) => {
    return (
        <div className="flex flex-col gap-2 border-b-[0.08rem] w-full">
            {label && <label htmlFor={label} className="text-primary">{label}</label>}
            <input name={name} value={value} type={type} placeholder={placeholder} onChange={onChange} className="bg-primary text-white px-2 py-2" />
            {errorMessage && <p className="text-red-400 text-sm">{errorMessage}</p>}
        </div>
    )
}