import ListItem from "../components/ListItem";

const List = ({ entries }) => (
    <section>
      <ul>{entries.map((entry, index) => <ListItem key={index} data={entry} />)}</ul>

      <style jsx>{`
        ul {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          list-style-type: none;
        }
    `}</style>
    </section>
);

export default List;