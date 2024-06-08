import './Loading.scss';

export default function Loading() {
  return (
    <div className="loading">
      <p className="loading__content">Loading</p>
      <div className="loading__loader"></div>
    </div>
  )
}