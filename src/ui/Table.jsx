function Table({ children }) {
  return (
    <div className="overflow-x-auto bg-secondary-0">
      <table>{children}</table>
    </div>
  );
}

// we just export Table component!
export default Table;

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
