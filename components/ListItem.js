const ListItem = ({ data }) => (
    <li>
      {data.url ? (
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            {data.title}
          </a>
      ) : (
          <span>{data.title}</span>
      )}

      <style jsx>{`
        li {
          display: flex;
        }
        li:not(:first-child) {
          margin-left: .5rem;
        }
        a {
          color: white;
          font-size: 1.2rem;
          font-family: 'Merriweather', Georgia, Times, serif;
        }
    `}</style>
    </li>
);

export default ListItem;