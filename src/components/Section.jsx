export default function Section(props) {
  return (
    console.log(props),
    <section>
      <div>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        <ul class="games-list">
          {props.children}
        </ul>
      </div>
    </section>
  )
}