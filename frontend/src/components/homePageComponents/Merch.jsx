import classes from "./Merch.module.css";

export default function Merch() {
  const merchItems = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
  ];

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.sectionTitle}>MERCH</h2>

        <div className={classes.grid}>
          {merchItems.map((item) => (
            <a key={item.id} href="#" className={classes.card}>
              <div className={classes.placeholder}></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}