interface TextInputProps {
    label: string;
    type: string;
    placeholder: string;
}

export const TextInput: React.FC<TextInputProps> = ({ label, type, placeholder }) => {
    return (
        <div className="flex flex-col gap-2 border-b-[0.08rem] w-full">
            {label && <label htmlFor={label} className="text-primary">{label}</label>}
            <input type={type} placeholder={placeholder} className="bg-primary text-white px-2 py-2" />
        </div>
    )
}