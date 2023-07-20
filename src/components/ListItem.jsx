export default function ListItem(props) {
  return (
    <ul class="games-list">
      <li>
        <a
          target="_blank"
          rel="noreferer"
          href={props.url}>
          <img
            src={props.Imageurl}
            alt={props.alt}
          />
        </a>
      </li>
    </ul>
  )
}