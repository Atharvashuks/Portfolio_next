type Props = {
  type?: string;
  title: string;
  state: string;
  placeholder: string;
  isTextArea: boolean;
  setState: (value: string) => void;
};

const FormFileld = ({
  type,
  title,
  state,
  placeholder,
  isTextArea,
  setState,
}: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="name" className="sm:hidden">
        {title}
      </label>
      {isTextArea ? (
        <textarea
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder={placeholder}
          className="formInput"
        />
      ) : (
        <input
          type={type || "text"}
          name="name"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder={placeholder}
          className="formInput"
        />
      )}
    </div>
  );
};

export default FormFileld;
