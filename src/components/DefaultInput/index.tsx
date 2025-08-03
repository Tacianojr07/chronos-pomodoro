import style from './style.module.css';

type DefaultInputProps = {
  labelText?: string;
  id: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  type,
  id,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={style.input} id={id} type={type} {...rest} />
    </>
  );
}
