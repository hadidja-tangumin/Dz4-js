export function Input({ value, setValue }) {
    console.log(value);
    return (
        <div>
            <input className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Введите текст" />
        </div>
    )
}