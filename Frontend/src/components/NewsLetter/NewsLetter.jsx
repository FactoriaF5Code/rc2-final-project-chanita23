import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Recibe Ofertas exclusivas en tu correo electrónico</h1>
      <br/>
      <br/>
      <p>Suscríbete a nuestro boletín y mantente actualizado</p>
      <div>
        <input type="email" placeholder="Email" />
        <button>Suscribir</button>
      </div>
    </div>
  )
}
