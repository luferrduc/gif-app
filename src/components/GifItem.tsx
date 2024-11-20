interface Props {
  id?: string;
  title: string;
  url: string;
}

export const GifItem = ({ title, url }: Props): JSX.Element => {
  return (
    <div className="card">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  )
}